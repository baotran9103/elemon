import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import ChevronRight from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Paper from '@mui/material/Paper';

function ChallengeList({ challenges ,getInfo,selectedID}) {
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  const getImage = (info) => {
    if (info.length) {
      let t = info.split("_");
      let pet = t[0];

      return `https://statics.elemon.io/avatar/${pet}/${info}.png`;
    }
  };
  const styles = {
    width: "90%",
    minWidth:200,
//    maxWidth:250,
    bgcolor: "background.paper",
    overflow: "auto",
    maxHeight: '60vh',
    cursor:'pointer',
   margin:'1rem'
  

  };
  
  return (
    <Paper sx={{ width: '100%', overflow: 'hiden' ,minWidth:280}}>
      <List sx={styles}>
        {challenges.length &&
          challenges.map((challenge, id) => {
            return (
              <ListItem
              id='getUser'
              onClick={()=>getInfo(challenge.userId,challenge)}
              sx={{ backgroundColor:`${selectedID===challenge.userId?'rgba(0,0,0,0.1)':''}`,':hover': { background:'rgba(0,0,0,0.12)',transition:'0.3s ease all'}}}
                key={challenge.userId}
                secondaryAction={
                  <IconButton edge="end" aria-label="comments" >
                    <ChevronRight />
                  </IconButton>
                }
                disablePadding
              >
                <ListItemAvatar>
                  <Avatar src={getImage(challenge.avatar)} alt="" />
                </ListItemAvatar>
                <ListItemText id='userInfo'
                  primary={`Power: ${numberWithCommas(challenge.point)}`}
                  secondary={`Elcoin: ${numberWithCommas(challenge.elcoinBet)}`}
                />
              </ListItem>
            );
          })}
      </List>
    </Paper>
  );
}

export default ChallengeList;
