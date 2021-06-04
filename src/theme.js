import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
    wrapper:{
        width:'100%',
        maxWidth:'824px',
    },
    palette:{
        grey: {
            main: '#282E2999'
          }
    }



})

export default theme