import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import { PetsContext } from "./PetsContext";
import Stack from "@mui/material/Stack";
import * as data from "../utils/Data";
function Pet({ pet, open, setopen, idx, pets, setpets }) {
  const myContext = useContext(PetsContext);
  const [editingId, seteditingId] = myContext.editingId;
  const editHandler = () => {
    setopen(true);
    seteditingId(idx);
  };
  const deleteHandler = () => {
    let temp = pets;
    pets.splice(idx, 1);
    setpets([...temp]);
  };
  return (
    <div>
      <Card sx={{ maxWidth: 400, width: "100%",position:'relative' }}>
        <div style={{position:'absolute',}}>
        <CardMedia
          component="img"
          height="50"
          image={`https://app.elemon.io/assets/images/rarity_${data.Rare[pet.rare - 1].name}.png`}
          alt="My Pet"
          sx={{ objectFit: "contain" }}
        />
        </div>
       
   
        <CardMedia
          component="img"
          height="194"
          image={`https://statics.elemon.io/avatar/${pet.petId}/${pet.petId}_${pet.body1}_${pet.body2}_${pet.body3}_${pet.body4}_${pet.body5}_${pet.body6}.png`}
          alt="My Pet"
          sx={{ objectFit: "contain" }}
        />
          <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <CardMedia
          component="img"
          height="30"
          image={`https://app.elemon.io/assets/images/star/star_level_${pet.star}.png`}
          alt="My Pet"
          sx={{ objectFit: "contain" }}
        />
        </div>
         {/* <div style={{width:'100%',height:'116%',top:'0',backgroundSize:,backgroundImage:`url(https://app.elemon.io/assets/images/aura/quality_${pet.aura}.png)`}}>
        </div> */}

        {/* <CardMedia
          component="img"
          image={`https://app.elemon.io/assets/images/aura/quality_${pet.aura}.png`}
          alt="My Pet"
          sx={{ objectFit: "contain" }}
        /> */}
        <CardContent>
          <img src="" alt="" className="petlogo" />
          <Typography variant="h5" component="div">
            {pet?.elemonInfo.name}
          </Typography>
          <Typography variant="h5" color="text.primary" gutterBottom>
            {pet.power}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
           
            <img src={`https://app.elemon.io/assets/images/purity_${pet.elclass === pet.elemonInfo.class[0] ? "Pure" : "Hybrid"}.png`} alt="purity"/>
          </Typography>
          <Stack direction="row" spacing={2}>
            <div style={{display:'grid',justifyContent:'center',justifyItems:'center'}}>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {data.ElClass[pet.elclass - 1].name}
              
            </Typography>
            <img style={{objectFit:'contain',width:'50px'}} src={`https://app.elemon.io/assets/images/element/${data.ElClass[pet.elclass - 1].name}.png`} alt=""/>
            </div>
           
            
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Level {pet.level}
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Star {pet.star}
            </Typography>
          </Stack>

          <Card className="">
            <CardContent
              sx={[
                {
                  m: 0,
                  p: 1,
                  Width: 200,
                  display: "grid",
                  gridTemplateColumns: "repeat(3,1fr)",
                  flexWrap: "wrap",
                  textAlign: "center",
                },
                {
                  ".stat": {
                    display: "grid",
                   
                    mb: 2,
                    minWidth: 70,
                    width: "100%",
                    textAlign: "left",
                    
                  },
                },
              ]}
            >
              <div className="stat">
                <Stack sx={{gap:'0.25rem'}}>
                  <div>HP</div>
                  <strong>{pet.body[0]}</strong>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    +{data.BodyQuality[pet.body1 - 1].point}
                  </Typography>
                </Stack>
              </div>
              <div className="stat">
                <Stack sx={{gap:'0.25rem'}}>
                  <div>P.attack </div>
                  <strong>{pet.body[1]}</strong>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    +{data.BodyQuality[pet.body2 - 1].point}
                  </Typography>
                </Stack>
              </div>
              <div className="stat">
                <Stack sx={{gap:'0.25rem'}}>
                  <div>M.attack </div>
                  <strong>{pet.body[2]}</strong>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    +{data.BodyQuality[pet.body3 - 1].point}
                  </Typography>
                </Stack>
              </div>
              <div className="stat">
                <Stack sx={{gap:'0.25rem'}}>
                  <div>P.Def </div>
                  <strong>{pet.body[3]}</strong>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    +{data.BodyQuality[pet.body4 - 1].point}
                  </Typography>
                </Stack>
              </div>
              <div className="stat">
                <Stack sx={{gap:'0.25rem'}}>
                  <div>M.Def </div>
                  <strong>{pet.body[4]}</strong>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    +{data.BodyQuality[pet.body5 - 1].point}
                  </Typography>
                </Stack>
              </div>
              <div className="stat">
                <Stack sx={{gap:'0.25rem'}}>
                  <div>Speed </div>
                  <strong>{pet.body[5]}</strong>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    +{data.BodyQuality[pet.body6 - 1].point}
                  </Typography>
                </Stack>
              </div>
            </CardContent>
          </Card>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={editHandler}>
            Edit Information
          </Button>
          <Button size="small" onClick={deleteHandler}>
            Delete Pet
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Pet;
