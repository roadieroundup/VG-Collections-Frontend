import {
    AppBar,
    Button,
    Divider,
    Link,
    ListItemIcon,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
} from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { LoginModal, RegisterModal } from '../../auth/components';
import { useAuthStore, useUiStore } from '../../hooks';
import { useState } from 'react';
import { AccountCircle, Add, Logout } from '@mui/icons-material';

export const Navbar = () => {
    const { openRegisterModal, openLoginModal } = useUiStore();
    const { status, user, startLogout } = useAuthStore();

    const navigate = useNavigate();

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = event => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = event => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar
            position="sticky"
            elevation={0}
            sx={{
                backgroundColor: 'elevation.2',
            }}
        >
            <Toolbar
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <Link
                    component={RouterLink}
                    color="inherit"
                    sx={{ textDecoration: 'none' }}
                    to="/"
                >
                    <Typography variant="h6">Video Game Collections</Typography>
                </Link>

                <div>
                    {status === 'authenticated' ? (
                        <>
                            <Button onClick={handleOpenUserMenu}>
                                {user.username}
                            </Button>
                            <Menu
                                sx={{ mt: '45px' }}
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                <MenuItem
                                    onClick={() => {
                                        navigate(`/profile/${user.id}`);
                                        handleCloseUserMenu();
                                    }}
                                >
                                    <ListItemIcon>
                                        <AccountCircle fontSize="medium" />
                                    </ListItemIcon>
                                    Profile
                                </MenuItem>
                                <MenuItem onClick={()=>{
                                    navigate(`/newlist`)
                                    handleCloseUserMenu()
                                }}>
                                    <ListItemIcon>
                                        <Add fontSize="medium" />
                                    </ListItemIcon>
                                    New List
                                </MenuItem>
                                <Divider />
                                <MenuItem onClick={()=>{
                                    startLogout();
                                    handleCloseUserMenu();
                                }}>
                                    <ListItemIcon>
                                        <Logout fontSize="medium" />
                                    </ListItemIcon>
                                    Logout
                                </MenuItem>
                            </Menu>
                        </>
                    ) : (
                        <>
                            <Button onClick={() => openRegisterModal()}>
                                Create Account
                            </Button>
                            <RegisterModal />
                            <Button onClick={() => openLoginModal()}>
                                Log In
                            </Button>
                            <LoginModal />
                        </>
                    )}
                </div>
            </Toolbar>
        </AppBar>
    );
};
