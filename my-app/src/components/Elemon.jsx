import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import {getPower} from './utils/Functions'
import "./Elemon.css";
// import axios from "axios";
import CustomSelect from "./CustomSelect";
import CustomInput from "./CustomInput";
import CustomRadios from "./CustomRadios";
import Button from "@mui/material/Button";
import * as info from "./utils/Data";
import * as d from "./utils/DefaultStates";
export default function Elemon() {
  const [pet, setpet] = useState(d.DefaultPet);
  const [elclass, setelclass] = useState(d.DefaultClass);
  const [rare, setrare] = useState(d.DefaultRare);
  const [aura, setaura] = useState(d.DefaultAura);
  const [level, setlevel] = useState(d.DefaultLevel);
  const [star, setstar] = useState(d.DefaultStar);
  const [skill1, setskill1] = useState(1);
  const [skill2, setskill2] = useState(d.DefaultSkill);
  const [skill3, setskill3] = useState(d.DefaultSkill);
  const [skill4, setskill4] = useState(d.DefaultSkill);

  const submitHandler = () => {
    let data = {
      pet: pet,
      class: elclass,
      rare: rare,
      aura: aura,
      level: level,
      star: star,
      skill1: skill1,
      skill2: skill2,
      skill3: skill3,
      skill4: skill4,
    };
    let res = getPower(data)
  };

  return (
    <div>
      <div>Pet</div>
      <div className="form_inputs">
        <FormControl>
          <CustomSelect
            id="petName"
            Label="Name"
            HelperText="Select Elemon Name"
            items={info.Elemons}
            itemID="id"
            itemName="name"
            useValues={[pet, setpet]}
          />
          <CustomSelect
            id="Class"
            Label="Class"
            HelperText="Select Elemon Class"
            items={info.ElClass}
            itemID="id"
            itemName="name"
            useValues={[elclass, setelclass]}
          />
          <CustomRadios
            id="Rare"
            label="Rarity"
            HelperText="Select Elemon Rarity"
            items={info.Rare}
            itemID="id"
            itemName="name"
            useValues={[rare, setrare]}
          />
          <CustomRadios
            id="Aura"
            label="Aura"
            HelperText="Select Elemon Aura"
            items={info.Aura}
            itemID="id"
            itemName="name"
            useValues={[aura, setaura]}
          />
          <CustomInput
            type="number"
            label="Level"
            helperText="Please Enter Elemon Level"
            useValues={[level, setlevel]}
          />
          <CustomInput
            type="number"
            label="Star"
            helperText="Please Enter Stars"
            useValues={[star, setstar]}
          />
          <CustomInput
            type="number"
            label="Skill 1"
            helperText="Please Enter Ability 1 Level"
            useValues={[skill1, setskill1]}
          />
          {
            <CustomInput
              disabled={star < 3}
              type="number"
              label="Skill 2"
              helperText="Please Enter Ability 2 Level"
              useValues={[skill2, setskill2]}
            />
          }
          {
            <CustomInput
              disabled={star < 6}
              type="number"
              label="Skill 3"
              helperText="Please Enter Ability 3 Level"
              useValues={[skill3, setskill3]}
            />
          }
          {
            <CustomInput
              disabled={star < 9}
              type="number"
              label="Skill 4"
              helperText="Please Enter Ability 4 Level"
              useValues={[skill4, setskill4]}
            />
          }
          <div>
            <Button variant="contained" size="medium" onClick={submitHandler}>
              Get Power
            </Button>
          </div>
        </FormControl>
      </div>
    </div>
  );
}
