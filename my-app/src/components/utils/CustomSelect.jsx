import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const CustomSelect = ({
    id,
    Label,
    HelperText,
    items,
    itemID = "",
    itemName = "",
    useValues,
  }) => {
    const [value, setvalue] = useValues;
    const handleChange = (event) => {
      setvalue(event.target.value);
    };
    return (
      <div id={id}>
        <FormControl sx={{ m: 1, minWidth: 120, maxWidth: 200 }}>
          <InputLabel id="demo-simple-select-helper-label">{Label}</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={value}
            label={Label}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {items?.map((item, idx) => (
              <MenuItem value={item[itemID]} key={`${idx}_${item[itemName]}`}>
                {item[itemName]}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{HelperText}</FormHelperText>
        </FormControl>
      </div>
    );
  };

export default CustomSelect;