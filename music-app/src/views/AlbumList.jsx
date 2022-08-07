import * as React from 'react';
import { Box, Button, Grid, List, styled } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { changingViewGrid, getAlbums } from '../store';
import { AlbumCard } from '../components';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GridViewIcon from '@mui/icons-material/GridView';


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});



export const AlbumList = () => {

    const dispatch = useDispatch();
    const {isLoading, albums = [], page, viewGrid  } = useSelector(state => state.playList);


    return (
        <Box
            container
        >
            <Box
                item
                display="flex"
                flexDirection="row"
                justifyContent="center"
                sx={{marginBottom: '25px' }}
                
                >
                    <Button
                        variant="contained"
                        disabled={!viewGrid}
                        onClick={() => dispatch(changingViewGrid(false))}
                        sx={{ p: 2, mr: 3 }}
                    >
                        <FormatListBulletedIcon sx={{fontSize: 32}} />  
                    </Button>
                
                    <Button
                        variant="contained"
                        disabled={viewGrid}
                        onClick={() => dispatch(changingViewGrid(true))}
                        sx={{ p: 2, ml: 3 }}
                    >
                        <GridViewIcon sx={{fontSize: 32}} />  
                    </Button>
                
            </Box>
        
            <List sx={{ width: '100%', bgcolor: 'background.paper', p: 1 }}>
                
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


