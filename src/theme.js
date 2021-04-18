import { createMuiTheme } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'

export default createMuiTheme({
    palette: {        
        primary: {
            light: "hsl(213, 13%, 21%)",
            main: "hsl(213, 13%, 17%)",
            dark: "hsl(213, 13%, 13%)",
            contrastText: "hsl(213, 13%, 8%)",
        },
        // type: 'dark'
    },
    spacing: 10,
})