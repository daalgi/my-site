import { Suspense } from 'react'
import {
    HashRouter, Route, Switch
} from 'react-router-dom'

import Layout from './Layout'
import routes from './routes'
import Home from './Home'


const App = () =>
    <HashRouter>
        <Suspense fallback={<div>Loading...</div>}>
            <Layout>
                <Switch>
                    {routes.map((route, index) =>
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                        >
                            <route.component />
                        </Route>
                    )}
                    {/* <Route path='*' >{<NotFound />}</Route> */}
                    <Route path='*' >{<Home />}</Route>
                </Switch>
            </Layout>
        </Suspense>
    </HashRouter>


export default App