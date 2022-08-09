import { createSlice } from '@reduxjs/toolkit'


export const playListSlice = createSlice({

    name: 'playList',
    initialState: {
        albums: [],
        page: 0,
        viewGrid: true,
        isLoading: false,
        verifiedInputValue: '',
        errorMessage: '',
    },
    reducers: {
        startLoadingAlbums: (state, action) => {
            state.isLoading = true;
            state.verifiedInputValue = action.payload.verifiedInputValue;
            state.errorMessage = '';
        },
        setAlbums: (state, action) => {
            state.isLoading = false;
            state.page = action.payload.page;
            state.albums = action.payload.albums;
            state.errorMessage = '';
        },
        changingViewGrid: (state, action) => {
            state.viewGrid = action.payload;
        },
        noApiResults: (state, action) => {
            state.errorMessage = 'No hay resultados disponibles!';
        },

    },
})


export const { startLoadingAlbums, setAlbums, changingViewGrid, noApiResults} = playListSlice.actions;

