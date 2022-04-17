import React, { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import axios from "axios";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

import { ElemonContext } from "./ElemonContext";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function AskElemonId({ open, handleClose }) {
  const [myID, setmyID] = useState();
  const myContext = useContext(ElemonContext);
  const updateData = myContext.updateData;
  const updateMore = myContext.updateMore;
  const [openload, setopenload] = useState(false);
  const [openalert, setOpenalert] = useState(false);
  const [message, setmessage] = useState("Error!")
  const handleCloseLoad = () => {
    setopenload(false);
  };
  const handleToggleLoad = () => {
    setopenload(!openload);
  };
  const handleClickAlert = () => {
    setOpenalert(true);
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenalert(false);
  };
  async function getInfo(myID) {
    // let infourl = `https://elemons.baotran17.repl.co/api/elemons/${myID}`;
    let infourl = `https://elemonProxy.baotran17.repl.co/api/elemons/${myID}`;
    axios
      .get(infourl)
      .then((result) => {
        if (result.data) {
          let t = result.data;
          if (!t) {
            handleCloseLoad();

          } else {
            updateMore(t);
          }
        }
        handleCloseLoad();

      })
      .catch((err) => {
        setmessage("Could not get more Elemon Info, please enter manually !")
        console.log(err.message);
        handleClickAlert()
        handleCloseLoad();



      });
  }

  async function getElemonInfo(e) {
    const url = `https://app.elemon.io/elemon/getElemonInfo?tokenId=${myID}`;
    // const url = `https://elemons.baotran17.repl.co/api/elemons/${myID}`
    e.preventDefault();
    handleToggleLoad()
    axios
      .get(url)
      .then((res) => {
        updateData(res.data.data);
        getInfo(myID);
      })
      .catch((e) => {
        setmessage("Could not get more skills Info, please enter skills, levels and stars manually !");
        handleClickAlert()

        console.log(e.message);
        getInfo(myID);
        handleCloseLoad();
      });
    
    handleClose();
  }
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <form action="c" onSubmit={getElemonInfo}>
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
          <Button size="medium" variant="contained" type='submit' >
            Get Elemon
          </Button>
        </DialogActions>
        </form>
        
      </Dialog>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openload}
        onClick={handleCloseLoad}
      >
        <CircularProgress color="inherit" />
      </Backdrop> 
      <Snackbar open={openalert} autoHideDuration={5000} onClose={handleCloseAlert}>
        <Alert onClose={handleCloseAlert} severity="error" sx={{ width: '100%' }}>
            {message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default AskElemonId;
