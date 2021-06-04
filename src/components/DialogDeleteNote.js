import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core'
import axios from 'axios'
import react from 'react'
import {useStyles} from '../styles/CardStyles'

export default function DialogDelete({noteID,noteTitle,open,close}){
    
    const classes = useStyles()

    let deleteNote =(e)=>{
        e.preventDefault()
        console.log(noteID)
        axios.delete('http://localhost:5000/notes/'+noteID)

        window.location = '/'
    }


    return(
        <Dialog open={open} close={close} className={classes.deleteDialog}>
            <DialogTitle>
                Delete Note?
            </DialogTitle>
            <DialogContent>
                <p>{noteTitle}</p>
            </DialogContent>
            <DialogActions>
                <Button onClick={close} color="primary">Cancel</Button>
                <Button onClick={deleteNote} className={classes.btnDelete}>Delete</Button>
            </DialogActions>
        </Dialog>
    )

}