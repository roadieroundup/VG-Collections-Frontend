import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isRegisterModalOpen: false,
        isLoginModalOpen: false,
        isEditProfileModalOpen: false,
        homePageGames: [],
        homeBgImage: '',
        tempAvatar: undefined,
        currentResultsPage: 0,
        currentYourListPage: 0,
        isDeleteListModalOpen: false,
        ok: undefined,
        message: '',
    },
    reducers: {
        onOpenRegisterModal: state => {
            state.isRegisterModalOpen = true;
        },
        onCloseRegisterModal: state => {
            state.isRegisterModalOpen = false;
        },

        onOpenLoginModal: state => {
            state.isLoginModalOpen = true;
        },
        onCloseLoginModal: state => {
            state.isLoginModalOpen = false;
        },

        onOpenEditProfileModal: state => {
            state.isEditProfileModalOpen = true;
        },

        onCloseEditProfileModal: state => {
            state.isEditProfileModalOpen = false;
            state.tempAvatar = undefined;
        },

        onLoadHomePageGames: (state, action) => {
            state.homePageGames = action.payload;
        },

        onSetHomeBgImage: (state, action) => {
            state.homeBgImage = action.payload;
        },

        onSetTempAvatar: (state, action) => {
            state.tempAvatar = action.payload;
        },

        onSetCurrentResultsPage: (state, action) => {
            state.currentResultsPage = action.payload;
        },

        onSetCurrentYourListPage: (state, action) => {
            state.currentYourListPage = action.payload;
        },

        onResetCurrentResultsPage: state => {
            state.currentResultsPage = 0;
        },

        onResetCurrentYourListPage: state => {
            state.currentYourListPage = 0;
        },

        onOpenDeleteListModal: state => {
            state.isDeleteListModalOpen = true;
        },

        onCloseDeleteListModal: state => {
            state.isDeleteListModalOpen = false;
        },

        onSetOk: (state, action) => {
            state.ok = action.payload;
        },

        onResetOk: state => {
            state.ok = undefined;
        },

        onSetMessage: (state, action) => {
            state.message = action.payload;
        },

        onResetMessage: state => {
            state.message = '';
        },
    },
});

export const {
    onOpenRegisterModal,
    onCloseRegisterModal,
    onOpenLoginModal,
    onCloseLoginModal,
    onOpenEditProfileModal,
    onCloseEditProfileModal,
    onLoadHomePageGames,
    onSetHomeBgImage,
    onSetTempAvatar,
    onSetCurrentResultsPage,
    onSetCurrentYourListPage,
    onResetCurrentResultsPage,
    onResetCurrentYourListPage,
    onOpenDeleteListModal,
    onCloseDeleteListModal,
    onSetOk,
    onResetOk,
    onSetMessage,
    onResetMessage,
} = uiSlice.actions;
