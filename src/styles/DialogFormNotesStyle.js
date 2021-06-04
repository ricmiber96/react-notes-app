import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles(
    {
        root:{
            '& > *': {
                marginLeft: '.3rem',
                color:'#fff',
              },
        },
        formcontrol:{
            // position:'absolute',
            // right:0,
            width:'75%',
            height:'1.1em'
        }
    }
)