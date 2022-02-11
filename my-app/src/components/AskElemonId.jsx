import React from 'react'
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
function AskElemonId({open,handleClose}) {
  return (
   <div >
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
          />
        </DialogContent>
        <DialogActions>
          <Button size='medium' variant="contained" onClick={handleClose}>Cancel</Button>
          <Button size='medium' variant="contained" onClick={handleClose}>Get Elemon</Button>
        </DialogActions>
        </Dialog>
   </div>
  )
}

export default AskElemonId