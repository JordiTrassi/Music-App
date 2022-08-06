import { MusicNote } from "@mui/icons-material"
import { Grid, Typography } from "@mui/material"


export const InitialVeiw = () => {
  return (
    <Grid
        className='animate__animated animate__fadeIn animate__faster'
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main', borderRadius: 3}}
      >
        <Grid item xs={12}>
            <MusicNote sx={{fontSize: 300, color: 'white'}} />  
          </Grid>
          <Grid item xs={12}>
            <Typography color="white" variant='h1'>Welcome to Music App</Typography>  
        </Grid>
     </Grid>
  )
}


