import React from "react";
import { useChain } from "react-moralis";
import Challenge from "./Challenge";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
function Authenticated({ EMPTammount, isAuthorized }) {
  const { switchNetwork, chainId, chain, account } = useChain();
  return (
    <div>
      <Paper elevation={3} sx={{ padding: "1rem" }}>
        <CustomText text="Current chain" info={chain?.name} />
        <CustomText text="Current address" info={account} />
        <CustomText text="EMP token owned" info={EMPTammount} />
       
      </Paper>
      <div>
        <div>{isAuthorized ? <Challenge /> : <NotAuthorized/>}</div>
      </div>
    </div>
  );
}

export default Authenticated;

const NotAuthorized = () =>{
  return (
    <div style={{display:'grid',gap:'1rem',gridTemplateColumns:'1fr',margin:'1rem'}}>
      <Typography sx={{wordBreak:'break-word'}} variant="body1">{"You don't have any EMP token to use the app !"}</Typography>
    </div>
  )
}

const CustomText = ({ text, info }) => {
  return (
    <div style={{display:'grid',gap:'1rem',gridTemplateColumns:'1fr 4fr',margin:'1rem'}}>
      <Typography sx={{wordBreak:'break-word'}} variant="body1">{text}</Typography>
      <Typography sx={{wordBreak:'break-word'}} variant="body1"> {info}</Typography>
    </div>
  );
};
