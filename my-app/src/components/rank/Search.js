import React,{useState} from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/Icon';
import SearchIcon from '@mui/icons-material/Search';
function Search({placeholder="Search ",value, setvalue}) {
  return (
    <Paper
    component="form"
    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
  >
        <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={placeholder}
        inputProps={{ 'aria-label': placeholder }}
        onChange={e=>setvalue(e.target.value)}
        value={value}
        fullWidth
      />
      <IconButton type="" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      </Paper>
  )
}

export default Search