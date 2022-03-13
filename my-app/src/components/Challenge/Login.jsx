import React, { useEffect, useState } from "react";
import {
  useMoralis,
  useMoralisQuery,
  useMoralisWeb3Api,
  useChain,
} from "react-moralis";
import UnAuthenticated from './UnAuthenticated'
import Authenticated from "./Authenticated";
import Button from '@mui/material/Button';
function Login() {
  const Web3Api = useMoralisWeb3Api();
  const {
    authenticate,
    isAuthenticated,
    user,
    Moralis,
    logout,
    isAuthenticating,
    refetchUserData,
    isWeb3Enabled,
    enableWeb3,
    web3,
    ...rest
  } = useMoralis();
  const { switchNetwork, chainId, chain, account } = useChain();
  const [limit, setLimit] = useState(3);
  const [userName, setuserName] = useState("");
  const [newUsername, setnewUsername] = useState("");
  const [transferAddress, settransferAddress] = useState("");
  const [transferAmmount, settransferAmmount] = useState(0);
  const [isAuthorized, setisAuthorized] = useState(false);
  const [EMPTammount, setEMPTammount] = useState(0);
  useEffect(() => {
    setisAuthorized(false);
    let cancel = false;
    if (!cancel) {
      setuserName(user?.username ? user.username : "");
      enableWeb3({});
     
    }
    return () => (cancel = true);
  }, []);

  async function fetchToken() {
    // console.log(isWeb3Enabled);
    // console.log(user.attributes.ethAddress);
    const options = {
      chain: "0x61",
      address: account,
      token_addresses: process.env.REACT_APP_TOKEN_ADDRESS,
    };
    const balances = await Web3Api.account.getTokenBalances(options);
    if (balances && balances.length > 0) {
      let t = balances[0];
      setEMPTammount(t.balance / 10 ** t.decimals);
      setisAuthorized(true);
    }else{
      setEMPTammount(0);
      setisAuthorized(false);
    }
  }
  useEffect(() => {
    let cancel = false;
    if (!cancel) {
      fetchToken();
    }
    return () => {
      cancel = true;
    };
  }, [chainId, account]);

  if (!isAuthenticated) {
    return <UnAuthenticated authenticate={authenticate} enableWeb3 ={enableWeb3}/>
  }

  return (
   <div style={{display:'grid',padding:'1rem'}}>
     <div>
     <Button  variant="contained" onClick={()=>{logout()}}>Log Out</Button>
     </div>

     <Authenticated EMPTammount={EMPTammount} isAuthorized = {isAuthorized}/>
   </div>
  );
}

export default Login;
