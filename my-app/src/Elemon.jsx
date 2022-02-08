import React, { useState } from "react";
// import axios from "axios";
import { data, info } from "./Data";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
export default function Elemon() {
  // const [age, setAge] = useState("");

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

  return (
    <div>
      <div>Pet</div>
      <div
        className="form_inputs"
        style={{
          display: "flex",
          gap: "1rem",
          padding: "2rem",
          flexDirection: "column",
        }}
      >
        <CustomInput id="pet" />
        <CustomInput id="level" />
        <CustomInput id="rarity" />
        <CustomInput id="star" />
        <CustomInput id="quality" />
        <CustomInput id="class" />
        <CustomInput id="bodyPart1" />
        <CustomInput id="bodyPart2" />
        <CustomInput id="bodyPart3" />
        <CustomInput id="bodyPart4" />
        <CustomInput id="bodyPart5" />
        <CustomInput id="bodyPart6" />
      </div>
    </div>
  );
}

const CustomInput = ({ id, Label, LabelText, items }) => {
  const [age, setAge] = useState("second");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div id={id}>
      <FormControl sx={{ m: 1, minWidth: 120, maxWidth: 200 }}>
        <InputLabel id="demo-simple-select-helper-label">{Label}</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          {items?.map((item, idx) => (
            <MenuItem value={item.value}>{item.value}</MenuItem>
          ))}
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
        </Select>
        <FormHelperText>{LabelText}</FormHelperText>
      </FormControl>
    </div>
  );
};
