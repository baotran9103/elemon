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

import {Aura,Rare,ElClass} from '../utils/Data'

function MyDialog({ open, setopen, editingId, seteditingId ,pets,setpets}) {
  const [thisPet, setthisPet] = useState()
const editContext = useContext(ElemonContext)
const [dialogopen, setdialogopen] = useState(false);
const handleClickOpenDialog = () => {
  setdialogopen(true);
};
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
    // console.log(editingId)
    // console.log(t)
    // console.log(temp)
    setpets([...temp])
    window.dataLayer = window.dataLayer || []
    // for(let i =0;i< window.dataLayer;i++){
    //   if(window.dataLayer[i].hasOwnProperty("Petcalculate")){
    //     window.dataLayer.splice(i,1)
    //   }
    // }
    window.dataLayer.push({Petcalculate:{
      name:t.elemonInfo.name,      
      star:t.star,
      level:t.level,
      aura:Aura.filter(item=>item.id === t.aura)[0].name,
      class:ElClass.filter(item=>item.id === t.elclass)[0].name,
      rare:Rare.filter(item=>item.id === t.rare)[0].name,
      pure:t.elclass===t.elemonInfo.class[0]?'Pure':'Hybrid'
    },'event':'getPower'});
    closeHandler()
    // console.log( window.dataLayer)
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

        <DialogTitle id="alert-dialog-title" sx={{ textAlign:'center'}} variant='primary'>
          {"Edit Pet Information"}
        </DialogTitle>
        <DialogContent>
        
            <Elemon pet={thisPet} setpet ={setthisPet} myValues={[dialogopen, setdialogopen]}/>
          
        </DialogContent>
        <DialogActions>
          
          <Button variant="contained" onClick={handleClickOpenDialog }>
            Enter Pet ID
          </Button>
          <Button id='getPower' variant="contained" onClick={CalculatePower }>
            Get Power
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default MyDialog;
