import { Button} from '@material-ui/core'
import axios from 'axios'
import react, { useState } from 'react'
import {Link} from 'react-router-dom'
import NotesCategories from './NotesCategories'

export default function ButtonCategories({name,type,id}){

    let [note,setNote] = useState()

    let searchCategory = (id)=>{

        // axios.get('http://localhost:5000/notes/category/'+id)
        //     .then(res=>{
        //         setNote(res.data)
        //         console.log(res.data)})
        // console.log(note);
    }

    return(
        <Button variant="contained" size="large" style={{backgroundColor:type}}>
            <span>{name}</span>
        </Button>
    )

}

