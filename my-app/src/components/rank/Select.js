import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function CustomSelect({value,setvalue,values,label,field}) {
    const handleChange = (event) => {
        setvalue(event.target.value);
      };
    const getValue = (field,item) =>{
        if( field===undefined || field===null || !(field in item)) return item
        return item[field]
    }
  return (
    <FormControl fullWidth>
    <InputLabel id="demo-simple-select-label">{label}</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={value}
      label={label}
      onChange={handleChange}
    >
        {
            values?.length>0 && values.map((item,id)=>{
                let data = getValue(field,item)
                return  <MenuItem value={data}>{data}</MenuItem>
            })
        }
     
    </Select>
  </FormControl>
  )
}

export default CustomSelect