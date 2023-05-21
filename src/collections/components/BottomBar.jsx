import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { useState } from 'react';
import { LoginModal, RegisterModal } from '../../auth/components';
import { useAuthStore, useUiStore } from '../../hooks';

import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LoginIcon from '@mui/icons-material/Login';
import AddIcon from '@mui/icons-material/Add';

import { AccountCircle, Logout } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export const BottomBar = () => {
    const {
        status,
        user: { id },
        startLogout,
    } = useAuthStore();

    const navigate = useNavigate();

    const [value, setValue] = useState('recents');
    const { openRegisterModal, openLoginModal } = useUiStore();

    const handleChange = (event, newValue) => {
        if (newValue === 'register') {
            openRegisterModal();
        } else if (newValue === 'login') {
            openLoginModal();
        }
        setValue(newValue);
    };

    return (
        <>
            <BottomNavigation
                showLabels
                className="bottomBar"
                sx={{
                    width: '100%',
                    backgroundColor: 'elevation.4',
                    bottom: 0,
                    position: 'fixed',
                    zIndex: 7,
                }}
                value={value}
                onChange={handleChange}
            >
                {/* for some reason fragments are not working here */}
                {status === 'authenticated'
                    ? [
                          <BottomNavigationAction
                              label="Profile"
                              value="profile"
                              icon={<AccountCircle />}
                              onClick={() => {
                                  navigate(`/profile/${id}`);
                              }}
                              showLabel
                          />,
                          <BottomNavigationAction
                              label="New List"
                              value="newList"
                              icon={<AddIcon />}
                              showLabel
                              onClick={() => {
                                  navigate('/newList');
                              }}
                          />,
                          <BottomNavigationAction
                              label="Logout"
                              value="logout"
                              icon={<Logout />}
                              showLabel
                              onClick={startLogout}
                          />,
                      ]
                    : [
                          <BottomNavigationAction
                              label="Register"
                              value="register"
                              icon={<AppRegistrationIcon />}
                              showLabel
                          />,
                          <BottomNavigationAction
                              label="Login"
                              value="login"
                              icon={<LoginIcon />}
                              showLabel
                          />,
                      ]}
            </BottomNavigation>
            <RegisterModal />
            <LoginModal />
        </>
    );
};
