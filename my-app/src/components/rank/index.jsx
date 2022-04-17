import React, { useState, useEffect } from "react";
import { data as data1 } from "./temp";
import LeaderBoard from "./LeaderBoard";
import TopGuilds from "./TopGuilds";
import { Button } from "@mui/material";
import axios from "axios";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function Index() {
  const [top, settop] = useState([]);
  const [openload, setopenload] = useState(false);
  const [data, setdata] = useState([]);
  useEffect(() => {
    let isClosed = false;

    getData();
  }, []);
  async function getData() {
    setopenload(true);
    try {
      let tempdata = await axios.get('https://getRank.baotran17.repl.co/api/rank')
      // let tempdata = {};
      // tempdata.data = data1; // localhost
      let temp = {};
      if (tempdata?.data) {
        setdata(tempdata.data);
        tempdata.data.forEach((item) => {
          if (!(item.guildName in temp))
            temp[item.guildName] = { member: 0, seasonPoint: 0 };
          temp[item.guildName].member++;
          temp[item.guildName].seasonPoint += item.seasonPoint;
        });
        console.log(temp);
        let t = Object.keys(temp);
        let guilds = t.map((key) => {
          let guildName = key === "" ? "NoGuild" : key;

          return {
            guildName: guildName,
            members: temp[key].member,
            seasonPoint: temp[key].seasonPoint,
          };
        });
        console.log(guilds);
        settop(
          guilds
            .sort((a, b) => b.seasonPoint - a.seasonPoint)
            .map((item, idx) => ({ ...item, rank: idx + 1 }))
        );
        handleCloseLoad();
      } else {
        console.log("API failed !");
        alert("Could not get PVP list !");
        handleCloseLoad();
      }
    } catch (err) {
      console.log("API failed !");
      console.log(err.message);
      alert("Could not get PVP list !");
      handleCloseLoad();
    }
  }
  const handleCloseLoad = () => {
    setopenload(false);
  };
  const handleToggleLoad = () => {
    setopenload(!openload);
  };
  return (
    <div  style={{
      display: "grid",width:'100%'
      
    }}>
      <div style={{display:'flex',justifyContent:'center',padding:'1rem'}}>
      <Button variant={"outlined"} onClick={getData}>
        Reload Data
      </Button>
      </div>
      
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          padding: "2rem",
          gap:'1rem',
        }}
      >
        <div>
          <TopGuilds data={top} />
        </div>
        <LeaderBoard data={data} />
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={openload}
          onClick={handleCloseLoad}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    </div>
  );
}

export default Index;
