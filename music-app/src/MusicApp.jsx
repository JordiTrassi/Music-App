import { Typography } from '@mui/material';
import { useState } from 'react';
import { AppTheme } from './theme';


export const MusicApp = () => {

  const [playList, setPlayList] = useState();

  return (
   <AppTheme>
     <Typography variant='h1'>Music App with iTunes API</Typography>
      
   </AppTheme>

  )
}


