import React from 'react'
import Button from '@mui/material/Button';

function UnAuthenticated({authenticate,enableWeb3}) {
  const Metamask = ()=>{
    try{
      authenticate({ signingMessage:'Logging to EMP app'}).catch(e=>{
        alert("Could not login with Metamask")
      })
    }catch(e){
      alert("Could not login with Metamask")
    }
  }
  const WalletConnect = ()=>{

    console.log('clicked')
    try{
      enableWeb3({provider: 'walletconnect'})
      authenticate({ 
        provider: "walletconnect", 
        mobileLinks: [
          "rainbow",
          "metamask",
          "argent",
          "trust",
          "imtoken",
          "pillar",
        ] ,
        signingMessage:'Logging to EMP app'
    })
    }catch(e){
      alert("Could not login with WalletConnect")
    }
  }
  return (
    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center',height:'100vh',gap:'2rem'}}>
      <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center',height:'100vh',gap:'1rem'}}>
      <Button  variant="contained" onClick={Metamask}>Connect with Metamask</Button>
        <Button  variant="contained" onClick={WalletConnect}>
          Walletconnect
        </Button>
      </div>
      
      </div>
  )
}

export default UnAuthenticated