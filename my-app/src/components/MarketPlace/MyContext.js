import { createContext, useState, useEffect,useMemo } from "react";
import { myPet } from "./myPet";
import axios from "axios";
import {Elemons,ElClass,Rare,Aura,BodyQuality,Pure} from '../utils/Data'
export const MarketContext = createContext();

const url =
  "https://app.elemon.io/market/getElemonItems?pageNumber=1&pageSize=200000&positionType=2&priceMode=&baseCardId=&tokenId=&rarities=&classes=&purities=";
// const baseUrl = "https://app.elemon.io/market/getElemonItems?pageNumber="
// const endUrl = "&pageSize=10&positionType=2&priceMode=&baseCardId=&tokenId=&rarities=&classes=&purities="
// var petURL = "https://app.elemon.io/elemon/getElemonInfo?tokenId=";
const MarketContextProvider = ({ children }) => {
  const [data, setdata] = useState([]);
  const [isLoaded, setisLoaded] = useState(false);
  const [elemonFilter, setelemonFilter] = useState(-1)
  const [classFilter, setclassFilter] = useState(-1)
  const [rareFilter, setrareFilter] = useState(-1)
  const [auraFilter, setauraFilter] = useState(-1)
  const [pureFilter, setpureFilter] = useState(-1)
  const [powFilter, setpowFilter] = useState([0,10000000])
  const [body1, setbody1] = useState(-1)
  const [body2, setbody2] = useState(-1)
  const [body3, setbody3] = useState(-1)
  const [body4, setbody4] = useState(-1)
  const [body5, setbody5] = useState(-1)
  const [body6, setbody6] = useState(-1)
  // const filters = [elemonFilter,classFilter,rareFilter,auraFilter,pureFilter]

  const condition = elemonFilter!==-1 || classFilter !== -1 || rareFilter !== -1|| auraFilter !== -1|| pureFilter !== -1

  const mydata = useMemo(() => {
 
   
      let t = data.filter(item=>  item.point != 0 ? powFilter[0]<=item.point :true)

    if(elemonFilter >=0 ){
      t = t.filter(item=>item.pet === elemonFilter)
    }
    if(pureFilter >=0 ){
      t = t.filter(item=>item.pure === pureFilter)
    }
    if(classFilter >=0 ){
      t = t.filter(item=>item.classno === classFilter)
    }
    if(auraFilter >=0 ){
      t = t.filter(item=>item.quality === auraFilter)
    }
    if(rareFilter >=0 ){
      t = t.filter(item=>item.rarity === rareFilter)
    }
    if(body1 >=0 ){
      t = t.filter(item=>item.bodyPart1 === body1)
    }
    if(body2 >=0 ){
      t = t.filter(item=>item.bodyPart2 === body2)
    }
    if(body3 >=0 ){
      t = t.filter(item=>item.bodyPart3=== body3)
    }
    if(body4 >=0 ){
      t = t.filter(item=>item.bodyPart4 === body4)
    }
    if(body5 >=0 ){
      t = t.filter(item=>item.bodyPart5 === body5)
    }
    if(body6 >=0 ){
      t = t.filter(item=>item.bodyPart6 === body6)
    }
      
    
    

    return t
  }, [[elemonFilter,classFilter,rareFilter,auraFilter,pureFilter,powFilter],data])
  const value = {
    values : data,
    data: mydata,
    isLoaded: [isLoaded, setisLoaded],
    elemonFilter: [elemonFilter, setelemonFilter] ,
    classFilter: [classFilter, setclassFilter] ,
    rareFilter: [rareFilter, setrareFilter] ,
    auraFilter: [auraFilter, setauraFilter] ,
    pureFilter: [pureFilter, setpureFilter] ,
    powFilter: [powFilter, setpowFilter] ,
    body1: [body1, setbody1] ,
    body2: [body2, setbody2] ,
    body3: [body3, setbody3] ,
    body4: [body4, setbody4] ,
    body5: [body5, setbody5] ,
    body6: [body6, setbody6] ,
   
  };
  useEffect(() => {
    axios.get(url).then((result) => {
      if (result?.data.data) {
        
        let t = result.data.data.map((item) =>( new myPet({
          ...item,
          id: item.tokenId,
        })));

        setdata(t);
        setisLoaded(true);
        const infourl =
          "https://us-central1-nice-fx-286508.cloudfunctions.net/elemons";
        axios
          .get(infourl)
          .then((result2) => {
            if (result2?.data) {
              t.forEach((pet) => {
                let hash = result2.data;
                if (hash[pet.id]) {
           
                  pet.UpdateStats(hash[pet.id]);
                }
              });
              setdata([...t]);
            }
          });
      }
    }).catch(err=>console.log(err.message));
  }, []);
  return (
    <MarketContext.Provider value={value}>{children}</MarketContext.Provider>
  );
};
export default MarketContextProvider;
