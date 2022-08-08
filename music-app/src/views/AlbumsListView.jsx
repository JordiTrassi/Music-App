import { Box, Button, Grid, List} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { changingViewGrid, getAlbums } from '../store';
import { AlbumCard } from '../components';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GridViewIcon from '@mui/icons-material/GridView';



export const AlbumsListView = () => {

    const dispatch = useDispatch();
    const {isLoading, albums = [], page, viewGrid  } = useSelector(state => state.playList);


    return (
        
        
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
    
            
  );
}


