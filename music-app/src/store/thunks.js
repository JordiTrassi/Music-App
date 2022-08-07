import { setAlbums, startLoadingAlbums } from './slices/playListSlice';

export const getAlbums = (page = 0) => {
    return async(dispatch, getState) => {
        dispatch(startLoadingAlbums());

        const resp = await fetch(`https://itunes.apple.com/search?term=jack+johnson&limit=${page * 20}`);
        const data = await resp.json();

        dispatch(setAlbums({ albums: data.results, page: page + 1}));
    }
}