import { Grid, Stack, useMediaQuery } from '@mui/material';
import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import {
    EditListPage,
    HomePage,
    NewListPage,
    ProfilePage,
    ViewListPage,
} from '../collections';
import {
    BottomBar,
    Footer,
    Loader,
    Navbar,
    SnackBar,
} from '../collections/components';
import { useAuthStore, useUiStore } from '../hooks';

export const AppRouter = () => {
    //! CUSTOM HOOK CLASE 290
    //! make dummy accounts for project
    const { status, checkAuthToken } = useAuthStore();
    const matches = useMediaQuery('(max-width:899px)');
    const { pathname } = useLocation();

    const { homePageGames, loadHomePageGames } = useUiStore();

    useEffect(() => {
        checkAuthToken();
    }, []);

    useEffect(() => {
        if (pathname === '/') {
            loadHomePageGames();
        }
    }, [pathname]);

    if (pathname === '/' && homePageGames.length === 0) {
        return (
            <Grid
                container
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '100vh' }}
            >
                <Grid item xs={3}>
                    <Loader />
                </Grid>
            </Grid>
        );
    } else {
        return (
            
            <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
                sx={{
                    width: '100%',
                  
                    minHeight: '100vh',
                   
                }}
            >
                <>
                    {matches ? null : <Navbar />}

                    <div
                        style={{
                            height: 'calc(100vh - 56px)',
                            width: '100%',
                            overflowY: 'scroll',
                        }}
                    >
                        {/* Public routes */}
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route
                                path="/profile/:id"
                                element={<ProfilePage />}
                            />
                            <Route
                                path="/list/:id"
                                element={<ViewListPage />}
                            />

                            {/* all other */}
                            <Route
                                path="/*"
                                element={<Navigate to="/" replace={true} />}
                            />

                            {/* Authenticated routes */}
                            {status === 'authenticated' && (
                                <>
                                    <Route
                                        path="/newlist"
                                        element={<NewListPage />}
                                    />
                                    <Route
                                        path="/editlist/:id"
                                        element={<EditListPage />}
                                    />
                                </>
                            )}
                        </Routes>
                        {matches ? null : <Footer />}
                    </div>
                    {matches ? <BottomBar /> : null}
                    <SnackBar />
                </>
            </Stack>

        );
    }
};
