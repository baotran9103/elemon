import { createContext ,useState,useEffect,useContext} from "react";
import { getPower } from "../utils/Functions";
import * as d from '../utils/DefaultStates'
import ElemonContextProvider from "../ElemonContext";

export const PetsContext = createContext()
 const PetsContextProvider = ({children})=>{
   
    const data = {
        pet: d.DefaultPet,
        elclass: d.DefaultClass,
        rare: d.DefaultRare,
        aura:d.DefaultAura,
        level: d.DefaultLevel,
        star: d.DefaultStar,
        skill1: d.DefaultSkill,
        skill2: d.DefaultSkill,
        skill3: d.DefaultSkill,
        skill4:d.DefaultSkill,
        body1 : d.DefaultBody,
        body2 : d.DefaultBody,
        body3 : d.DefaultBody,
        body4 : d.DefaultBody,
        body5 :d.DefaultBody,
        body6 : d.DefaultBody
      };
      const [totalPower, settotalPower] = useState(0)
    const [pets, setpets] = useState([])
    const [editingId, seteditingId] = useState(-1)
    
      const addPet = ()=>{
        const mypet = getPower(data) 
        setpets(prev=>[...prev,mypet])
        settotalPower(prev=>prev+mypet.power)
      }

    useEffect(() => {
      const mypet = getPower(data) 
      setpets([mypet])
      settotalPower(mypet.power)
    }, [])
    useEffect(() => {
      let cancel = false; 
      settotalPower(prev => pets.reduce((acc,cur)=>acc+cur.power,0))
      return () => {
        cancel=true;
      }
    }, [pets])
    

    const value = {
        pets:   [pets, setpets],
        totalPower: [totalPower, settotalPower],
        editingId:[editingId, seteditingId] ,
        addPet:addPet,
        
    }
    return (
        <PetsContext.Provider value = {value}>
          <ElemonContextProvider>

            {children}
          </ElemonContextProvider>

        </PetsContext.Provider>
    )

}


export default PetsContextProvider