import React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import DragHandleIcon from '@mui/icons-material/DragHandle';
import SpeedDialAction from "@mui/material/SpeedDialAction";
import ArrowUpwardOutlined from "@mui/icons-material/ArrowUpwardOutlined";
import { animateScroll as scroll, Element } from "react-scroll";
const actions = [
  {
    icon: (
      <Element
        onClick={() => scroll.scrollToTop()}
        smooth={"true"}
        duration={500}
      >
        <ArrowUpwardOutlined />
      </Element>
    ),
    name: "Up",
  },
];
function Nav() {
  return (
    <Box sx={{position:'fixed',bottom:'0',right:'-10px', transform: "translateZ(0px)", flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<DragHandleIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}

export default Nav;
