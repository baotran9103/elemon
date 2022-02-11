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
    const [body1, setbody1] = useState(d.DefaultBody)
    const [body2, setbody2] = useState(d.DefaultBody)
    const [body3, setbody3] = useState(d.DefaultBody)
    const [body4, setbody4] = useState(d.DefaultBody)
    const [body5, setbody5] = useState(d.DefaultBody)
    const [body6, setbody6] = useState(d.DefaultBody)
    const [mypet, setmypet] = useState()
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
        body1 : body1,
        body2 : body2,
        body3 : body3,
        body4 : body4,
        body5 :body5,
        body6 : body6
      };
    const updateData = (data)=>{
        if(data.length===0) return;
        let info = data[0]
        setlevel(info.level)
        if(info?.skills[0]) setskill1(info.skills[0].level)
        if(info?.skills[1]) setskill2(info.skills[1].level)
        if(info?.skills[2]) setskill3(info.skills[2].level)
        if(info?.skills[3]) setskill4(info.skills[3].level)
        setstar(info.star)
        setbody1(info.bodyPart[0].quality)
        setbody2(info.bodyPart[1].quality)
        setbody3(info.bodyPart[2].quality)
        setbody4(info.bodyPart[3].quality)
        setbody5(info.bodyPart[4].quality)
        setbody6(info.bodyPart[5].quality)
    }
    const updateMore = (data)=>{
        console.log(data)
        if(data.length===0) return;
        let info = data[0]
        setpet(info.baseCardId)
        setelclass(info.class)
        setaura(info.quality)
        setrare(info.rarity)
    }
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
        body1: [body1, setbody1]  ,
        body2: [body2, setbody2] ,
        body3:  [body3, setbody3],
        body4:  [body4, setbody4] ,
        body5: [body5, setbody5]  ,
        body6: [body6, setbody6] ,
        mypet:[mypet, setmypet],
        data:data,
        updateData:updateData,
        updateMore:updateMore
    }



    return (
        <ElemonContext.Provider value={value}>
            {
                children
            }
        </ElemonContext.Provider>
    )
}

