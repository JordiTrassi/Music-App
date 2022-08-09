import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { InitialVeiw } from '../views';



export const HomePage = () => {

  const { albums } = useSelector(state => state.playList);

  return (
    <Box
      container
      spacing={0}
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{height:'100vh', p: 2}}
    >
      {
        (albums.length)
          ? <Navigate to="/list" />
          : <InitialVeiw />
      }
          
    </Box>

  )
}




