import { Typography } from '@mui/material';
import { useState } from 'react';
import { AppRouter } from './router/AppRouter';
import { AppTheme } from './theme';


export const MusicApp = () => {

  const [playList, setPlayList] = useState();

  return (

   <AppTheme>
      <AppRouter />
   </AppTheme>
  )
}


