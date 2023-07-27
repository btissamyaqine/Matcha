import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import decode from 'jwt-decode';

const drawerWidth = 240;
const navItems = ['Home', 'Signin', 'Signup'];

function NavBar (props) {

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  
  const navigate = useNavigate();
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

//   const Logout = async () => {
//     try {
//         await axios.delete('http://localhost:5000/logout');
//         navigate("/signin");
//     } catch (error) {
//         console.log(error);
//     }
// }
  // useEffect(() => {
  //   const token = user?.token;
  //   if(token) {
  //     const decodedToken = decode(token);

  //     if (decodedToken.exp * 1000 < new Date().getTime()) Logout();
  //   }
  //   setUser(JSON.parse(localStorage.getItem('profile')));
  // },[location])


  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        LOGO
      </Typography>
      <Divider />
      <List>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText component= {Link} to='/'>Home</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText component= {Link} to='/signin'>Signin</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText component= {Link} to='/signup'>Signup</ListItemText>
            </ListItemButton>
          </ListItem>
        
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" position="relative">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                my: 2,
                display: { xs: 'flex'},
                flexGrow: 2,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>

            {!user?.result ? (
              
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Button exact='true' component={Link} to= '/' sx={{ color: '#fff' }}>Home</Button>
                <Button component={Link} to= '/signin' sx={{ color: '#fff' }}>Signin</Button>
                <Button component={Link} to= '/signup' sx={{ color: '#fff' }}>Signup</Button>
            
              </Box>
            ):(
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Typography variant="h6">{user?.result.first_name}</Typography>
                <Button component={Link} to= '/logout' sx={{ color: '#fff' }}>logout</Button>
              </Box>    
          )}

        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

NavBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default NavBar;

