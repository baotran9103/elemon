import { createContext, useState, useEffect } from "react";
import { myPet } from "./myPet";
import axios from "axios";
export const MarketContext = createContext();

const url =
  "https://app.elemon.io/market/getElemonItems?pageNumber=1&pageSize=200000&positionType=2&priceMode=&baseCardId=&tokenId=&rarities=&classes=&purities=";
// const baseUrl = "https://app.elemon.io/market/getElemonItems?pageNumber="
// const endUrl = "&pageSize=10&positionType=2&priceMode=&baseCardId=&tokenId=&rarities=&classes=&purities="
// var petURL = "https://app.elemon.io/elemon/getElemonInfo?tokenId=";
const MarketContextProvider = ({ children }) => {
  const [data, setdata] = useState([]);
  const [isLoaded, setisLoaded] = useState(false);
  const value = {
    data: [data, setdata],
    isLoaded: [isLoaded, setisLoaded],
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
          .get(infourl, {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
          })
          .then((result2) => {
            if (result2?.data?.data) {
              t.forEach((pet) => {
                let hash = result2.data.data;
                if (hash[pet.id]) {
                  pet.UpdateStats(hash[pet]);
                }
              });
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

// const getElemons = (temp_url,setdata,setisLoaded)=>{
//   axios.get(temp_url).then(res=>{
//     let t = res.data?.data
//     let count = 0;
//     if(t){
//       t = t.map(item=>({...item,id:item.tokenId}))

//       let c = []
//       t.forEach((item)=>{
//         let temp = new myPet(item)
//         petURL += item.tokenId + ','
//         c.push(temp)
//       })
//       petURL = petURL.slice(0,-1)

//          axios.get(`${petURL}`).then(res=>{
//           if(res.data?.data){
//             // temp.UpdateStats(res.data.data[0])
//             let result = res.data.data

//             result.forEach((item,id)=>{
//               if(c[id]){
//                 c[id].UpdateStats(item)

//               }

//             })
//             // console.log(result,c)
//             // console.log(res.data.data)
//           }
//           count++

//         } ).catch(err=>console.log(err.message))

//       console.log(c)
//       c.forEach(item=>setdata(prev=>[...prev,item]))

//       setisLoaded(true)
//     }
//     }     ).catch(err=>alert(err.message))
// }
