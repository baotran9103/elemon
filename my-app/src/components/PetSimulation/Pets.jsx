import React, { useContext, useState } from "react";
import Pet from "./Pet";
import { PetsContext } from "./PetsContext";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Dialog from "./Dialog";
import CardMedia from "@mui/material/CardMedia";

function Pets() {
  const myContext = useContext(PetsContext);
  const [pets, setpets] = myContext.pets;
  const [totalPower, settotalPower] = myContext.totalPower;
  const [totalElcoinCost, settotalElcoinCost] = myContext.totalElcoinCost;
  const [totalElmonCost, settotalElmonCost] = myContext.totalElmonCost;
  const [editingId, seteditingId] = myContext.editingId;
  const [open, setopen] = useState(false);
  const addPet = myContext.addPet;
  return (
    <div style={{ display: "grid", padding: "2rem" }}>
      <div style={{ display: "flex",flexWrap:'wrap' ,gap:'1.5rem'}}>
        <div style={{ display: "flex" }}>
          <Typography
            variant={"h5"}
            sx={[{ strong: { fontSize: "2rem" } }]}
            component="div"
          >
            Total Power <strong>{totalPower}</strong>
          </Typography>
          <img
            style={{ width: "40px", height: "40px", objectFit: "contain" ,marginLeft:'8px'}}
            src={`/images/icons/icon-power.png`}
            alt="Power"
          />
        </div>
        <div style={{ display: "flex" }}>
          <Typography
            variant={"h5"}
            sx={[{ strong: { fontSize: "2rem" } }]}
            component="div"
          >
            Total Elcoin Cost <strong>{totalElcoinCost}</strong>
          </Typography>
          <img
            style={{ width: "40px", height: "40px", objectFit: "contain",marginLeft:'8px' }}
            src={`/images/icons/icon_ecoin.png`}
            alt="Power"
          />
        </div>

        <div style={{ display: "flex" }}>
          <Typography
            variant={"h5"}
            sx={[{ strong: { fontSize: "2rem" } }]}
            component="div"
          >
            Total Elmon Cost <strong>{totalElmonCost}</strong>
          </Typography>
          <img
            style={{ width: "40px", height: "40px", objectFit: "contain",marginLeft:'8px' }}
            src={`/images/icons/icon_header.png`}
            alt="Power"
          />
        </div>

      
      </div>
     <div>
     <Button variant="outlined" size="small" onClick={addPet}>
          Add pet
        </Button>
     </div>
      <div
        style={{
          display: "flex",
          padding: "1rem",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        {pets?.map((pet, id) => (
          <Pet
            key={`pet_${id}`}
            pet={pet}
            open={open}
            setopen={setopen}
            idx={id}
            pets={pets}
            setpets={setpets}
          />
        ))}
      </div>
      {open && (
        <Dialog
          open={open}
          setopen={setopen}
          pets={pets}
          setpets={setpets}
          editingId={editingId}
          seteditingId={seteditingId}
        />
      )}
    </div>
  );
}

export default Pets;
