import jwtDecode from 'jwt-decode';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import VGCApi from '../api/VGCApi';
import {
    onChecking,
    onClearUserProfile,
    onCloseLoginModal,
    onCloseRegisterModal,
    onLogin,
    onLogout,
    onOpenEditProfileModal,
    onResetMessage,
    onResetOk,
    onSetMessage,
    // from ui
    onSetOk,
} from '../store';

export const useAuthStore = () => {
    const { status, user } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const checkAuthToken = async () => {
        const accessToken = localStorage.getItem('accessToken');
        const refreshToken = localStorage.getItem('refreshToken');

        const decoded = refreshToken ? jwtDecode(refreshToken) : null;

        if (!accessToken || !refreshToken) {
            localStorage.clear();
            dispatch(onLogout());
            return;
        }
        if (decoded.exp < Date.now() / 1000) {
            localStorage.clear();
            dispatch(onLogout());
            dispatch(onSetMessage('Session expired'));
            dispatch(onSetOk(false));
            setTimeout(() => {
                dispatch(onResetMessage());
                dispatch(onResetOk());
            }, 5000);
            return;
        } else {
            try {
                const { data } = await VGCApi.post('/auth/renew', {
                    refreshToken: `${refreshToken}`,
                });
                localStorage.setItem('accessToken', data.accessToken);
                localStorage.setItem('refreshToken', data.refreshToken);
                dispatch(
                    onLogin({
                        id: data.id,
                        name: data.name,
                        username: data.username,
                        email: data.email,
                        bio: data.bio,
                        image_url: data.image_url,
                    })
                );
                return;
            } catch (error) {
                localStorage.clear();
                dispatch(onLogout());
                return;
            }
        }
    };

    const startRegister = async ({ username, email, password }) => {
        dispatch(onChecking());

        try {
            const { data } = await VGCApi.post('/auth/create', {
                username,
                email,
                password,
            });

            if (data.ok === true) {
                localStorage.setItem('accessToken', data.accessToken);
                localStorage.setItem('refreshToken', data.refreshToken);
                dispatch(
                    onLogin({
                        id: data.id,
                        name: data.name,
                        username: data.username,
                        email: data.email,
                        bio: data.bio,
                        image_url: data.image_url,
                    })
                );
                dispatch(onCloseRegisterModal());
                navigate(`/profile/${data.id}`);
                dispatch(onOpenEditProfileModal());
                dispatch(onSetMessage('Welcome to VGC!'));
                dispatch(onSetOk(true));
                setTimeout(() => {
                    dispatch(onResetOk());
                    dispatch(onResetMessage());
                }, 3500);
            }
        } catch (error) {
            dispatch(onLogout());
            dispatch(onSetMessage(error.response.data.message));
            setTimeout(() => {
                dispatch(onResetMessage());
            }, 3000);
        }
    };

    const startLogin = async ({ email, password }) => {
        dispatch(onChecking());
        try {
            const { data } = await VGCApi.post('/auth/login', {
                email,
                password,
            });

            if (data.ok === true) {
                localStorage.setItem('accessToken', data.accessToken);
                localStorage.setItem('refreshToken', data.refreshToken);
                dispatch(
                    onLogin({
                        id: data.id,
                        name: data.name,
                        username: data.username,
                        email: data.email,
                        bio: data.bio,
                        image_url: data.image_url,
                    })
                );
                navigate(`/profile/${data.id}`);
                dispatch(onCloseLoginModal());
                dispatch(onSetMessage('Welcome back!'));
                dispatch(onSetOk(true));
                setTimeout(() => {
                    dispatch(onResetOk());
                    dispatch(onResetMessage());
                }, 3500);
            }
        } catch (error) {
            dispatch(onLogout());
            dispatch(onSetMessage(error.response.data.message));
            setTimeout(() => {
                dispatch(onResetMessage());
            }, 2500);
        }
    };

    const startLogout = () => {
        localStorage.clear();
        dispatch(onLogout());
        navigate('/');
        dispatch(onSetMessage('Logged out!'));
        dispatch(onSetOk(true));
        setTimeout(() => {
            dispatch(onResetOk());
            dispatch(onResetMessage());
        }, 3500);
    };

    const startUpdateProfile = async ({ name, bio, image }) => {
        const form = new FormData();

        if (image) {
            form.append('image', image[0]);
        }
        form.append('name', name);
        form.append('bio', bio);

        try {
            const { data } = await VGCApi.put(`/auth/update/${user.id}`, form, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(
                        'accessToken'
                    )}`,
                },
            });
            dispatch(onClearUserProfile());
            dispatch(
                onLogin({
                    id: data.id,
                    name: data.name,
                    username: data.username,
                    email: data.email,
                    bio: data.bio,
                    image_url: data.image_url,
                })
            );
            //the only way
            window.location.reload();
            dispatch(onSetOk(true));
            dispatch(onSetMessage('Profile updated!'));
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

    return {
        // props
        status,
        user,

        // actions
        checkAuthToken,
        startRegister,
        startLogin,
        startLogout,
        startUpdateProfile,
    };
};
