import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Logo from '../assets/logo.svg';

const Header = () => (
    <Box sx={{ flexGrow: 1}}>
        <AppBar position="static" sx={{bgcolor: 'white'}} >
            <Toolbar variant="dense">
                <img src={Logo} alt="logo"/>
            </Toolbar>
        </AppBar>
  </Box>
)

export default Header;
