import { createContext, useState, useEffect, useMemo } from "react";
import { myPet } from "./myPet";
import axios from "axios";
import { Elemons, ElClass, Rare, Aura, BodyQuality, Pure } from "../utils/Data";
export const MarketContext = createContext();

const url =
  "https://app.elemon.io/market/getElemonItems?pageNumber=1&pageSize=200000&positionType=2&priceMode=&baseCardId=&tokenId=&rarities=&classes=&purities=";
// const baseUrl = "https://app.elemon.io/market/getElemonItems?pageNumber="
// const endUrl = "&pageSize=10&positionType=2&priceMode=&baseCardId=&tokenId=&rarities=&classes=&purities="
// var petURL = "https://app.elemon.io/elemon/getElemonInfo?tokenId=";
const MarketContextProvider = ({ children }) => {
  const [data, setdata] = useState([]);
  const [isLoaded, setisLoaded] = useState(false);
  const [elemonFilter, setelemonFilter] = useState([]);
  const [classFilter, setclassFilter] = useState([]);
  const [rareFilter, setrareFilter] = useState([]);
  const [auraFilter, setauraFilter] = useState([]);
  const [pureFilter, setpureFilter] = useState([]);
  const [powFilter, setpowFilter] = useState([0, 10000000]);
  const [body1, setbody1] = useState([]);
  const [body2, setbody2] = useState([]);
  const [body3, setbody3] = useState([]);
  const [body4, setbody4] = useState([]);
  const [body5, setbody5] = useState([]);
  const [body6, setbody6] = useState([]);
  const [refresh, setrefresh] = useState(false);
  const clearAll = () => {
    setelemonFilter([]);
    setclassFilter([]);
    setrareFilter([]);
    setauraFilter([]);
    setpureFilter([]);
    setpowFilter([0, 10000000]);
    setbody1([]);
    setbody2([]);
    setbody3([]);
    setbody4([]);
    setbody5([]);
    setbody6([]);
  };
  // const filters = [elemonFilter,classFilter,rareFilter,auraFilter,pureFilter]

  const condition =
    elemonFilter !== [] ||
    classFilter !== [] ||
    rareFilter !== [] ||
    auraFilter !== [] ||
    pureFilter !== [];

  const mydata = useMemo(() => {
    let t = data.filter((item) =>
      item.point != 0 ? powFilter[0] <= item.point : true
    );

    if (elemonFilter.length) {
      t = t.filter((item) => elemonFilter.includes(item.pet));
    }
    if (pureFilter.length) {
      t = t.filter((item) => pureFilter.includes(item.pure));
    }
    if (classFilter.length) {
      t = t.filter((item) => classFilter.includes(item.classno));
    }
    if (auraFilter.length) {
      t = t.filter((item) => auraFilter.includes(item.quality));
    }
    if (rareFilter.length) {
      t = t.filter((item) => rareFilter.includes(item.rarity));
    }
    if (body1.length) {
      t = t.filter((item) => body1.includes(item.bodyPart1));
    }
    if (body2.length) {
      t = t.filter((item) => body2.includes(item.bodyPart2));
    }
    if (body3.length) {
      t = t.filter((item) => body3.includes(item.bodyPart3));
    }
    if (body4.length) {
      t = t.filter((item) => body4.includes(item.bodyPart4));
    }
    if (body5.length) {
      t = t.filter((item) => body5.includes(item.bodyPart5));
    }
    if (body6.length) {
      t = t.filter((item) => body6.includes(item.bodyPart6));
    }

    return t;
  }, [
    [elemonFilter, classFilter, rareFilter, auraFilter, pureFilter, powFilter],
    data,
  ]);
  const value = {
    values: data,
    data: mydata,
    isLoaded: [isLoaded, setisLoaded],
    elemonFilter: [elemonFilter, setelemonFilter],
    classFilter: [classFilter, setclassFilter],
    rareFilter: [rareFilter, setrareFilter],
    auraFilter: [auraFilter, setauraFilter],
    pureFilter: [pureFilter, setpureFilter],
    powFilter: [powFilter, setpowFilter],
    body1: [body1, setbody1],
    body2: [body2, setbody2],
    body3: [body3, setbody3],
    body4: [body4, setbody4],
    body5: [body5, setbody5],
    body6: [body6, setbody6],
    clearAll: clearAll,
    refresh: [refresh, setrefresh],
  };
  const conditionCheck = (item) => {
    let checks = ["baseCardId","bodyPart1","bodyPart2","bodyPart3","bodyPart4","bodyPart5","bodyPart6","class","lastPrice","purity","quality","rarity","tokenId"];
    for (let i of checks) {
      if (!item.hasOwnProperty(i)) return false;
    }

    return true;
  };
  useEffect(() => {
    axios.get(url).then(async (result) => {
      if (result?.data.data) {
        let t = [];
        result.data.data.forEach((item, idx1) => {
          if (!conditionCheck(item)) {
            console.log(idx1, "not valid");
          } else {
            t.push(
              new myPet({
                ...item,
                id: item.tokenId,
              })
            );
          }
        });

        setdata(t);
        setisLoaded(true);
        const infourl =
          "https://us-central1-nice-fx-286508.cloudfunctions.net/elemons";

        try{
          let result2 = await axios.get(infourl)
       
          if (result2?.data) {
              t.forEach((pet) => {
                let hash = result2.data;
                if (hash[pet.id]) {
                  pet.UpdateStats(hash[pet.id]);
                }
              });
              setdata([...t]);
  
          }
          let temp = []
          t.forEach(pet=>{
            if(pet.point ===0) temp.push(pet)
            
          })
          // console.log(temp)

          temp.forEach( async (pet)=>{
            let url =            "https://app.elemon.io/elemon/getElemonInfo?tokenId=";
            let data = await axios.get(url+pet.id)
            if(data?.data) pet.updateSecond(data.data.data[0]);
          })
          setdata([...t]);


        }catch(err){
          console.log(err.message)
        }
        

        
      }
    });
    // .catch(err=>console.log(err.message));
  }, [refresh]);

  return (
    <MarketContext.Provider value={value}>{children}</MarketContext.Provider>
  );
};
export default MarketContextProvider;
