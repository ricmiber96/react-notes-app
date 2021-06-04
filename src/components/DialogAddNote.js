import {react,Component,useState} from 'react'
import axios from 'axios'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormGroup, Grid, Icon, Input, InputLabel, MenuItem, Select, Snackbar, TextField } from '@material-ui/core'
import categories from '../utils/Categories.json'
import {useStyles} from '../styles/DialogFormNotesStyle'
import MuiAlert from '@material-ui/lab/Alert';


export default function DialogAddNote({open,close,visibleSnackbar}){
    
    const classes = useStyles()
   
    let [note,setNote] = useState({
        id:1,
        title:'',
        category:0,
        description:'',
        completed:false,
        date:new Date()
    })

    let handleChange = (e)=>{
        let name = e.target.name
        let value= e.target.value

        note[name] = value
        setNote(note)
        console.log(note);
    }

    let sendNote =(e)=>{
        e.preventDefault()
        let currentDate = new Date()
        note.date = new Date ()

        axios.post('http://localhost:5000/notes/add',note)
            .then(res=>console.log(res.data))
        console.log(note);

        window.location = '/'
        
    }

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
      }

    // onSubmit(e){
    //     e.preventDefault()
    //     var currentDate = new Date()

    //     const note = {
    //         title:this.state.title,
    //         category:this.state.category,
    //         description:this.state.description,
    //         date:currentDate.toLocaleDateString()
    //     }
    //     console.log(note);

    //     axios.post('http://localhost:5000/notes/add',note)
    //         .then(res=>console.log(res.data))
        
    //     window.location= '/'
    // }

    // addNote =(e)=>{
    //     e.preventDefault()
    //     var notes = JSON.parse(localStorage.getItem('notes'))
    //     var currentDate = new Date()

    //     console.log(notes[notes.length-1].id+1);


    //     var note = {

    //         id:notes[notes.length - 1].id + 1,
    //         title:title,
    //         description:description,
    //         category:category,
    //         completed:false,
    //         date:currentDate.toLocaleDateString()
    //     }


    //     localStorage.setItem('notes',JSON.stringify(note))

    // }

    return(
        <Dialog open={open} onClose={close} style={{padding:'.5rem'}}>
        <form id="form" onSubmit={sendNote}>
        <DialogTitle>Add Note</DialogTitle>
        <DialogContent dividers>
            <Grid container xs={12}>
                <FormGroup row style={{width:'100%'}}>
                <Grid item sm={8} xs={8}>
                <TextField 
                    autoFocus
                    name="title"
                    onChange={handleChange}
                    margin="dense"
                    id="name"
                    variant="outlined"
                    label="Title"
                    type="text"
                    fullWidth
                    required
                    />
                </Grid>
                <Grid item sm={4} xs={12}>
                    <FormControl className={classes.formcontrol} variant="outlined" style={{marginLeft:'1rem'}} required>
                    <InputLabel  htmlFor="outlined-age-native-simple">Category</InputLabel>
                    <Select label="Category" name="category" onChange={handleChange}>
                    {
                            categories.filter(category=>category.id>=1).map((category,i)=>(
                                <option value={category.id}>{category.name}</option>
                            ))
                        }
                        </Select>
                    </FormControl>
                </Grid>
                </FormGroup>
                <Grid container>
                    <TextField
                        label="Description"
                        name="description"
                        multiline
                        rows={12}
                        onChange={handleChange}
                        variant="outlined"
                        style={{width:'100%',marginTop:'1rem'}}
                        required

                    />
                </Grid>
            </Grid>
        </DialogContent>
        <DialogActions>
            <Button onClick={close} color="primary">Cancel</Button>
            <Button onClick={()=>visibleSnackbar(true)} type="submit" color="primary">Add</Button>
        </DialogActions>
        </form>
    </Dialog>
    )

}