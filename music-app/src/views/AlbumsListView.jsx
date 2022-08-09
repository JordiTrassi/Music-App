import { useSelector } from 'react-redux';
import { List} from '@mui/material';
import { AlbumCard, IsLoading } from '../components';


export const AlbumsListView = () => {
    
    const {isLoading, albums = [], page, viewGrid  } = useSelector(state => state.playList);


    return (
        
        <List sx={{ width: '100%', bgcolor: 'background.paper', p: 1 }}>
            
            {
                (isLoading)
                    ? <IsLoading />
                    : albums.map(album => (
                        <AlbumCard                    
                            key={album.collectionId}
                            {...album}
                        />
                        ))
                    
            }
        
        </List>
    );
}


