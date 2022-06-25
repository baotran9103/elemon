import React from "react";
import Button from "@mui/material/Button";

function UnAuthenticated({ authenticate, enableWeb3 }) {
  const Metamask = async () => {
    try {
      await authenticate({ signingMessage: "Logging to EMP app" })
        .then(function (user) {
          console.log("logged in user:", user);
          console.log(user?.get("ethAddress"));
        })
        .catch((e) => {
          alert("Could not login with Metamask");
        });
    } catch (e) {
      alert("Could not login with Metamask");
    }
  };
  const WalletConnect = async () => {
    console.log("clicked");
    try {
      enableWeb3({ provider: "walletconnect" });
      await authenticate({
        provider: "walletconnect",
        mobileLinks: [
          "rainbow",
          "metamask",
          "argent",
          "trust",
          "imtoken",
          "pillar",
        ],
        signingMessage: "Logging to EMP app",
      }).then(function (user) {
        console.log("logged in user:", user);
        console.log(user?.get("ethAddress"));
      });
    } catch (e) {
      alert("Could not login with WalletConnect");
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: "2rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          gap: "1rem",
        }}
      >
        <Button
          className="Web3Button"
          id="Metamask-Button"
          variant="contained"
          onClick={Metamask}
        >
          Connect with Metamask
        </Button>
        <Button
          className="Web3Button"
          id="WalletConnect-Button"
          variant="contained"
          onClick={WalletConnect}
        >
          Walletconnect
        </Button>
      </div>
    </div>
  );
}

export default UnAuthenticated;
