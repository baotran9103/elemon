import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
function CustomRadios({id,label,defaultValue,items,itemID,itemName,useValues,row=true}) {
    const [value, setvalue] = useValues
  return (
    <div id={id}>
      <FormControl style={{display:'flex',gap:'0.5rem',flexWrap:'wrap',width:'100%',marginBottom:'1rem'}}>
        <FormLabel id="demo-radio-buttons-group-label">{label}</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue={defaultValue}
          name="radio-buttons-group"
          value={value}
          row={row}
            onChange={(e)=>setvalue(e.target.value)}
        >
            {
                items.map((item,idx) => <FormControlLabel style={{minWidth:'95px'}} key={idx} value={item[itemID]} control={<Radio />} label={item[itemName]} />)
            }
 
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default CustomRadios;
