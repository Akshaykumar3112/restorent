import React, {useState} from 'react';
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography, Switch, FormControlLabel } from '@mui/material';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import MenuIcon from '@mui/icons-material/Menu';
import {Link, NavLink} from 'react-router-dom';
import '../../style/HeaderStyle.css'

const Header = (props) => {

  const [mobileOpen, setMobileOpen] = useState(false);
  

  // handle menu click
  const handleDrawerToggle = () =>{
    setMobileOpen(!mobileOpen)
  }


  // menu drawer for responsive
  // const drawer = (
    
  // )


  return (
   <Box>
      <AppBar component={'nav'} sx={{bgcolor:props.mode}}>
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
            <FastfoodIcon />
            My Restorent 
          </Typography>
          
           <Box sx={{display: { xs:'none', sm:'block'} }}>
            <ul className='naviagation-menu'>
              <li>
                <NavLink activeClassName="active" to={"/restorent"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/menu"}>Menu</NavLink>
              </li>
              <li>
                <NavLink to={"/about"}>About</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>Contact</NavLink>
              </li>
              <li>
                <FormControlLabel  control={<Switch onChange={props.toggleMode} defaultChecked color="warning" />} label={`Enable ${props.mode === 'light' ?  'Dark' : 'Light'} mode`} />
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
                <Link to={"/"}>Home</Link>
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