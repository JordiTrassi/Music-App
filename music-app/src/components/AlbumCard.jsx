import { Box, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material';

import { AddCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';



export const AlbumCard = ({
    artistName,
    artworkUrl100,
    collectionName,
    collectionId,
    trackName,
    trackId
}) => {



  return (
      <Card
          className='animate__animated animate__fadeIn'
          sx={{ display: 'flex', mb: '20px', justifyContent: 'space-between', boxShadow: 6 }}
      >
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {collectionName}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {artistName}
          </Typography>
        </CardContent>
              
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            <Link to={`/album/${collectionId}`}>
                <IconButton>
                    <AddCircle fontSize='large'/> 
                </IconButton>
            </Link>
          
          
        </Box>
      </Box>
        <CardMedia
            component="img"
            image={artworkUrl100}
            alt={collectionName}
            sx={{ height: 200, width: 'auto' }}     
        />
    </Card>
  );
}

