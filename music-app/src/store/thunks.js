import { setAlbums, noApiResults } from './slices/playListSlice';

export const getAlbums = ({ page = 0, verifiedInputValue }) => {
    
    return async(dispatch) => {
        
        const resp = await fetch(`https://itunes.apple.com/search?term=${verifiedInputValue}&limit=${page * 20}&entity=album`);
        const data = await resp.json();

        console.log(data.resultCount);
        (data.resultCount === 0)
            ? dispatch(noApiResults())
            : dispatch(setAlbums({ albums: data.results, page: page + 1}));
       

        
    }
}