import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { getAlbums } from '../store';
import { InitialVeiw } from '../views';



export const HomePage = () => {

  const dispatch = useDispatch();
  const { albums } = useSelector(state => state.playList);

  console.log(albums);


  // useEffect(() => {
  //   dispatch(getAlbums());
  // },[])

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




