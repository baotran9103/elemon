import React, { useState, forwardRef, useContext } from "react";
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
  BodyParts,
} from "./Cards/Cards";
import AskElemonId from "./AskElemonId";
const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function Elemon() {
  const myContext = useContext(ElemonContext);

  const [level, setlevel] = myContext.level;
  const [star, setstar] = myContext.star;
  const [open, setOpen] = useState(false);
  const [dialogopen, setdialogopen] = useState(false);
  const submitHandler = () => {
    let data = myContext.data;
    setOpen(true);
    let res = getPower(data);
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
            <SkillCards star={star} />
          </div>
        </div>
        <div className="item__item">
          <BodyParts />
        </div>

        <div
          style={{ display: "flex", justifyContent: "center", padding: "3rem",gap:'0 2rem' }}
        >
          <Button variant="contained" size="medium"  onClick={handleClickOpenDialog}>
            Elemon ID
          </Button>
          <Button variant="contained" size="medium" onClick={submitHandler}>
            Get Power
          </Button>
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
