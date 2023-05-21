import { createSlice } from '@reduxjs/toolkit';

export const collectionSlice = createSlice({
    name: 'collection',
    initialState: {
        gameResults: [],
        isAddGameModalOpen: undefined,
        tempList: [],
        activeGame: {},
        vgList: {},
        profile: {},
    },
    reducers: {
        onLoadGameResults: (state, action) => {
            state.gameResults = action.payload;
        },

        onClearGameResults: state => {
            state.gameResults = [];
        },
        onOpenAddGameModal: (state, action) => {
            state.isAddGameModalOpen = action.payload;
        },
        onCloseAddGameModal: state => {
            state.isAddGameModalOpen = undefined;
        },

        onSetTempList: (state, action) => {
            state.tempList = action.payload;
        },

        onAddGameToTempList: (state, action) => {
            state.tempList.push(action.payload);
        },

        onRemoveGameInTempList: (state, action) => {
            state.tempList = state.tempList.filter(
                game => game.id !== action.payload
            );
        },

        onClearTempList: state => {
            state.tempList = [];
        },

        onSetActiveGame: (state, action) => {
            state.activeGame = action.payload;
        },

        onClearActiveGame: state => {
            state.activeGame = {};
        },

        onSetVgList: (state, action) => {
            state.vgList = action.payload;
        },

        onClearVgList: state => {
            state.vgList = {};
        },

        onChangeSortVgList: (state, action) => {
            state.vgList.is_sorted = action.payload;
        },

        onSetProfile: (state, action) => {
            state.profile = action.payload;
        },

        onClearProfile: state => {
            state.profile = {};
        },
    },
});

export const {
    onLoadGameResults,
    onClearGameResults,
    onOpenAddGameModal,
    onCloseAddGameModal,
    onSetTempList,
    onAddGameToTempList,
    onRemoveGameInTempList,
    onClearTempList,
    onSetActiveGame,
    onClearActiveGame,
    onSetVgList,
    onClearVgList,
    onChangeSortVgList,
    onSetProfile,
    onClearProfile,
} = collectionSlice.actions;
