import { createTheme } from '@mui/material';
import { red, yellow } from '@mui/material/colors';

export const musicAppTheme = createTheme({
    palette: {
        primary: {
            main: '#262254'
        },
        secondary: {
            // main: '#543884'
            main: yellow.A400
        },
        error: {
            main: red.A400
        }

    }
})