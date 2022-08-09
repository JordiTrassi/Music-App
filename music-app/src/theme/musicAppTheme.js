import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const musicAppTheme = createTheme({
    palette: {
        primary: {
            main: '#262254'
        },
        secondary: {
            main: '#543884'
        },
        error: {
            main: red.A400
        }

    }
})