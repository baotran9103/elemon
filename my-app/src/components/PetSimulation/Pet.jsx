import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import { PetsContext } from "./PetsContext";
import Stack from "@mui/material/Stack";
// import './pets.css'
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
  const coppyHandler = ()=>{
    // console.log(pet)
    setpets(prev => [...prev,pet]);
  }
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
  return (
    <div>
      <Card sx={{ maxWidth: 400, width: "100%", position: "relative" }}>
        <div style={{ position: "absolute" }}>
          <CardMedia
            component="img"
            height="50"
            image={`https://app.elemon.io/assets/images/rarity_${
              data.Rare[pet.rare - 1].name
            }.png`}
            alt="My Pet"
            sx={{ objectFit: "contain" }}
          />
        </div>
            <div >
            <CardMedia
          component="img"
          height="194"
          image={`https://statics.elemon.io/avatar/${pet.petId}/${pet.petId}_${pet.body1}_${pet.body2}_${pet.body3}_${pet.body4}_${pet.body5}_${pet.body6}.png`}
          alt="My Pet"
          sx={{ objectFit: "contain" }}
        />
        {/* <img src={`https://statics.elemon.io/avatar/${pet.petId}/${pet.petId}_${pet.body1}_${pet.body2}_${pet.body3}_${pet.body4}_${pet.body5}_${pet.body6}.png`} alt="" /> */}
        {/* <div className="img_aura"></div> */}
            </div>
        
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {
            pet?.star >0 &&  <CardMedia
            component="img"
            height="30"
            image={`https://app.elemon.io/assets/images/star/star_level_${pet.star}.png`}
            alt="My Pet"
            sx={{ objectFit: "contain" }}
          />
          }
         
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
          <div style={{width:'100%',display:'flex',justifyContent:'space-between',}}>
          <Typography variant="h5" component="div">
            {pet?.elemonInfo.name}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <img
              src={`https://app.elemon.io/assets/images/purity_${
                pet.elclass === pet.elemonInfo.class[0] ? "Pure" : "Hybrid"
              }.png`}
              alt="purity"
              style={{width: '50px'}}
            />
          </Typography>
          </div>
         <div style={{width:'100%',display:'flex',justifyContent:'flex-start',gap:'0 2rem'}}>
         <Typography variant="h5" color="text.primary" gutterBottom>
            Power
          </Typography>
         <Typography variant="h5" color="text.primary" gutterBottom>
            {numberWithCommas(pet.power)}
          </Typography>
         </div>
       
         
          <Stack direction="row" spacing={2} sx={{padding:'0.5rem'}}>
            <div
              style={{
                display: "grid",
                justifyContent: "center",
                justifyItems: "center",
              }}
            >
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {data.ElClass[pet.elclass - 1].name}
              </Typography>
              <img
                style={{ objectFit: "contain", width: "25px" }}
                src={`https://app.elemon.io/assets/images/element/${
                  data.ElClass[pet.elclass - 1].name
                }.png`}
                alt=""
              />
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
                 
                  Width: 200,
                  display: "grid",
                  gridTemplateColumns: "repeat(3,1fr)",
                  flexWrap: "wrap",
                  textAlign: "center",
                },
                {
                  ".stat": {
                    display: "grid",

                    
                    minWidth: 70,
                    width: "100%",
                    textAlign: "left",
                  },
                },
              ]}
            >
              <div className="stat">
                <Stack sx={{ gap: "0.25rem" }}>
                  <div>HP</div>
                  <strong>{numberWithCommas(pet.body[0])}</strong>
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
                <Stack sx={{ gap: "0.25rem" }}>
                  <div>P.attack </div>
                  <strong>{numberWithCommas(pet.body[1])}</strong>
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
                <Stack sx={{ gap: "0.25rem" }}>
                  <div>M.attack </div>
                  <strong>{numberWithCommas(pet.body[2])}</strong>
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
                <Stack sx={{ gap: "0.25rem" }}>
                  <div>P.Def </div>
                  <strong>{numberWithCommas(pet.body[3])}</strong>
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
                <Stack sx={{ gap: "0.25rem" }}>
                  <div>M.Def </div>
                  <strong>{numberWithCommas(pet.body[4])}</strong>
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
                <Stack sx={{ gap: "0.25rem" }}>
                  <div>Speed </div>
                  <strong>{numberWithCommas(pet.body[5])}</strong>
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
          <Card>
            <CardContent>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  width: "100%"
                }}
              >
                <div  style={{
                  display: "flex",
                 gap:'4px',
                  alignItems:'center',
                  // flexDirection:'column',

                }}>
                <CardMedia
                  component="img"
                  height="30"
                  image={`/images/icons/icon_ecoin.png`}
                  alt="My Pet"
                  sx={{ objectFit: "contain" }}
                />
                 <Typography
                    sx={{ fontSize: 14 ,textAlign: "center"}}
                    color="text.secondary"
                  >
                    {numberWithCommas(pet.elcoinCost)}
                  </Typography>
                </div>
              
                <div style={{
                  display: "flex",
                 gap:'4px',            
                  alignItems:'center',
                  //  flexDirection:'column',
                }}>
                <CardMedia
                  component="img"
                  height="30"
                  image={`/images/icons/icon_header.png`}
                  alt="My Pet"
                  sx={{ objectFit: "contain" }}
                />
                 <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                  >
                    {numberWithCommas(pet.elmonCost)}
                  </Typography>
                </div>
              
              </div>
            </CardContent>
          </Card>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={editHandler}>
            Edit Information
          </Button>
          <Button size="small" onClick={coppyHandler}>
            Coppy Pet
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
