import { Grid, Typography } from '@material-ui/core'
import addNotesImages from '../images/add-note-illustration.svg'
import searchNotesImages from '../images/search-image.svg'
import {useStyles} from '../styles/NoteIllustrationStyles'

export default function NotesIllustration({notes,filteredNotes}){
    const classes = useStyles()
    let heading = ""
    let images
    if(!notes.length && !filteredNotes.length){
        heading='You don’t have any note'
        
    }else{
        heading='Couldn’t find any notes'
    }
   
    if(!notes.length && !filteredNotes.length){
        images = addNotesImages
    }else{
      images = searchNotesImages 
    } 

    return(
        <Grid item xs={12} className={classes.root}>
            <Typography variant="h4" className={classes.heading}>
                {heading}
            </Typography>
            <img className={classes.images} src={images} alt={heading}/>
        </Grid>
    )


}