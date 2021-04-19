import React from 'react'
// import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './Header'
import './styles.css'


const Layout = ({ children }) =>
    <>
        {/* <CssBaseline /> */}
        <Header />
        <main id="page-content">
            {children}
        </main>
    </>

export default Layout