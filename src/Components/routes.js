import Home from './Home'
import Blog from './Blog'
import Portfolio from './Portfolio'


const routes = [
    {
        title: "Home", icon: "",
        path: "/home/", exact: true,
        inHeader: false,
        component: _ => <Home />
    }, {
        title: "Blog", icon: "",
        isBlog: true,
        description: "Blog",
        path: "/blog/", exact: true,
        inHeader: true,
        component: posts => <Blog posts={posts} />
    }, {
        title: "Portfolio", icon: "",
        path: "/portfolio/", exact: true,
        inHeader: true,
        component: _ => <Portfolio />
    },
]

export default routes