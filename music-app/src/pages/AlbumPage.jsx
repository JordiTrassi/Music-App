import { useSelector } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { Box, Grid, IconButton, Tooltip, Typography } from '@mui/material';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';



export const AlbumPage = () => {

  const navigate = useNavigate();
  const { collectionId } = useParams();  
  const { albums } = useSelector(state => state.playList);  
  const album = albums.find(album => album.collectionId === parseInt(collectionId));

  if (!album) {
    return <Navigate to="/home" />
  }

  const { artistName, collectionName, artworkUrl100, releaseDate } = album;

  const releaseYear = new Date (releaseDate);  
  const releaseYearAlbum = releaseYear.getFullYear();  

  return (
  
    <Grid
        className='animate__animated animate__fadeIn'
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ maxWidth: '90%', minHeight: '90vh', backgroundColor: 'primary.main', borderRadius: 3, ml: 'auto', mr: 'auto', mt: '30px'}}
    >
      
      <Grid
        item
        className='animate__animated animate__fadeInLeft'
        sx={{mb: 8}}
      >
          <Box
            component="img"
            sx={{
                boxShadow: 6,
                height: 'auto',
                width: 500,
                maxHeight: { xs: 'auto', md: 'auto' },
                maxWidth: { xs: 250, md: 350 },
              }}
            alt={collectionName}
            src={artworkUrl100}
          />
        </Grid>
        <Grid
          item
          sx={{ml: 6}} 
        >
          <Typography color="white" variant='h2'sx={{ p: 3 }}>{artistName}</Typography>
          <Typography color="white" variant='h4' sx={{ p: 3 }}>{collectionName}</Typography>
          <Typography color="white" variant='h6' sx={{ pl: 3 }}>{releaseYearAlbum}</Typography>
        </Grid>
        <Grid
          item
          sx={{ml: 6}} 
        >
          <Tooltip
            title="back"
            arrow
          >
          <IconButton
              onClick={() => navigate(-1)}
              sx={{
                color: 'white',
                ':hover': { opacity: 0.5 },
              }}
            >
              <ArrowCircleLeftIcon sx={{ fontSize: 45 }} />
            </IconButton>
          </Tooltip>
        </Grid>
     </Grid>
  )
}


