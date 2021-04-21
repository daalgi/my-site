import Header from './Header'
import './styles.css'


const Layout = ({ children }) =>
    <>
        <Header />
        <main id="page-content">
            {children}
        </main>
    </>

export default Layout