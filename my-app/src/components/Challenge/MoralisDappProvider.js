import { useEffect, useState, createContext } from "react";
import { useMoralis, useMoralisQuery, useMoralisWeb3Api } from "react-moralis";
export const MoralisContext = createContext();

const MoralisContextProvider = ({ children }) => {
  // const [userName, setuserName] = useState("");
  // const [newUsername, setnewUsername] = useState("");
  // const [transferAddress, settransferAddress] = useState("");
  // const [transferAmmount, settransferAmmount] = useState(0);
  // const [walletAddress, setWalletAddress] = useState();

  // const [chainId, setChainId] = useState();

  // const {
  //   authenticate,
  //   isAuthenticated,
  //   user,
  //   Moralis,
  //   logout,
  //   isAuthenticating,
  //   refetchUserData,
  //   web3,
  //   isWeb3Enabled,
  //   enableWeb3,
  //   ...rest
  // } = useMoralis();
//   useEffect(() => {
//     let cancel = false;
   
//     if (!cancel) {
//       setuserName(user?.username ? user.username : "");
//       enableWeb3().then((res) => {
//         console.log("here", res);
//         console.log(isWeb3Enabled);
//         console.log(web3);
//         if (isWeb3Enabled) {
//           setChainId(web3.provider?.chainId);
//           setWalletAddress(web3.provider?.selectedAddress || user?.get("ethAddress"))
          
//         }
//       });
//     }
//     return () => (cancel = true);
//   }, [isAuthenticated]);


//   console.log(chainId)
//   console.log(walletAddress)
  const value = {};

  return (
    <MoralisContext.Provider value={value}>{children}</MoralisContext.Provider>
  );
};

export default MoralisContextProvider;
