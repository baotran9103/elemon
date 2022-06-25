import axios from 'axios';
import React from 'react'
import {Users} from '@prisma/client'
import { rowProps } from './Types';


// import Moralis from 'react-moralis'

const base_url = "http://35.196.104.231:5000"

export   const creteUser = async(address:string,setuserInfo:setuser)=>{
    if(!base_url) return ;
    console.log("Creating user for wallet ",address)
    try{
      let t = await axios.post(base_url+'/api/user/user',{wallet:address})
      console.log(t)
      setuserInfo(t.data)      
    }catch(e){
      console.log(e)
    }
    
  } 
type setwall = React.Dispatch<React.SetStateAction<string>>
type setuser = React.Dispatch<React.SetStateAction<Users|null>>
export const getInfo = async (user:any,setwalletAddress:setwall,setuserInfo:setuser)=>{
  let address = user!.get('ethAddress') as string
  setwalletAddress(address)
  if(!base_url) return null;
  
  let url = `${base_url}/api/user/wallet/${address}`
  try{
    let t = await axios.get(url,{headers: {"Access-Control-Allow-Origin": "*"}}).then(res=>res.data)
    console.log(t)
    if(!t || t.length==0) alert("No Account associate with this wallet "+ address)
    setuserInfo(t)
  }catch(e){
    creteUser(address,setuserInfo)
  }
  
//   return {};
}
type setAcc = React.Dispatch<React.SetStateAction<rowProps[]>>
export const AddAccounts = async (id:string|undefined,setaccounts:setAcc)=>{
  if(!base_url) return ;
  let url = `${base_url}/api/accounts/account/new`
  let tmp = {
    usersId:id,
    walletAddress:"",
    session:"",
    accId:"",
    maxPower:0,
    status:"stop"
}
  try{
    let t = await axios.post(url,tmp).then(res=>res.data);
    console.log(t)
    if(t && Object.keys(t)?.length){
      t.isEditMode = false
      setaccounts(prev => [...prev,t])
    }
    
    // return t;
  }catch(e){
    alert("No Account created!")
    console.log(e)
    // return {}
  }
}
export const deleteAccount = async (id:string|undefined,setaccounts:setAcc)=>{
  if(!base_url) return ;
  let url = `${base_url}/api/accounts/account/`+id
 
  try{
    let t = await axios.delete(url).then(res=>res.data);
    console.log(t)
    if(t ){
      
      setaccounts(prev => {
        let rows = prev;
        rows = rows.filter(item=>item.id!==id)
        return rows;
      })
    }
    
    // return t;
  }catch(e){
    alert("No Account deleted!")
    console.log(e)
    // return {}
  }
}
export const getAccounts = async (id:string|undefined,setaccounts:setAcc)=>{
  if(!base_url) return ;
  let url = `${base_url}/api/user/accounts/${id}`
  try{
    let t = await axios.get(url).then(res=>res.data);
    if(!t || t.length==0) alert("No Account associate with this wallet ")
    if(t.length)t.forEach((item:rowProps)=>item.isEditMode = false)
    console.log(t)
    setaccounts(t)
    // return t;
  }catch(e){
    alert("No Account found!")
    console.log(e)
    // return {}
  }
}

export const updateAccount = async ( id:string|undefined,t:rowProps) =>{
  if(!id){
    console.log("no id given");
    return;
  }
  try{
    
    let url = base_url+ "/api/accounts/account/" + id;
    let acc = await axios.put(url,t)
    t.maxPower = t.maxPower!+0;
    // console.log(t)
    // console.log(typeof t.maxPower)
    console.log("update completed");
    console.log(acc.data);
  }catch(e){
    console.log("Could not update data !")
    // alert("Could not update data !")
  }
}