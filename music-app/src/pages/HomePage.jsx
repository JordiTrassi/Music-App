import { Typography } from '@mui/material';
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
   <>
   
      <Typography variant="h1">Home Page</Typography>

      {/* <InitialVeiw /> */}

     

      <AlbumList />
   
   </>
      
  )
}




