import { createSlice } from '@reduxjs/toolkit'


export const playListSlice = createSlice({

    name: 'playList',
    initialState: {
        page: 0,
        viewGrid: true,
        albums: [],
        isLoading: false,
    },
    reducers: {
        startLoadingAlbums: (state) => {
            state.isLoading = true;
        },
        setAlbums: (state, action) => {
            state.isLoading = false;
            state.page = action.payload.page;
            state.albums = action.payload.albums;
        }

    },
})


export const { startLoadingAlbums, setAlbums} = playListSlice.actions;

