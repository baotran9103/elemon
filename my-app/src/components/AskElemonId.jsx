import React, { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import axios from "axios";
import { ElemonContext } from "./ElemonContext";
function AskElemonId({ open, handleClose }) {
  const [myID, setmyID] = useState();
  const myContext = useContext(ElemonContext);
  const updateData = myContext.updateData;
  const updateMore = myContext.updateMore;
  async function getElemonInfo() {
    
    const url = `https://app.elemon.io/elemon/getElemonInfo?tokenId=${myID}`;
    // const url = `https://elemons.baotran17.repl.co/api/elemons/${myID}`
    axios
      .get(url)
      .then((res) => {
        updateData(res.data.data);
        let infourl =`https://elemons.baotran17.repl.co/api/elemons/${myID}`
        axios.get(infourl).then(result=>{
        
          if(result.data){
            let t = result.data
            // if(!t.data){
            //   alert("Could not get more Elemon Info, please enter manually !")
            // }
            // console.log(t)
            if(!t){
              alert("Could not get more Elemon Info, please enter manually !")
            }
            else{
              // console.log(t)
              // updateMore(t.data)
              updateMore(t)
            }
          }
        }).catch(err=>alert(err.message))
      })
      .catch((e) => console.log(e.message));
    handleClose();
  }
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Get Elemon ID</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
           Enter Elemon ID ...
          </DialogContentText> */}
          <TextField
            autoFocus
            margin="dense"
            id="ElemonID"
            label="Elemon ID"
            type="number"
            fullWidth
            size="normal"
            value={myID}
            onChange={(e) => setmyID(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button size="medium" variant="contained" onClick={handleClose}>
            Cancel
          </Button>
          <Button size="medium" variant="contained" onClick={getElemonInfo}>
            Get Elemon
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AskElemonId;
