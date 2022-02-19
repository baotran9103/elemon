import React, { useState, useEffect, useMemo, useContext } from "react";
import Checkbox from '@mui/material/Checkbox';
import Chip from '@mui/material/Chip';
import OutlinedInput from '@mui/material/OutlinedInput'
import Box from '@mui/material/Box';
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import ListItemText from '@mui/material/ListItemText';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 100,
    },
  },
};
const CustomSelect = ({
    value,
    setvalue,
    label,
    type = "number",
    items = [],
    itemName = "",
    itemID = "",
  }) => {
    // const handleChange = (event) => {
    //   setvalue(event.target.value);
    // };
    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      console.log(event.target.value)
      if(value[value.length-1]===-1){
          setvalue([])
          return
      }
      setvalue(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };
    return (
      <div>
        <InputLabel id="demo-simple-select-helper-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          multiple
          value={value}
          onChange={handleChange}
          label={label}
          type={type}
          sx={{ m: 1, width: 300 }}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5,overflow:'auto' ,maxHeight:80}}>
              {selected.map((value) => (
                <Chip variant="outlined" key={value} label={items.filter((i)=>i[itemID]===value)[0][itemName]} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          <MenuItem value={-1}>
            <em>Clear</em>
          </MenuItem>
          {items.map((item, idx) => (
            <MenuItem value={item[itemID]} key={`${idx}_${item[itemName]}`}>
              
              <Checkbox checked={value.indexOf(item[itemID]) > -1} />
              <ListItemText primary={item[itemName]} />
            </MenuItem>
          ))}
        </Select>
      </div>
    );
  };
  

export default CustomSelect