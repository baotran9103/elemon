import React,{useContext} from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CardMedia from '@mui/material/CardMedia';
import {PetsContext} from './PetsContext'

import * as data from '../utils/Data'
function Pet({pet,open,setopen,idx,pets,setpets}) {
    const myContext = useContext(PetsContext)
    const[editingId, seteditingId]   = myContext.editingId
    const editHandler = ()=>{
        setopen(true)
        seteditingId(idx)
    }
    const deleteHandler =()=>{
      let temp = pets
      pets.splice(idx, 1)
      setpets([...temp])
    }
  return (
    <div>
      <Card  sx={{ maxWidth: 400 ,width:'100%'}}>
      <CardMedia
        component="img"
        height="194"
        image={`https://statics.elemon.io/avatar/${pet.petId}/${pet.petId}_${pet.body1}_${pet.body2}_${pet.body3}_${pet.body4}_${pet.body5}_${pet.body6}.png`}
        alt="My Pet"
        sx={{objectFit:'contain'}}
      />
        <CardContent>
          <img src="" alt="" className="petlogo" />
          <Typography variant="h5" component="div">
            {pet?.elemonInfo.name}
          </Typography>
          <Typography  variant="h5" color="text.primary" gutterBottom>
            {pet.power}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {data.ElClass[pet.elclass-1].name}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {pet.elclass === pet.elemonInfo.class[0]? "Pure":"Hybrid"}
          </Typography>
 

          <Card
            className=""
           
          >
            <CardContent  sx={[{m:0,p:1,Width:200 ,display: "grid",gridTemplateColumns:'repeat(3,1fr)', flexWrap: "wrap", textAlign: "center" },{".stat":{display:'grid',gap:'0.25rem',mb:2,minWidth:70,width:'100%',textAlign:'left'}}]}>
              <div className="stat">HP <strong>{pet.body[0]}</strong></div>
              <div className="stat">P.attack <strong>{pet.body[1]}</strong></div>
              <div className="stat">M.attack <strong>{pet.body[2]}</strong></div>
              <div className="stat">P.Def <strong>{pet.body[3]}</strong></div>
              <div className="stat">M.Def <strong>{pet.body[4]}</strong></div>
              <div className="stat">Speed <strong>{pet.body[5]}</strong></div>
            
            </CardContent>
          </Card>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={editHandler}>Edit Information</Button>
          <Button size="small" onClick={deleteHandler}>Delete Pet</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Pet;
