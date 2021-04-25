import { useRef } from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as LinkedinIcon } from '../../icons/linkedin.svg'
import { ReactComponent as GithubIcon } from '../../icons/github.svg'
import routes from '../routes'


const Header = () => {
    const toggle = useRef()

    // Nav with toggle in small devices
    // opens and closes according to the checkbox state
    // To close it, just uncheck it
    const handleCloseNav = () =>
        toggle.current.checked = false

    return (
        <header>
            <Link className="header-logo" to="/">David A.G.</Link>
            {/* <h1 className="header-logo">David A.G.</h1> */}
            <input type="checkbox" id="nav-toggle" className="nav-toggle" ref={toggle} />
            <nav>
                <ul>
                    {routes.map(({ title, path, inHeader }, index) =>
                        inHeader && (
                            <li key={index}>
                                <Link
                                    //key={index}
                                    to={path} className="nav-item"
                                    onClick={handleCloseNav}
                                >
                                    {title}
                                </Link>
                            </li>
                        )
                    )}
                    <li>
                        <a href="https://www.linkedin.com/in/davidalegre/" target="_blank" >
                            <LinkedinIcon className="nav-item-icon"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/daalgi" target="_blank" >
                            <GithubIcon className="nav-item-icon"/>
                        </a>
                    </li>
                </ul>
            </nav>
            <label htmlFor="nav-toggle" className="nav-toggle-label">
                <span></span>
            </label>
        </header>
    )
}

export default Header