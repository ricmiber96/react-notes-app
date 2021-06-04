import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme)=>({

    root:{
        color:'#fff',
        backgroundColor: theme.palette.primary.dark,
        marginTop:'.5rem'
    },
    [theme.breakpoints.down('xs')]:{
        root:{
            width:'100%',
        }
    }


}))
