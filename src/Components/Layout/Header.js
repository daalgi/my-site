import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as MenuIcon } from "../../icons/menu.svg";

import routes from '../routes'


const Header = () =>
    <header>
        <Link className="header-logo" to="/">David A.G.</Link>
        <input type="checkbox" id="nav-toggle" class="nav-toggle" />
        <nav>
            <ul>
                {routes.map(({ title, path, inHeader }, index) =>
                    inHeader && (
                        <li key={index}>
                            <Link 
                                //key={index}
                                to={path} className="nav-item">
                                {title}
                            </Link>
                        </li>
                    )
                )}
            </ul>
        </nav>
        <label for="nav-toggle" class="nav-toggle-label">
            <span></span>
        </label>
    </header>


export default Header