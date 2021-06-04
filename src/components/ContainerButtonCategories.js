import react from 'react'
import notesCategories from '../utils/NotesCategories'
import ButtonCategories from './ButtonCategories'
import {useStyles} from '../styles/ContainerButtonsStyle'
import categories from '../utils/Categories.json'
import { Route, Router, Switch } from 'react-router'
import NotesCategories from './NotesCategories'
import Main from './Main'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'

export default function ContainerButtonCategories({handleCategory}){
    // const categories = Object.keys(notesCategories)
    const classes = useStyles()

    return(
    <div className={classes.root}>
        {/* {
            categories.map((category,i)=>(
                <ButtonCategories 
                    name={category.name}
                    type={category.color}
                    id={category.id}
                    key={i}
                >

                </ButtonCategories>
            ))
        } */}
        <Button onClick={()=>handleCategory(0)} variant="contained" size="large" style={{backgroundColor:"#69BCFF"}}>
            <span>{"All"}</span>
        </Button>
        <Button onClick={()=>handleCategory(1)} variant="contained" size="large" style={{backgroundColor:"#FF9100"}}>
            <span>{"Home"}</span>
        </Button>
        <Button onClick={()=>handleCategory(2)} variant="contained" size="large" style={{backgroundColor:"#5C6BC0"}}>
            <span>{"Work"}</span>
        </Button>
        <Button onClick={()=>handleCategory(3)} variant="contained" size="large" style={{backgroundColor:"#66BB6A"}}>
            <span>{"Personal"}</span>
        </Button>
  

     </div>
    )
}
