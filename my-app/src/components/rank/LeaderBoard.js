import React, { useState, useMemo } from "react";
import { List } from "@mui/material";
import Grid from "@mui/material/Grid";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import FolderIcon from "@mui/icons-material/Folder";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { data } from "./temp";
import Search from "./Search";
import Select from "./Select";
import { FilterValues } from "./utils";
function LeaderBoard({data}) {
// function LeaderBoard() { // localhost
  const [value, setvalue] = useState("");
  const [searchType, setsearchType] = useState("Rank");
  const searchTypes = ["Name", "GuildName", "Rank", "Point"];

  const filteredValues = useMemo(() => {
    if (value === "") return data;
    if (data.length === 0) return [];
    return FilterValues(data, searchType, value);
  }, [[value, searchType], data]);

  return (
    <Grid
      sx={{
        maxHeight: "80vh",
        width: "100%",
        maxWidth: "40vw",
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
      }}
    >
      <Select
        value={searchType}
        setvalue={setsearchType}
        label={"Filter Type"}
        values={searchTypes}
      />
      <Search placeholder={"Search by " + searchType} value={value} setvalue={setvalue} />

      <List
        dense={true}
        sx={{ marginTop: "1rem", maxHeight: "70vh", overflow: "auto" }}
      >
        {filteredValues?.length > 0 &&
          filteredValues
            .sort((a, b) => a.rank - b.rank)
            .map((item, idx) => {
              return (
                <div key={item.id}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar
                        alt={item.name}
                        src={`https://statics.elemon.io/avatar/${
                          item?.avatar?.split("_")[0]
                        }/${item?.avatar}.png`}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={item.name}
                      secondary={
                        <React.Fragment>
                          <div style={{ display: "grid" }}>
                            <Typography
                              sx={{ display: "inline" }}
                              color="text.primary"
                            >
                              {`Guild : ${item.guildName} `}
                            </Typography>
                            <Typography sx={{ display: "inline" }}>
                              {`Rank : ${item.rank}_ Point : ${item.seasonPoint}`}
                            </Typography>
                          </div>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </div>
              );
            })}
      </List>
    </Grid>
  );
}

export default LeaderBoard;
