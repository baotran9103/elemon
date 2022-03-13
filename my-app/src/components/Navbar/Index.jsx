import React,{useState} from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import {Link} from 'react-router-dom'
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
function Index() {
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuEl, setmenuEl] = useState(null)
  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handlePageMenu = (e)=>{
    setmenuEl(e.currentTarget)
  }
  const handlePageMenuClose = () => {
    setmenuEl(null);
  };
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handlePageMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
                id="menu-appbar2"
                anchorEl={menuEl}
                // anchorOrigin={{
                //   vertical: "bottom",
                //   horizontal: "right",
                // }}
                keepMounted
                // transformOrigin={{
                //   vertical: "bottom",
                //   horizontal: "right",
                // }}
                open={Boolean(menuEl)}
                onClose={handlePageMenuClose}
              >
                <MenuItem onClick={handlePageMenuClose}><Link className='navlink ' to='/'>Get Power</Link></MenuItem>
                <MenuItem onClick={handlePageMenuClose}><Link className='navlink' to='/market'>Marketplace</Link></MenuItem>
                <MenuItem onClick={handlePageMenuClose}><Link className='navlink' to='/challenge'>Challenge</Link></MenuItem>
              </Menu>
          <div style={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <IconButton onClick={() => {}} sx={{ p: 0, m: 2 }}>
              <a href="https://t.me/elemonmoneyprivate" target="_blank" style={{ color: "#fff", textDecoration: "none" }}>
                <Avatar alt="EMP" src="/emp.jpg" />
              </a>
            </IconButton>

            <a href="/" style={{ color: "#fff", textDecoration: "none" }}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Elemon Fan
              </Typography>
            </a>
          </div>

          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem> */}
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Index;
