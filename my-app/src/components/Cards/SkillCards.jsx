import React,{useContext} from 'react'
import CustomInput from "../utils/CustomInput";
import {ElemonContext} from '../ElemonContext'

function SkillCards({star}) {
  const myContext = useContext(ElemonContext)
 
  const [skill1, setskill1] = myContext.skill1;
  const [skill2, setskill2] = myContext.skill2;
  const [skill3, setskill3] =myContext.skill3;
  const [skill4, setskill4] =myContext.skill4;
  return (
    <div>
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
    </div>
  )
}

export default SkillCards