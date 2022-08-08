import { Box, Button} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { changingViewGrid, getAlbums } from '../store';
import { AlbumCard } from '../components';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GridViewIcon from '@mui/icons-material/GridView';
import { AlbumsGridView, AlbumsListView } from '../views';



export const ListPage = () => {

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
                sx={{mb: '20px', mt: '10px' }}
                
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

            {
                (viewGrid)
                    ? <AlbumsGridView />
                    : <AlbumsListView />
            }
        
            
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

