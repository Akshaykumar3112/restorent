import React, {useState} from 'react';
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import MenuIcon from '@mui/icons-material/Menu';
import {Link, NavLink} from 'react-router-dom';
import '../../style/HeaderStyle.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Header = () => {

  const [mobileOpen, setMobileOpen] = useState(false);
  

  // handle menu click me
  const handleDrawerToggle = () =>{
    setMobileOpen(!mobileOpen)
  }

  return (
   <Box>
      <AppBar component={'nav'} sx={{bgcolor: "black"}}>
        <Toolbar>
          <IconButton 
            color='inherit' 
            aria-label='open drawer' 
            edge="start"
            sx={{
              mr:2, 
              display:{sm:'none'},
            }}
            onClick={handleDrawerToggle} 
          >
            <MenuIcon />
          </IconButton>
          
          <Typography 
            color={'goldenrod'} 
            variant='h5' 
            component='div' 
            sx={{flexGrow: 1}} 
          >
            <FastfoodIcon />My Restorent 
          </Typography>
          
          <Box sx={{display: { xs:'none', sm:'block'} }}>
            <ul className='naviagation-menu'>
              <li>
                <NavLink 
                  className={({ isActive }) => isActive ? 'active' : undefined}
                  to={"/restorent"}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  className={({ isActive }) => isActive ? 'active' : undefined}
                  to={"/menu"}
                >
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink 
                  className={({ isActive }) => isActive ? 'active' : undefined} 
                  to={"/about"}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => isActive ? 'active' : undefined}
                  to={"/contact"}
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to = {"/cart"} >
                  <AddShoppingCartIcon> 1 </AddShoppingCartIcon>
                </NavLink>
              </li>
            </ul>
          </Box>
        </Toolbar>
      </AppBar>
      
      <Box component="nav">
        <Drawer variant='temporary' 
          open={mobileOpen} 
          onClose={handleDrawerToggle}
          sx={{
            display:{xs:'block', sm:"none"}, 
            "& .MuiDrawer-paper":{
            boxSizing:"border-box",
            width:"240px",
            } 
          }}
        >
        <Box 
          onClick={handleDrawerToggle} 
          sx={{textAlign:'center'}} 
        >
          <Typography 
            color={'goldenrod'} 
            variant='h5' 
            component='div' 
            sx={{flexGrow:1, my:2}} 
          >
            <FastfoodIcon />
            My Restorent 
          </Typography>
          <Divider />
          <ul className='mobile-navigation'>
            <li>
              <Link to={"/restorent"}>Home</Link>
            </li>
            <li>
              <Link to={"/menu"}>Menu</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </Box>
        </Drawer>
      </Box>
      <Box>
        <Toolbar/>
      </Box>
    </Box>
  )
}

export default Header;