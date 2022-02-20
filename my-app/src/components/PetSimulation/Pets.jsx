import React,{useContext,useState} from 'react'
import Pet from './Pet'
import {PetsContext} from './PetsContext'
import Button from '@mui/material/Button'
import Typography from "@mui/material/Typography";
import Dialog from './Dialog';

function Pets() {
  const myContext = useContext(PetsContext)
  const [pets, setpets] = myContext.pets
  const [totalPower, settotalPower]  = myContext.totalPower
  const[editingId, seteditingId]   = myContext.editingId
  const [open, setopen] = useState(false)
  const addPet = myContext.addPet
  return (
    <div style={{display:'grid',padding:'2rem',width:'100%'}}>
      <div>
      <Typography variant={'h5'} sx={[{'strong':{fontSize:'2rem'}}]} component="div">
           Total Power <strong>{totalPower}</strong> 
          </Typography>
      <Button variant='outlined' size="small" onClick={addPet}>Add pet</Button>

      </div>
      <div  style={{display:'flex',padding:'1rem',flexWrap:'wrap',gap:'1rem'}}>
      {
        pets?.map((pet,id)=>  <Pet key = {`pet_${id}`} pet={pet} open={open} setopen={setopen} idx={id} />)
      }
      </div>
      {
        open && <Dialog open={open} setopen={setopen} pets={pets} setpets={setpets} editingId={editingId}  seteditingId={seteditingId} />
      }
     
    </div>
  )
}

export default Pets