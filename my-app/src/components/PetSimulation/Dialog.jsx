import React,{useState,useEffect,useContext} from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Toolbar from "@mui/material/Toolbar";
import Elemon from "../Elemon";
import {ElemonContext} from "../ElemonContext";
import { getPower } from "../utils/Functions";


function MyDialog({ open, setopen, editingId, seteditingId ,pets,setpets}) {
  const [thisPet, setthisPet] = useState()
const editContext = useContext(ElemonContext)

    useEffect(() => {
      let cancel = false


      if(!cancel){
          setthisPet(pets[editingId])
      }
    
      return () => {
        cancel=true
      }
    }, [])
    function getPet(info){
        let data = editContext.data;
        const setmyPower = editContext.setmyPower
        const setmypet = editContext.setmypet
        const setmyBody = editContext.setmyBody
    // setOpen(true);
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
    }
  function closeHandler() {
    setopen(false);
    seteditingId(-1);
  }
  function CalculatePower(){
    //   console.log(pets[editingId])
    let t = getPower(editContext.data)
    let temp = pets
    // let temp = pets.splice(editingId,1,t)
    temp.splice(editingId,1,t)
    console.log(editingId)
    console.log(t)
    console.log(temp)
    setpets([...temp])
    closeHandler()
  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={closeHandler}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
      >
        <Toolbar sx={{ justifyContent: "flex-end" }}>
          <Button
            sx={{ alignSelf: "flex-end" }}
            size="small"
            variant="text"
            color="inherit"
            onClick={closeHandler}
            autoFocus
          >
            Close
          </Button>
        </Toolbar>

        <DialogTitle id="alert-dialog-title">
          {"Edit Pet Information"}
        </DialogTitle>
        <DialogContent>
        
            <Elemon pet={thisPet} setpet ={setthisPet} />
          
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={CalculatePower }>
            Get Power
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default MyDialog;
