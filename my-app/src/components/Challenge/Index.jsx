import React from 'react'
import Login from './Login'
import { MoralisProvider } from "react-moralis";
// import MoralisDappProvider from "./MoralisDappProvider";

import {APP_ID,SERVER_URL} from '../utils/Data'

function Index() {
  const isServerInfo = APP_ID && SERVER_URL ? true : false;
  if (isServerInfo)
    return (
      <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
        {/* <MoralisDappProvider> */}
          <Login isServerInfo />
        {/* </MoralisDappProvider> */}
      </MoralisProvider>
    )
  return (
    <div>
        Nothing
    </div>
  )
}

export default Index