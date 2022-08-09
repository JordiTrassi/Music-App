import { useDispatch, useSelector } from 'react-redux';
import { changingViewGrid, getAlbums } from '../store';
import { Box, Button, Tooltip} from '@mui/material';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GridViewIcon from '@mui/icons-material/GridView';
import { AlbumsGridView, AlbumsListView } from '../views';



export const ListPage = () => {

    const dispatch = useDispatch();
    const {isLoading, page, viewGrid, verifiedInputValue  } = useSelector(state => state.playList);


    return (
        <Box
            container
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{p: 2 }}
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
                    <Tooltip
                        title="List View"
                        arrow
                        placement="left"
                    >
                        <FormatListBulletedIcon sx={{fontSize: 32}} />  
                    </Tooltip>
                    </Button>
                
                    <Button
                        variant="contained"
                        disabled={viewGrid}
                        onClick={() => dispatch(changingViewGrid(true))}
                        sx={{ p: 2, ml: 3 }}
                    >
                    <Tooltip
                        title="Grid View"
                        arrow
                        placement="right"
                    >
                        <GridViewIcon sx={{fontSize: 32}} />  
                    </Tooltip>
                    </Button>
                
            </Box>

            {
                (viewGrid)
                    ? <AlbumsGridView />
                    : <AlbumsListView />
            }
        
            <Tooltip
            title="more results"
            arrow
            >
                <Button
                    variant="contained"
                    disabled={isLoading}
                    onClick={() => dispatch(getAlbums({ page, verifiedInputValue }))}
                    sx={{ p: 2, mb: '30px' }}
                >
                    Next Page
                </Button>
                
            </Tooltip>
        </Box>
    );
}

