import { createSlice } from '@reduxjs/toolkit'


export const playListSlice = createSlice({

    name: 'playList',
    initialState: {
        page: 0,
        viewGrid: true,
        albums: [],
        isLoading: false,
        verifiedInputValue: '',
    },
    reducers: {
        startLoadingAlbums: (state, action) => {
            state.isLoading = true;
            state.verifiedInputValue = action.payload.verifiedInputValue;
            console.log('SLICE: ' + state.verifiedInputValue);
        },
        setAlbums: (state, action) => {
            state.isLoading = false;
            state.page = action.payload.page;
            state.albums = action.payload.albums;
        },
        changingViewGrid: (state, action) => {
            state.viewGrid = action.payload;
        }

    },
})


export const { startLoadingAlbums, setAlbums, changingViewGrid} = playListSlice.actions;

