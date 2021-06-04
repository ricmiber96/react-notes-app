import { InputBase } from '@material-ui/core'
import react from 'react'
import {useStyles} from '../styles/Appstyles'
import SearchIcon from '@material-ui/icons/Search';

export default function SearchBar({handleNotes, input}){
    const classes = useStyles()

    let handleSearch =(e)=>{
        let value = e.target.value
        handleNotes(value)
    }

    return (
        <div className={classes.search}>
        <div className={classes.searchIcon}>
            <SearchIcon/>
        </div>
            <InputBase input={input} onChange={handleSearch} className={classes.searchInput} placeholder="Search Notes..." type="text" />
        </div>
    )

}