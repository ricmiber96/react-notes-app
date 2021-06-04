import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles({
    root:{
        maxWidth:'854px',
        width:'100%',
        margin:'1em auto 4em',
        padding:'15px',
    },
    search:{
        position:'relative',
        width:'100%',
        height: '46px',
        backgroundColor:'white',
        boxShadow: '0px 3px 6px #00000029',
        opacity: '1'
    },
    searchIcon:{
        height: '100%',
        paddingLeft:'1rem',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color:'grey'
    },
    searchInput:{
        width: '100%',
        height:'100%',
        paddingLeft:'2.5rem',
        fontSize:'18',
    }
})