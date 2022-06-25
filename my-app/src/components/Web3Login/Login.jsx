import React, { useState, useEffect } from "react";
import {
  useMoralis,
  useMoralisQuery,
  useMoralisWeb3Api,
  useChain,
} from "react-moralis";
import Button from "@mui/material/Button";
import UnAuthenticated from "./UnAuthenticated";
function Login({children}) {
  const [isAuthorized, setisAuthorized] = useState(false);

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
  useEffect(() => {
    let cancel = false;
    if (!cancel) setisAuthorized(true);
    return () => {
      cancel = true;
    };
  }, []);
  useEffect(() => {
    if (isAuthenticated) {
      // add your logic here
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);


  const logOut = async () => {
    await logout();
    console.log("logged out");
  }
  if (!isAuthenticated) {
    return (
      <UnAuthenticated authenticate={authenticate} enableWeb3={enableWeb3} />
    );
  }
  return (
    <div>
      <div style={{ display: "grid", padding: "1rem" ,margin:'0.5rem',overflowX:'auto'}}>
        <div>
          <Button
            className="Web3Button"
            id="Logout-web3"
            variant="contained"
            onClick={() => {
              logOut();
            }}
          >
            Log Out
          </Button>
        </div>
        {
          children
        }
        
      </div>
    </div>
  );
}

export default Login;
