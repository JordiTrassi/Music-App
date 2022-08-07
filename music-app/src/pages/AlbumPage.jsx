import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';


export const AlbumPage = () => {

  const {artist, album} = useSelector(state => state.playList);

  return (
    <>
      <Typography variant="h2">Album Page</Typography>
      <Typography variant="h5">Artist: {artist} Album: {album}</Typography>
    
    
    </>
  )
}


