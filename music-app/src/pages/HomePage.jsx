import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAlbums } from '../store';
import { AlbumList, InitialVeiw } from '../views';


export const HomePage = () => {

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getAlbums());
  },[])

  return (
    <Box
      container
      spacing={0}
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{height:'100vh', p: 2, backgroundColor: 'red'}}
    >

      {/* <InitialVeiw /> */}



      <AlbumList />

   </Box>

  )
}




