import {Grid, Card,CardContent, Typography, Checkbox, IconButton, Box, Button, Dialog, DialogTitle, DialogContent, DialogContentText, Link, Snackbar } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {react,useState,useEffect} from 'react'
import categories from '../utils/Categories.json'
import notesArray from '../utils/MockUpNotes.json'
import {useStyles} from '../styles/CardStyles'
import DialogEditNote from './DialogEditNote';
import theme from '../theme'
import DialogDeleteNote from './DialogDeleteNote';
import axios from 'axios';
import Alert from '@material-ui/lab/Alert';


export default function CardNotes({notes}){

    const classes = useStyles()
    
    const [checked,setChecked] = useState(notes.completed)
    const [open, setOpen] = useState(false)
    const [openEdit, setOpenEdit] = useState(false)
    const[openDelete, setOpenDelete] = useState(false)

    const [openSnackbar, setOpenSnackbar] = useState(false);
    
    const [idNotas,setIdNotas] = useState([])
    const [arrCategories, setCategories] = useState([]) 
    const arrayCategories = categories
    const noteBackground = notes.completed ?  theme.palette.grey.main : categories[notes.category].color

    const handleCheckBox = (event)=>{
        event.preventDefault()
        let name = event.target.name
        notes[name] = event.target.checked
        setChecked(event.target.checked)
        notes.completed = event.target.checked
        
        let noteID = notes._id
        console.log('http://localhost:5000/notes/update/'+noteID,notes);
        axios.post('http://localhost:5000/notes/update/'+noteID,notes)
            .then(res=>console.log(res.data))
            .catch(err=>console.log('Error'+ErrorEvent))
        window.location = "/"
    }

    const handleClickOpen = () =>{
        setOpen(true)
    }

    const handleClose = () =>{
        setOpen(false)
        setOpenSnackbar(false)
    }

    const handleCloseSnackbar = () =>{
        setOpenSnackbar(false)
    }
    
    const handleClickOpenEdit = () =>{
        setOpenEdit(true)
    }

    const handleCloseEdit = () =>{
        setOpenEdit(false)
        setOpenSnackbar(true)
    }

    const handleDelete = ()=>{
        setOpenDelete(true)
    }

    const closeDelete=()=>{
        setOpenDelete(false)
    }

    useEffect(() => {
        setCategories(categories)
        setIdNotas(notes.id)
        console.log(arrCategories);
        
    }, [])


    return(
    <Grid item sm={6}>
        <Box mr={2} mb={3}>
        <Card id={notes.id} className={classes.root} style={{backgroundColor:noteBackground}}>
            <CardContent>
                    <Grid container>
                        <Grid item className={notes.completed === true ? classes.completed : '' }>

                        <Box mb={2}>
                            <Checkbox className={classes.checkBtn} name="completed" style={{top: '0.6em', left:'.2em'}} onChange={handleCheckBox} checked={checked} inputProps={{ 'aria-label': 'primary checkbox' }}></Checkbox>
                            <IconButton onClick={handleClickOpenEdit} className={classes.checkBtn} style={{top: '0.6em',right:'1.8em'}}><Link to={"/edit/"+notes._id}></Link><EditIcon/></IconButton>
                            <IconButton onClick={handleDelete} className={classes.checkBtn} style={{top: '0.6em',right:'.2em'}}><DeleteIcon/></IconButton>
                            <p onClick={handleClickOpen} className={classes.title}> {notes.title}</p>
                        </Box>
                    
                        <Box mt={5}>
                            <Typography className={classes.description}  variant="body2" component="p" >
                            {
                                notes.description.length > 300  ? notes.description.substring(0,200) + '...' : notes.description
                                }
                            </Typography>
                        </Box>
                        </Grid>

                        <Grid item sm={12} xs={12}>
                            <Button disabled={notes.completed} className={classes.btnShowMore} onClick={handleClickOpen} variant="outlined">Show More</Button>
                        </Grid>

                    </Grid>
            </CardContent>
        </Card>
        </Box>
        <DialogEditNote noteID={notes._id} open={openEdit} close={handleCloseEdit}></DialogEditNote>
        <DialogDeleteNote noteID={notes._id} noteTitle={notes.title} open={openDelete} close={closeDelete}></DialogDeleteNote>
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} >
        <div style={{backgroundColor:noteBackground,color:'white'}}>
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            {notes.title}
            </DialogTitle>
            <DialogContent dividers>
            <Typography gutterBottom>
                {notes.description}
            </Typography>
            </DialogContent>
            </div>
        </Dialog>
        
        <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert severity="success">Added new Note!</Alert>
            </Snackbar>
       </Grid>
    )

}

