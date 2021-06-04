import { Grid } from '@material-ui/core'
import axios from 'axios'
import {react,useEffect, useState} from 'react'
import CardNotes from './CardNotes'

export default function NotesCategories({categoryID}){

    const [notes,setNotes] = useState([])

    
    
    const getNotes = async() =>{

        await axios.get('http://localhost:5000/notes/category/1')
        .then(res=>{
            setNotes(res.data)
            console.log(res)
        })
        .catch(err=>console.log(err))
        console.log(notes);


    }


    useEffect(() => {
        getNotes()

    }, [])


    return(

        <Grid item container xs={12}>

        {notes.map((note,i)=>(
            <CardNotes notes={note}></CardNotes>
        ))
        }
    </Grid>


    )
}