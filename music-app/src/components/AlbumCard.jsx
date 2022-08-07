import { Box, Card, CardContent, CardMedia, IconButton, Typography  } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { AddCircle } from '@mui/icons-material';

export const AlbumCard = ({
    artistName,
    artworkUrl100,
    collectionName,
    trackName,
    trackId
}) => {

//   const theme = useTheme();

  return (
    <Card sx={{ display: 'flex', mb: '20px', justifyContent: 'space-between' }}>
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
          <IconButton aria-label="addCircle">
             <AddCircle /> 
          </IconButton>
          
          
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

