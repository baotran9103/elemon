import React,{useEffect,useState} from 'react'
import {useMoralis} from 'react-moralis'
import { Button } from '@mui/material';
import {getInfo,getAccounts,AddAccounts} from './Functions'
import {Users} from '@prisma/client'
import { rowProps } from './Types';

import TableComponent from './Table';
function App() {
  const [walletAddress, setwalletAddress] = useState<string>("")
  const [accounts, setaccounts] = useState<rowProps[]>([])
  const [userInfo, setuserInfo] = useState<Users|null>(null)
  const {  isAuthenticated,  user } = useMoralis();
  


  useEffect(() => {
    let cancel = false;
    if(cancel) return;
   
    getInfo(user,setwalletAddress,setuserInfo)
    return () => {
      cancel = true;
    }
  }, [isAuthenticated])
  
  return (
    <div style={{margin:'1rem 0'}}>
     
      <div>
        <Button variant= "contained" onClick = {()=>getAccounts(userInfo?.id,setaccounts)}>Get Accounts</Button>
        <Button variant= "contained" onClick = {()=>AddAccounts(userInfo?.id,setaccounts)}>Add Accounts</Button>
      </div>
      {
        accounts?.length >0 && <TableComponent rows={accounts} setRows= {setaccounts}/>
      }
    </div>
  )
}

export default App