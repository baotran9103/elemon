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
    const [totalElcoinCost, settotalElcoinCost] = useState(453)
    const [totalElmonCost, settotalElmonCost] = useState(5)
    const [addPetCount, setaddPetCount] = useState(0)
      const addPet = ()=>{
        const mypet = getPower(data) 
        setpets(prev=>[...prev,mypet])
        settotalPower(prev=>prev+mypet.power)
        window.dataLayer = window.dataLayer || []
       
        window.dataLayer.push({addPet:addPetCount+1});
        setaddPetCount(prev=>prev+1)
        console.log(window.dataLayer)
      }

    useEffect(() => {
      const mypet = getPower(data) 
      setpets([mypet])
      settotalPower(mypet.power)
    }, [])
    useEffect(() => {
      let cancel = false; 
      settotalPower(prev => pets.reduce((acc,cur)=>acc+cur.power,0))
      settotalElcoinCost(prev => pets.reduce((acc,cur)=>acc+cur.elcoinCost,0))
      settotalElmonCost(prev => pets.reduce((acc,cur)=>acc+cur.elmonCost,0) )
      return () => {
        cancel=true;
      }
    }, [pets])
    

    const value = {
        pets:   [pets, setpets],
        totalPower: [totalPower, settotalPower],
        editingId:[editingId, seteditingId] ,
        addPet:addPet,
        totalElcoinCost: [totalElcoinCost, settotalElcoinCost],
        totalElmonCost:[totalElmonCost, settotalElmonCost]
        
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