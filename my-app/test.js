const axios =require('axios')
// import { myPet } from './src/components/MarketPlace/myPet.js';
// const url =
//   "https://app.elemon.io/market/getElemonItems?pageNumber=1&pageSize=100&positionType=2&priceMode=&baseCardId=&tokenId=&rarities=&classes=&purities=";
// const petURL = "https://app.elemon.io/elemon/getElemonInfo?tokenId=";
// axios.get(url).then(res=>{
//     let t = res.data?.data
//     let count = 0;
//     if(t){
//       t = t.map(item=>({...item,id:item.tokenId}))

//       let c = []
//       t.forEach((item)=>{
//         let temp = new myPet(item)
//         axios.get(`${petURL}${item.tokenId}`).then(res=>{
//           if(res.data?.data){
//             temp.UpdateStats(res.data.data[0])
//           }
//           count++
//         } ).catch(err=>console.log(err.message))
//         c.push(temp)
//       })
//       console.log(c)    
//       console.log(c.length)
      
//     }
//     }     ).catch(err=>alert(err.message))

const url = 'https://us-central1-nice-fx-286508.cloudfunctions.net/elemons'

axios.get(url).then(res=>console.log(res.data)).catch(err=>console.log(err.message))