import * as React from 'react';
import { Box, Button, CircularProgress, List, ListItem, ListItemAvatar, ListItemText, styled, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getAlbums } from '../store';
import { AlbumCard } from '../components';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});



export const AlbumList = () => {

    const dispatch = useDispatch();
    const {isLoading, albums = [], page } = useSelector(state => state.playList);

    return (
      <Box>
        {/* <CircularProgress disableShrink={!isLoading} />   */}
            <List sx={{ width: '100%', maxWidth: '80%', bgcolor: 'background.paper', pl: 5 }}>
                
                {
                    albums.map( album => (
                        
                        <AlbumCard                    
                            key={album.trackId}
                            {...album}
                        />
                    ))
                        
                }
            </List>
            
            <Button
                variant="contained"
                disabled={isLoading}
                onClick={() => dispatch(getAlbums(page))}
                sx={{ p: 2, marginLeft: '50%', marginBottom: '30px' }}
            >
                Next Page
            </Button>
      </Box>
  );
}


