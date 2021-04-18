import Home from './Home'
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'

const routes = [
    {
        title: "Home", icon: "",
        path: "/home/", exact: true,
        inHeader: false,
        component: _ => <Home />
    }, {
        title: "About", icon: "",
        description: "About",
        path: "/about/", exact: true,
        inHeader: true,
        component: _ => <About />
    }, {
        title: "Portfolio", icon: "",
        path: "/portfolio/", exact: true,
        inHeader: true,
        component: _ => <Portfolio />
    }, {
        title: "Contact", icon: "",
        description: "Contact",
        path: "/contact/", exact: true,
        inHeader: true, 
        component: _ => <Contact />
    } 
]

export default routes