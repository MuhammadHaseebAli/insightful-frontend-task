import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loader = () => (
  <Box sx={{ display: 'flex', marginLeft: 'auto', width: 'fit-content', marginRight: 'auto' }}>
    <CircularProgress style={{
      'color': 'white',
    }} />
  </Box>
)

export default Loader;
