import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';

import { musicAppTheme } from './';

export const AppTheme = ({ children }) => {
  
  return (
    <ThemeProvider theme={musicAppTheme}>
        <CssBaseline />
          
        {children}
    </ThemeProvider>
  )
}


