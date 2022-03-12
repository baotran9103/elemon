import React, { useState, forwardRef, useContext,useEffect } from "react";
import { getPower } from "./utils/Functions";
import { ElemonContext } from "./ElemonContext";
import "./Elemon.css";
// import axios from "axios";
import CustomInput from "./utils/CustomInput";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import {
  RarityCard,
  AuraCard,
  SkillCards,
  NameCard,
  ClassCard,
  BodyParts,StatsCard
} from "./Cards/Cards";
import AskElemonId from "./AskElemonId";
const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export default function Elemon({pet,setpet,myValues}) {
  const myContext = useContext(ElemonContext);
  const updateNewData = myContext.updateNewData;
  useEffect(() => {
    updateNewData([pet])
  }, [])
  const [dialogopen, setdialogopen] = myValues
  const [level, setlevel] = myContext.level;
  const [mypet, setmypet] = myContext.mypet;
  const [star, setstar] = myContext.star;
  const [open, setOpen] = useState(false);
  const [aura, setaura] = myContext.aura;
  const [myPower, setmyPower] = useState(0);
  const [myBody, setmyBody] = useState([])
  const submitHandler = () => {
    let data = myContext.data;
    setOpen(true);
    let res = getPower(data);
    console.log(res)
    setmyPower(res.power)
    setmypet(res)
    let temp = res.body;
    let stats 
    if(temp.length>=6){
      stats= [
        {name:'HP',stat:temp[0]},
        {name:'P.Atk',stat:temp[1]},
        {name:'M.Atk',stat:temp[2]},
        {name:'P.Def',stat:temp[3]},
        {name:'M.Def',stat:temp[4]},
        {name:'Speed',stat:temp[5]},
      ]
      console.log(stats)

      setmyBody(stats)
    }
  
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleClickOpenDialog = () => {
    setdialogopen(true);
  };

  const handleCloseDialog = () => {
    setdialogopen(false);
  };
  return (
    <div>
      <div className="form_inputs">
        <div className="items">
          <div className="item__item">
            <NameCard />
            <ClassCard />

            <CustomInput
              type="number"
              label="Level"
              helperText="Please Enter Elemon Level"
              useValues={[level, setlevel]}
            />
            <CustomInput
              type="number"
              label="Star"
              helperText="Please Enter Stars"
              useValues={[star, setstar]}
            />
          </div>

          <div className="item__item">
            <div>
              <RarityCard />
              <AuraCard />
            </div>
            <SkillCards star={star} aura={aura}/>
          </div>
        </div>
        <div className="item__item">
          <BodyParts />
        </div>
        <StatsCard myPet = {mypet} myBody={myBody}/>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "3rem",
            gap: "0 2rem",
          }}
        >
          {/* <Button
            variant="contained"
            size="medium"
            onClick={handleClickOpenDialog}
          >
            Elemon ID
          </Button> */}
          {/* <Button variant="contained" size="medium" onClick={submitHandler}>
            Get Power
          </Button> */}
        </div>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Success!
          </Alert>
        </Snackbar>
        <AskElemonId open={dialogopen} handleClose={handleCloseDialog} />
      </div>
    </div>
  );
}
