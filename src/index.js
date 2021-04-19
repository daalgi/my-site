import React from 'react'
import ReactDOM from 'react-dom'
// import { ThemeProvider } from '@material-ui/core/styles'

import './index.css'
// import theme from './theme'
import App from './Components/App'

ReactDOM.render(
    <React.StrictMode>
        {/* <ThemeProvider theme={theme}> */}
        <App />
        {/* </ThemeProvider> */}
    </React.StrictMode>,
    document.getElementById('root')
)