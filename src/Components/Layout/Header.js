import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import DehazeIcon from '@material-ui/icons/Dehaze'
import { ReactComponent as MenuIcon } from "../../icons/menu.svg";

import routes from '../routes'


const Header = () => {
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => setToggle(!toggle)

    return (
        <nav>
            <div className="nav-div">
                <div className="nav-items-container">
                    <div className="nav-logo">
                        <Link to="/" >David A.G.</Link>
                    </div>
                    <ul className="nav-right">
                        {routes.map(({ title, path, inHeader }, index) =>
                            inHeader && (
                                <Link
                                    key={index}
                                    to={path}
                                    className={`nav-item ${toggle ? "nav-item-hidden" : ""}`}
                                >
                                    {title.toLocaleUpperCase()}
                                </Link>

                            )
                        )}
                        <MenuIcon
                            className="nav-menu-icon"
                            onClick={handleToggle}
                        />
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Header