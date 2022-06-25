import React from 'react'
import { MoralisProvider } from "react-moralis";
import Login from '../Web3Login/Login';
import App from './App';
function Index() {
  let info  = process.env
  const APP_ID : string = info.REACT_APP_MORALIS_APPLICATION_ID as string
 
  const SERVER_URL:string = info.REACT_APP_MORALIS_SERVER_URL as string

  
  const isServerInfo = APP_ID && SERVER_URL ? true : false;
  // console.log(SERVER_URL,APP_ID)
  if (isServerInfo)
    return (
     
      <MoralisProvider serverUrl={SERVER_URL} appId={APP_ID}>
          <Login  > 
            <App />
          </Login>
      </MoralisProvider>
    )
  return (
    <div>
        Nothing
    </div>
  )
}

export default Index