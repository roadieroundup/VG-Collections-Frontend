import { useDispatch, useSelector } from 'react-redux';
import VGCApi from '../api/VGCApi';
import {
    onCloseLoginModal,
    onCloseRegisterModal,
    onOpenLoginModal,
    onOpenRegisterModal,
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
} from '../store';

export const useUiStore = () => {
    const {
        isRegisterModalOpen,
        isLoginModalOpen,
        isEditProfileModalOpen,
        homePageGames,
        homeBgImage,
        tempAvatar,
        currentResultsPage,
        currentYourListPage,
        isDeleteListModalOpen,
        ok,
        message,
    } = useSelector(state => state.ui);

    const dispatch = useDispatch();

    const openRegisterModal = () => {
        dispatch(onOpenRegisterModal());
    };

    const closeRegisterModal = () => {
        dispatch(onCloseRegisterModal());
    };

    const openLoginModal = () => {
        dispatch(onOpenLoginModal());
    };

    const closeLoginModal = () => {
        dispatch(onCloseLoginModal());
    };

    const openEditProfileModal = () => {
        dispatch(onOpenEditProfileModal());
    };

    const closeEditProfileModal = () => {
        dispatch(onCloseEditProfileModal());
    };

    const setTempAvatar = avatar => {
        dispatch(onSetTempAvatar(avatar));
    };

    const loadHomePageGames = async () => {
        const fiveMinutes = 5 * 60 * 1000; // 5 minutes in milliseconds
        const local = localStorage.getItem('homePageGames');
        const localData = JSON.parse(local);
        const lastUpdated = localStorage.getItem('homePageGamesUpdatedAt');
        const now = new Date().getTime();

        if (localData && lastUpdated && now - lastUpdated < fiveMinutes) {
            dispatch(onLoadHomePageGames(localData));
            return;
        } else {
            try {
                const { data } = await VGCApi.get('/games/home');
                localStorage.setItem('homePageGames', JSON.stringify(data));
                localStorage.setItem('homePageGamesUpdatedAt', now.toString());
                dispatch(onLoadHomePageGames(data));
            } catch (error) {
                console.log(error);
            }
        }
    };

    const setHomeBgImage = image => {
        if (homeBgImage === '') {
            dispatch(onSetHomeBgImage(homePageGames[0].bgImage));
            return;
        }
        dispatch(onSetHomeBgImage(image));
    };

    const setCurrentResultsPage = page => {
        dispatch(onSetCurrentResultsPage(page));
    };

    const setCurrentYourListPage = page => {
        dispatch(onSetCurrentYourListPage(page));
    };

    const resetCurrentResultsPage = () => {
        dispatch(onResetCurrentResultsPage());
    };

    const resetCurrentYourListPage = () => {
        dispatch(onResetCurrentYourListPage());
    };

    const openDeleteListModal = () => {
        dispatch(onOpenDeleteListModal());
    };

    const closeDeleteListModal = () => {
        dispatch(onCloseDeleteListModal());
    };

    const setOk = bool => {
        dispatch(onSetOk(bool));
    };

    const resetOk = () => {
        dispatch(onResetOk());
    };

    const setMessage = message => {
        dispatch(onSetMessage(message));
    };

    const resetMessage = () => {
        dispatch(onResetMessage());
    };

    return {
        //* props
        isRegisterModalOpen,
        isLoginModalOpen,
        isEditProfileModalOpen,
        tempAvatar,
        homePageGames,
        homeBgImage,
        currentResultsPage,
        currentYourListPage,
        isDeleteListModalOpen,
        ok,
        message,

        //* actions
        openRegisterModal,
        closeRegisterModal,
        openLoginModal,
        closeLoginModal,
        openEditProfileModal,
        closeEditProfileModal,
        setTempAvatar,
        loadHomePageGames,
        setHomeBgImage,
        setCurrentResultsPage,
        setCurrentYourListPage,
        resetCurrentResultsPage,
        resetCurrentYourListPage,
        openDeleteListModal,
        closeDeleteListModal,
        setOk,
        resetOk,
        setMessage,
        resetMessage,
    };
};
