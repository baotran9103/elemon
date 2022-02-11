import React, { useContext } from "react";
import CustomSelect from "../utils/CustomSelect";
import { BodyQuality } from "../utils/Data";
import { ElemonContext } from "../ElemonContext";

function BodyParts() {
  const myContext = useContext(ElemonContext);
  const [pet, setpet] = myContext.pet;
  const [body1, setbody1] = myContext.body1;
  const [body2, setbody2] = myContext.body2;
  const [body3, setbody3] = myContext.body3;
  const [body4, setbody4] = myContext.body4;
  const [body5, setbody5] = myContext.body5;
  const [body6, setbody6] = myContext.body6;
  const Bodies = [
    {
      id: "BodyPart1",
      Label: "Body Part 1",
      HelperText: "Select Body Part 1",
      useValues: [body1, setbody1],
    },
    {
      id: "BodyPart2",
      Label: "Body Part 2",
      HelperText: "Select Body Part 2",
      useValues: [body2, setbody2],
    },
    {
      id: "BodyPart3",
      Label: "Body Part 3",
      HelperText: "Select Body Part 3",
      useValues: [body3, setbody3],
    },
    {
      id: "BodyPart4",
      Label: "Body Part 4",
      HelperText: "Select Body Part 4",
      useValues: [body4, setbody4],
    },
    {
      id: "BodyPart5",
      Label: "Body Part 5",
      HelperText: "Select Body Part 5",
      useValues: [body1, setbody1],
    },
    {
      id: "BodyPart6",
      Label: "Body Part 6",
      HelperText: "Select Body Part 6",
      useValues: [body6, setbody6],
    },
  ];
  return (
    <div className="body_parts">
      {Bodies.map((body, idx) => {
        return (
          <div className="body"   key={idx}>
            <CustomSelect
            
              id={body.id}
              Label={body.Label}
              HelperText={body.HelperText}
              items={BodyQuality}
              itemID="id"
              itemName="name"
              useValues={body.useValues}
            />
          </div>
        );
      })}
    </div>
  );
}

export default BodyParts;
