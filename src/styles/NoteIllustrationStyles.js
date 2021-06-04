import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme)=>({
    root:{
        position:'relative',
        textAlign:'center',
    },
    heading:{
        marginTop:'.5rem',
        color:'',
        opacity:0.6
    },
    images:{
        marginTop:'4em'
    },
    [theme.breakpoints.down('xs')]:{
        heading:{
            marginTop:'0',
            fontSize:'2em'
        }
    }

}))