import { Dialog, DialogContent, DialogTitle, Grid, Snackbar, TextField } from '@material-ui/core'
import react, { useState,useEffect} from 'react'
import {useStyles} from '../styles/Appstyles'
import ButtonAddNote from './ButtonAddNote'
import ContainerButtonCategories from './ContainerButtonCategories'
import SearchBar from './SearchBar'
import notesMock from '../utils/MockUpNotes.json'
import CardNotes from './CardNotes'
import axios from 'axios'
import NotesCategories from './NotesCategories'
import { BrowserRouter as Router } from 'react-router-dom'
import {Route, Switch} from 'react-router'
import searchImage from '../images/search-image.svg'
import NotesIllustration from './NotesIllustration'
import Alert from '@material-ui/lab/Alert'

export default function Main(){
    
    const classes = useStyles()
    const [notes,setNotes] = useState([])
    const [selected,setSelected] = useState(0)
    const [filterNotes, setFilterNotes] = useState([])
    const [selectIllustration, setIllustration] = useState(0)
    const[input,setInput]= useState('')


    const getNotes = async()=>{
        await axios.get('http://localhost:5000/notes/')
            .then(res=>{
                setNotes(res.data)
                setFilterNotes(res.data)
                console.log(notes)
            })
            .catch(err=>console.log(err))
            console.log(notes)
        
        if(notes.length){
            setIllustration(1)
        }else{

        }
        
    }

    //Function Searchbar
    const handleNotes = async(input)=>{

        const filtered = filterNotes.filter(note=>{
            return note.title.toString().toLowerCase().includes(input.toString().toLowerCase())
        })
        input.toString().toLowerCase() === '' ? setFilterNotes(notes) :   setFilterNotes(filtered)
        setInput(input)
    }
    
    useEffect(() => {
        getNotes()
    }, [])


    //Function filter notes
    const visibleNotes = (selected)=>{
      
        switch (selected) {
            case 1:
                console.log(filterNotes);
                return setFilterNotes(notes.filter(note => note.category===1))
            case 2:
                console.log(filterNotes);
                return setFilterNotes(notes.filter(note => note.category===2))
            case 3:
                console.log(filterNotes);
                return setFilterNotes(notes.filter(note => note.category===3))
        
            default:
                return setFilterNotes(notes)
            
        }
    }

    const handleCategory = (id)=>{
        setSelected(id)
        visibleNotes(id)
        console.log(visibleNotes(id));

    }

    return(
        <div className={classes.root}>
            <Grid container spacing={3} direction="column">
                <Grid item xs={12}>
                    <SearchBar handleNotes={handleNotes} input={input}/>
                </Grid>
                <Grid item container>
                    <Grid sm={9} xs={12} container>
                      
                    <ContainerButtonCategories handleCategory={handleCategory}></ContainerButtonCategories>
                    
                    </Grid>
                    <Grid item sm={3} xs={12}>
                        <ButtonAddNote></ButtonAddNote>
                    </Grid>
                </Grid>
                    <Grid item container xs={12}>

                        {
                        
                        !filterNotes.length ? <NotesIllustration notes={notes} filteredNotes={filterNotes}/>:filterNotes.map((note,i)=>(
                            <CardNotes notes={note}></CardNotes>
                        ))
                        }
                        
                    </Grid>
            </Grid>
        </div>
    )

}