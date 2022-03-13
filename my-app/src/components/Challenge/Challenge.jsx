import React, { useState } from "react";
import axios from "axios";
import ChallengeList from "./ChallengeList";
import ChallengeInfo from "./ChallengeInfo";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
function Challenge() {
  const url = process.env.REACT_APP_GET_CHALLENGE;
  const [challenges, setchallenges] = useState([]);
  const [selectedID, setselectedUserID] = useState("");
  const [users, setusers] = useState({});
  const [isLoading, setisLoading] = useState(false)
  const handleClose = () => {
    setisLoading(isLoading);
  };
  const handleToggle = () => {
    setisLoading(!isLoading);
  };

  const getChallenge = () => {
    setisLoading(true)
    axios.get(url).then((res) => {
      let t = res.data;
      if (t.length) {
        setchallenges(t.sort((a, b) => a.point < b.point));
      }
      setisLoading(false)
    }).catch(err=>{
      setisLoading(false)
    });
  };
  const getInfo = (id, challenge) => {
    setselectedUserID(id);
    setisLoading(true)
    let t = { ...users };
    if (!users[id]) {
      t[id] = challenge;
    }
    const infoUrl = process.env.REACT_APP_GET_CHALLENGE;
    axios
      .post(`${infoUrl}/${id}`, { point: challenge.point })
      .then((res) => {
        t[id].team = res.data;
        setusers({ ...t });
        setisLoading(false)
      }).catch(err=>{
        setisLoading(false)
      });
  };
  return (
    <div style={{display:'grid',margin:'1rem 0'}}>
      <div>
      <Typography sx={{wordBreak:'break-word'}} variant="body1">Challenge</Typography>
      <div>
      <Button variant="contained" onClick={getChallenge}>Get Challenge List</Button>
      </div>
      </div>
     
     
      <div style={{display:'flex',flexWrap:'wrap',width:'100%'}}>
        <div style={{display:'flex',justifyContent:'center',width:'100%',flex:1,margin:'1rem'}}>
        {challenges.length > 0 ? (
            <ChallengeList getInfo={getInfo} challenges={challenges} selectedID={selectedID} />
          ):'Hit Get Challenge List Button to run'}
        </div>
         
        <div style={{display:'flex',justifyContent:'center',width:'100%',flex:3,margin:'1rem'}}>
        {selectedID && users[selectedID]?.team.length && (
          <ChallengeInfo rows={users[selectedID].team} />
        )}
        </div>
         
       
      </div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

export default Challenge;
