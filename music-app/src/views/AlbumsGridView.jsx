import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import { AlbumCard } from '../components';


export const AlbumsGridView = () => {
    
    const {isLoading, albums = [], page, viewGrid  } = useSelector(state => state.playList);


    return (
                
        <Grid
            container           
            spacing={2}
            sx={{ width: '100%', bgcolor: 'background.paper', p: 1 }}
        >
            
            {
                albums.map( album => (
                    <Grid
                        item
                        key={album.collectionId}
                        xs={12} sm={6} md={6} lg={4}
                    > 
                        <AlbumCard                    
                            {...album}
                        />
                    </Grid>
                ))
                    
            }
        
        </Grid>
    );
}
