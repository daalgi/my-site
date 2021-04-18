import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './Header'


const Layout = ({ children }) =>
    <>
        <CssBaseline />
        <Header />
        <div id="page-content">
            {children}
        </div>
    </>

export default Layout