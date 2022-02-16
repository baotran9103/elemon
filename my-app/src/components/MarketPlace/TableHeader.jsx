import React, { useState, useEffect, useMemo, useContext } from "react";
import { MarketContext } from "./MyContext";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import TextField from '@mui/material/TextField';
import * as info from "../utils/Data";
import Slider from "@mui/material/Slider";

function TableHeader() {

  const myContext = useContext(MarketContext);
  const data = myContext.data;
  const [isLoaded, setisLoaded] = myContext.isLoaded;
  const [elemonFilter, setelemonFilter] = myContext.elemonFilter;
  const [classFilter, setclassFilter] = myContext.classFilter;
  const [rareFilter, setrareFilter] = myContext.rareFilter;
  const [auraFilter, setauraFilter] = myContext.auraFilter;
  const [pureFilter, setpureFilter] = myContext.pureFilter;
  const [body1, setbody1] = myContext.body1;
  const [body2, setbody2] = myContext.body2;
  const [body3, setbody3] = myContext.body3;
  const [body4, setbody4] = myContext.body4;
  const [body5, setbody5] = myContext.body5;
  const [body6, setbody6] = myContext.body6;
  
  const Selects = [
    {
      value: elemonFilter,
      setvalue: setelemonFilter,
      label: "Elemon",
      items: info.Elemons,
      itemID: "id",
      itemName: "name",
    },
    {
      value: classFilter,
      setvalue: setclassFilter,
      label: "Class",
      items: info.ElClass,
      itemID: "id",
      itemName: "name",
    },
    {
      value: rareFilter,
      setvalue: setrareFilter,
      label: "Rare",
      items: info.Rare,
      itemID: "id",
      itemName: "name",
    },
    {
      value: auraFilter,
      setvalue: setauraFilter,
      label: "Aura",
      items: info.Aura,
      itemID: "id",
      itemName: "name",
    },
    {
      value: pureFilter,
      setvalue: setpureFilter,
      label: "Pure",
      items: info.Pure,
      itemID: "id",
      itemName: "name",
    },
  ];
  
  const BodySelects = [
    {
      value: body1,
      setvalue: setbody1,
      label: "BodyPart1 HP",
      items: info.BodyQuality,
      itemID: "id",
      itemName: "name",
    },
    {
      value: body2,
      setvalue: setbody2,
      label: "BodyPart2 P.Atk",
      items: info.BodyQuality,
      itemID: "id",
      itemName: "name",
    },
    {
      value: body3,
      setvalue: setbody3,
      label: "BodyPart3 M.Atk",
      items: info.BodyQuality,
      itemID: "id",
      itemName: "name",
    },
    {
      value: body4,
      setvalue: setbody4,
      label: "BodyPart4 P.Def",
      items: info.BodyQuality,
      itemID: "id",
      itemName: "name",
    },
    {
      value: body5,
      setvalue: setbody5,
      label: "BodyPart5 M.Def",
      items: info.BodyQuality,
      itemID: "id",
      itemName: "name",
    },
    {
      value: body6,
      setvalue: setbody6,
      label: "BodyPart6 Speed",
      items: info.BodyQuality,
      itemID: "id",
      itemName: "name",
    },
  ]

  const [value1, setValue1] = myContext.powFilter;

  function valuetext(value) {
    return `${value}°C`;
  }
  const minDistance = 100;
  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };


  function changeMinInput(e){
    setValue1([Math.min(e.target.value, value1[1] - minDistance), value1[1]])
  }
  function changeMaxInput(e){
    setValue1([value1[0], Math.max(e.target.value, value1[0] + minDistance)])
  }

  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: "1rem",
        flexWrap:'wrap'
      }}
    >
      {Selects.map((item, idx) => (
        <div key={idx}>
          {" "}
          <CustomSelect
            value={item.value}
            setvalue={item.setvalue}
            label={item.label}
            items={item.items}
            itemID={item.itemID}
            itemName={item.itemName}
          />
        </div>
      ))}
      {BodySelects.map((item, idx) => (
        <div key={idx}>
          {" "}
          <CustomSelect
            value={item.value}
            setvalue={item.setvalue}
            label={item.label}
            items={item.items}
            itemID={item.itemID}
            itemName={item.itemName}
          />
        </div>
      ))}
      <div style={{display:'flex',width:'300px',flexDirection:'column',align:'center',justifyContent:'center'}}>
        <span style={{display:'flex',width:'300px',margin:'1rem 0',justifyContent:'center'}}>Power</span>
        <div style={{display:'flex',justifyContent:'space-between',gap:'1rem'}} >
        <TextField  sx={{width:120}}  variant="outlined"   type="number"  value={value1[0]} onChange={changeMinInput}/>
        <TextField  sx={{width:120}}  variant="outlined"   type="number"  value={value1[1]} onChange={changeMaxInput}/>
        </div>
       
        <Slider
          min={0}
          step={10}
          max={10000000}
          sx={{ width: 200 ,alignSelf:'center'}}
          getAriaLabel={() => "Minimum distance"}
          value={value1}
          onChange={handleChange1}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          disableSwap
        />
      </div>
    </div>
  );
}

export default TableHeader;

const CustomSelect = ({
  value,
  setvalue,
  label,
  type = "number",
  items = [],
  itemName = "",
  itemID = "",
}) => {
  const handleChange = (event) => {
    setvalue(event.target.value);
  };

  return (
    <div>
      <InputLabel id="demo-simple-select-helper-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={value}
        onChange={handleChange}
        label={label}
        type={type}
        style={{ minWidth: "120px" }}
      >
        <MenuItem value={-1}>
          <em>None</em>
        </MenuItem>
        {items.map((item, idx) => (
          <MenuItem value={item[itemID]} key={`${idx}_${item[itemName]}`}>
            {item[itemName]}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};
