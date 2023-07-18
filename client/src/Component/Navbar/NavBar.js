
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';


function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
 
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="absolute">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            exact="true"
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                
                display: { xs: 'block', md: 'none' },
              }}
            >
                <MenuItem component={Link} to='/' onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Dashbord</Typography>
                </MenuItem>
                <MenuItem component={Link} to='/signin' onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Signin</Typography>
                </MenuItem>
                <MenuItem component={Link} to='/signup' onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Signup</Typography>
                </MenuItem>
              
            </Menu>

          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
          
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
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
          <Box sx={{flexGrow: 1,  display: { xs: 'none', md: 'flex' } }}>
            
              <Button exact="true" component={Link} to='/' onClick={handleCloseNavMenu} sx={{ flexGrow: 2, my: 2, color: 'white', display: 'block' }}>
                  <Typography textAlign="center" variant="body1">Dashbord</Typography>
              </Button>
              <Button component={Link} to='/signin' onClick={handleCloseNavMenu} sx={{ flexGrow: 2, my: 2, color: 'white', display: 'block' }}>
                  <Typography variant="body1" textAlign="center">Signin</Typography>
              </Button>

              <Button component={Link} to='/signup' onClick={handleCloseNavMenu} sx={{ flexGrow: 2, my: 2, color: 'white', display: 'block' }}>
                  <Typography variant="body1" textAlign="center">Signup</Typography>
              </Button>           
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
