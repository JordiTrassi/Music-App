import { MusicNote } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';


export const InitialVeiw = () => {
  return (
      <Grid
        className='animate__animated animate__fadeIn'
        container
        spacing={0}
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ height: '93%', width: '100%', backgroundColor: 'primary.main', borderRadius: 3, p: 5 }}
        >
        <Grid
          item
          alignItems="center"
        >
          <MusicNote sx={{fontSize: 300, color: 'white'}} />  
        </Grid>
        <Grid
          item
          alignItems="center"
        >
          <Typography color="white" variant='h1'>Welcome to Music App</Typography>
          <Typography color="white" variant='h3'>Search your favorite music!</Typography>
        </Grid>
      </Grid>
  )
}


