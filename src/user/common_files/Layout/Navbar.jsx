import {useState} from 'react'

import { Container, Box, AppBar ,Button ,Tooltip, Avatar, Toolbar , Typography ,IconButton ,Switch ,MenuItem ,Menu ,Link, FormControlLabel ,FormControl ,FormGroup } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';


import Logo from '../../../assets/Logo'
const Navbar = ({auth , setAuth}) => {

	
	const [anchorElNav, setAnchorElNav] = useState(null);
	const [anchorElUser, setAnchorElUser] = useState(null);

	const pages = ['Products', 'Pricing', 'Blog'];
	const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

	

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const handleToggleAuth = (event) => {
		setAuth(event.target.checked);
	};

	
	return (
    <Box sx={{ flexGrow: 1 }}>
      
      <AppBar position="static" sx={{background:"#004d7a"}} mt={0}>
        <Toolbar >
          {/* <LogoIcon /> */}
          
          <Box  sx={{ flexGrow: 2,  display: { xs: 'flex', md: 'none' } }}>
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Logo />
          <FormGroup>
			<FormControlLabel
				value="top"
				control={<Switch color="warning" 
			          			checked={auth}
								onChange={handleToggleAuth} />}
				label="Auth"
				labelPlacement="top"
			/>
		  </FormGroup>
          <Box 
	          justifyContent="right" 
	          mr={20}
	          sx={{ flexGrow: 1, 

	                display: { xs: 'none', md: 'flex' } 
	          }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          { auth &&
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Navbar