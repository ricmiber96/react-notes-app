import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles(
    {
        root:{
            position:'relative',
            color:'white'
        },
        title:{
            float:'left',
            fontSize:'20px',
            marginLeft:'2em',
            marginRight:'4em',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            cursor: 'pointer'
        },
        checkBtn:{
            position:'absolute',
            top: '.4em',
            color: '#fff',
            padding: '.2em',
            opacity: '.6',
            '&.Mui-checked': {
              color: 'inherit'
            }
        },
        description:{
            height: '5.7em',
            overflow: 'hidden',
            fontSize:'14px',
            textAlign:'left',
            font: 'normal normal normal 14px/19px Roboto',
            opacity:'0.8'
        },
        btnShowMore:{
            margin:'0 auto',
            display:'block',
            marginTop:'.5rem',
            textDecoration:'none',
            color:'#fff',
            border: '1px solid rgba(255, 255, 255, 0.23)',
            '&:hover':{
                textDecoration: 'none',
                backgroundColor: 'rgba(255,255, 255, 0.04)'
            }
        },
        date:{
            textAlign:'left',
            fontSize:'15px',
            opacity:'0.6',
            margin: '1em 0 -.6em'
        },
        completed: {
            textDecoration: 'line-through',
        },
        deleteDialog:{
            '& .MuiDialog-paper': {
                borderRadius: 0,
                boxShadow: '0 3px 6px #00000029'
              },
              '& .MuiDialog-paperWidthSm': {
                width: '100%',
                maxWidth: '350px',
                marginLeft: 0,
                marginRight: 0
              },
              '& .MuiDialogTitle-root': {
                fontSize: '1em',
                color: '#00000099'
              }
        },
        btnDelete:{
            color:'#F44336'
        }
    }
)