import react, { useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, Icon, InputLabel, MenuItem, Select, Snackbar, TextField } from '@material-ui/core'
import { useStyles } from '../styles/AddNoteButtonStyle'
import categories from '../utils/Categories.json'
import DialogAddNote from './DialogAddNote'
import Alert from '@material-ui/lab/Alert'



export default function ButtonAddNote(){
    const classes = useStyles()

    const [open, setOpen] = useState(false)
    const [openSnackbar,setOpenSnackbar] = useState(false)


    const handleClickOpen = () =>{
        setOpen(true)
    }

    const handleClose = () =>{
        setOpen(false)
    }

    const handleCloseSnackbar = ()=>{
        setOpenSnackbar(false)
    }

    const visibleSnackbar = (visible)=>{
        setOpenSnackbar(visible)
    }

    return(
        <>
            <Button className={classes.root} onClick={handleClickOpen} variant="contained" color="primary" size="large" startIcon={<Icon>add</Icon>}>Add Note</Button>
            <DialogAddNote open={open} close={handleClose} visibleSnackbar={visibleSnackbar}></DialogAddNote>
            
            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert severity="success">Added new Note!</Alert>
            </Snackbar>
        </>
    )

}