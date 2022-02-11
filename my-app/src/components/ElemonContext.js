import React,{createContext,useState} from 'react'
import * as d from './utils/DefaultStates'
export const ElemonContext =createContext()


export default function ElemonContextProvider({children}){
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
    const data = {
        pet: pet,
        elclass: elclass,
        rare: rare,
        aura:aura,
        level: level,
        star: star,
        skill1: skill1,
        skill2: skill2,
        skill3: skill3,
        skill4:skill4,
      };
   
    const value = {
        pet:[pet, setpet] ,
        elclass: [elclass, setelclass]   ,
        rare: [rare, setrare]   ,
        aura:  [aura, setaura]  ,
        level:  [level, setlevel]  ,
        star:  [star, setstar]  ,
        skill1:  [skill1, setskill1]  ,
        skill2:  [skill2, setskill2]  ,
        skill3:   [skill3, setskill3]  ,
        skill4:   [skill4, setskill4] ,
        data:data
    }



    return (
        <ElemonContext.Provider value={value}>
            {
                children
            }
        </ElemonContext.Provider>
    )
}

