import { useState, useEffect, Suspense } from 'react'
import {
    HashRouter, Route, Switch
} from 'react-router-dom'

import Layout from './Layout'
import ScrollToTop from './Layout/ScrollToTop'
import siteRoutes from './routes'
import Home from './Home'
import MarkdownPost from './MarkdownPost'


const App = () => {
    const [routes, setRoutes] = useState(siteRoutes)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        // Load the posts from the github repo
        fetch("https://raw.githubusercontent.com/daalgi/my-site/main/posts/posts.json")
            .then(res => res.json())
            .then(posts => {
                for (let post of posts) {
                    if (!post.file)
                        post.file = `https://raw.githubusercontent.com/daalgi/my-site/main/posts/${post.id}/post.md`
                    post.isPost = true
                    post.path = `/blog/post/${post.id}/`
                    post.exact = true
                    post.component = () => <MarkdownPost file={post.file} />
                }
                setPosts(posts)
                setRoutes([...siteRoutes, ...posts])
            })
            .catch(err => console.log(err))
    }, [])
    // console.log(routes)
    // console.log(posts)
    return (
        <HashRouter>
            <ScrollToTop />
            <Suspense fallback={<div>Loading...</div>}>
                <Layout>
                    <Switch>
                        {routes.map((route, index) =>
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                            >{
                                route.isBlog 
                                ? route.component(posts) // Blog component
                                : <route.component />
                            }
                            </Route>
                        )}
                        {/* <Route path='*' >{<NotFound />}</Route> */}
                        <Route path='*' >{<Home />}</Route>
                    </Switch>
                </Layout>
            </Suspense>
        </HashRouter>
    )
}

export default App