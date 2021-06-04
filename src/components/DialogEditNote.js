import {react,useEffect,useState} from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormGroup, Grid, Icon, Input, InputLabel, MenuItem, Select, TextField } from '@material-ui/core'
import categories from '../utils/Categories.json'
import {useStyles} from '../styles/DialogFormNotesStyle'
import axios from 'axios';


export default function DialogEditNote({noteID,open,close}){
    
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
        let value = e.target.value

        note[name] = value
        setNote(note)
    }

    let updateNote=(e)=>{
        e.preventDefault()

        console.log(note);
        note.date = new Date()
        axios.post('http://localhost:5000/notes/update/'+noteID,note)
            .then(res=>console.log(res.data))

        window.location = '/'
    }

    const getNote =()=>{

        axios.get('http://localhost:5000/notes/'+noteID)
            .then(res=>{
                setNote(res.data)
            })
            .catch(err=>console.log(err))

        
    console.log(note);

    }

    useEffect(()=>{
        getNote()
    },[])

    return(
        <Dialog open={open} onClose={close} style={{padding:'.5rem'}}>
        <form id="form" onSubmit={updateNote}>
        <DialogTitle>Edit Note</DialogTitle>
        <DialogContent dividers>
            <Grid container xs={12}>
                <FormGroup row style={{width:'100%'}}>
                <Grid item sm={8} xs={8}>
                <TextField 
                    autoFocus
                    name="title"
                    onChange={handleChange}
                    defaultValue={note.title}
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
                    <Select label="Category" name="category" onChange={handleChange} defaultValue={note.category}>
                    {
                            categories.filter(category =>category.id>=1).map((category,i)=>(
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
                        multiline
                        rows={12}
                        name="description"
                        onChange={handleChange}
                        defaultValue={note.description}
                        variant="outlined"
                        style={{width:'100%',marginTop:'1rem'}}
                        required

                    />
                </Grid>
            </Grid>
        </DialogContent>
        <DialogActions>
            <Button onClick={close} color="primary">Cancel</Button>
            <Button type="submit"  color="primary">Edit</Button>
        </DialogActions>
        </form>
    </Dialog>
    )



}