import React, { useState, useMemo } from "react";
import { List } from "@mui/material";
import Grid from "@mui/material/Grid";

import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Search from "./Search";
import Select from "./Select";
import { FilterValues } from "./utils";
function TopGuilds({ data }) {
  const [value, setvalue] = useState("");
  const [searchType, setsearchType] = useState("Rank");
  const searchTypes = [ "GuildName", "Rank", "Point"];

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
        {filteredValues.length &&
          filteredValues
            .sort((a, b) => a.rank - b.rank)
            .map((item, idx) => {
              return (
                <div style={{ display: "grid" }}>
                  <h3>{item.guildName}</h3>
                  <Typography sx={{ display: "inline" }}>
                    Rank {item.rank}
                  </Typography>
                  <div style={{ display: "grid" }}>
                    <Typography sx={{ display: "inline" }}>
                      {`Members in top 100: ${item.members}`}
                    </Typography>
                    <Typography sx={{ display: "inline" }}>
                      {`Total Points in top 100: ${item.seasonPoint}`}
                    </Typography>
                  </div>

                  <Divider variant="inset" component="li" />
                </div>
              );
            })}
      </List>
    </Grid>
  );
}

export default TopGuilds;
