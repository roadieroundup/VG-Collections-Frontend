import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import VGCApi from '../api/VGCApi';
import {
    onAddGameToTempList,
    onClearActiveGame,
    onClearGameResults,
    onClearProfile,
    onClearTempList,
    onClearVgList,
    onCloseAddGameModal,
    onCloseDeleteListModal,
    onLoadGameResults,
    onOpenAddGameModal,
    onRemoveGameInTempList,
    onResetMessage,
    onResetOk,
    onSetActiveGame,
    // from ui
    onSetMessage,
    onSetOk,
    onSetProfile,
    onSetTempList,
    onSetVgList,
} from '../store';
import { useUiStore } from './useUiStore';

export const useCollectionStore = () => {
    const {
        gameResults,
        isAddGameModalOpen,
        tempList,
        activeGame,
        vgList,
        profile,
    } = useSelector(state => state.collection);

    const { setOk } = useUiStore();

    const { user } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const startLoadingGameResults = async ({ game_title }) => {
        try {
            dispatch(onClearGameResults());
            const { data } = await VGCApi.post('/games/search', {
                game_title,
            });

            const new_data = data.filter(
                game =>
                    !tempList.some(
                        g => g.id === game.id || g.title === game.title
                    )
            );

            dispatch(onLoadGameResults(new_data));
        } catch (error) {
            dispatch(onSetOk(false));
            dispatch(onSetMessage(error.response.data.message));
            setTimeout(() => {
                dispatch(onResetOk());
                dispatch(onResetMessage());
            }, 3500);
        }
    };

    const startClearGameResults = () => {
        dispatch(onClearGameResults());
    };

    const startOpenAddGameModal = id => {
        dispatch(onOpenAddGameModal(id));
    };

    const startCloseAddGameModal = () => {
        dispatch(onCloseAddGameModal());
    };

    const startAddGame = game => {
        // if game is already in tempList, don't add it
        // some at least one element in the array satisfies the condition
        if (tempList.some(g => g.id === game.id || g.title === game.title)) {
            return;
        }

        dispatch(onAddGameToTempList(game));
    };

    const startEditGame = (id, updates) => {
        dispatch(onRemoveGameInTempList(id));
        dispatch(onAddGameToTempList(updates));
    };

    const startRemoveGame = id => {
        dispatch(onRemoveGameInTempList(id));
    };

    const startClearList = () => {
        dispatch(onClearTempList());
    };

    const startSetActiveGame = game => {
        dispatch(onSetActiveGame(game));
    };

    const startClearActiveGame = () => {
        dispatch(onClearActiveGame());
    };

    const startSavingList = async ({ title, description }) => {
        dispatch(onClearVgList());

        try {
            const { data } = await VGCApi.post(
                'vglist/create',
                {
                    title,
                    description,
                    list: tempList,
                    id: user.id,
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            'accessToken'
                        )}`,
                    },
                }
            );
            dispatch(onSetVgList(data.list));
            navigate(`/list/${data.list.id}`);
            dispatch(onSetOk(true));
            dispatch(onSetMessage(data.message));
            setTimeout(() => {
                dispatch(onResetOk());
                dispatch(onResetMessage());
            }, 3500);
        } catch (error) {
            dispatch(onSetOk(false));
            dispatch(onSetMessage(error.response.data.message));
            setTimeout(() => {
                dispatch(onResetOk());
                dispatch(onResetMessage());
            }, 3500);
        }
    };

    const startLoadingVgList = async id => {
        try {
            const { data } = await VGCApi.get(`vglist/${id}`);
            if (data.list) {
                dispatch(onSetVgList(data.list));
                return;
            }
        } catch (error) {
            dispatch(onSetMessage(error.response.data.message));
        }
    };

    const startEditVgList = async ({
        title,
        description,
        is_sorted,
        list,
        id,
    }) => {
        try {
            const { data } = await VGCApi.put(
                `vglist/update/${id}`,
                {
                    title,
                    description,
                    is_sorted,
                    list,
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            'accessToken'
                        )}`,
                    },
                }
            );
            dispatch(onSetVgList(data.list));
            if (is_sorted === undefined) {
                navigate(`/list/${id}`);
            }
            dispatch(onSetOk(true));
            dispatch(onSetMessage(data.message));
            setTimeout(() => {
                dispatch(onResetOk());
                dispatch(onResetMessage());
            }, 3500);
        } catch (error) {
            dispatch(onSetOk(false));
            dispatch(onSetMessage(error.response.data.message));
            setTimeout(() => {
                dispatch(onResetOk());
                dispatch(onResetMessage());
            }, 3500);
        }
    };

    const startDeleteVgList = async id => {
        try {
            const { data } = await VGCApi.delete(`vglist/delete/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(
                        'accessToken'
                    )}`,
                },
            });
            dispatch(onClearVgList());
            dispatch(onCloseDeleteListModal());
            navigate(`profile/${user.id}`);
            dispatch(onSetOk(true));
            dispatch(onSetMessage(data.message));
            setTimeout(() => {
                dispatch(onResetOk());
                dispatch(onResetMessage());
            }, 3500);
        } catch (error) {
            dispatch(onSetOk(false));
            dispatch(onSetMessage(error.response.data.message));
            setTimeout(() => {
                dispatch(onResetOk());
                dispatch(onResetMessage());
            }, 3500);
        }
    };

    const startLoadingEditPage = async id => {
        dispatch(onClearTempList());
        try {
            const { data } = await VGCApi.get(`vglist/${id}`);

            if (data.ok === false) {
                setOk(data.ok);
                return;
            }
            if (data.list) {
                dispatch(onSetTempList(data.list.games));
                dispatch(onSetVgList(data.list));
                return;
            }
        } catch (error) {
            dispatch(onSetMessage(error.response.data.message));
        }
    };

    const startLoadingProfile = async id => {
        dispatch(onClearProfile());
        try {
            const { data } = await VGCApi.get(`profile/${id}`);
            dispatch(onSetProfile(data.profile));
        } catch (error) {
            dispatch(onSetMessage(error.response.data.message));
        }
    };

    const startClearProfile = () => {
        dispatch(onClearProfile());
    };

    return {
        //* props
        gameResults,
        isAddGameModalOpen,
        tempList,
        activeGame,
        vgList,
        profile,

        //* actions
        startLoadingGameResults,
        startClearGameResults,
        startOpenAddGameModal,
        startCloseAddGameModal,
        startAddGame,
        startEditGame,
        startRemoveGame,
        startClearList,
        startSetActiveGame,
        startClearActiveGame,
        startSavingList,
        startLoadingVgList,
        startEditVgList,
        startDeleteVgList,
        startLoadingEditPage,
        startLoadingProfile,
        startClearProfile,
    };
};
