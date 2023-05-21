import { Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { NotFound, ProfileLists, ProfileMainInfo } from '../components';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useCollectionStore, useUiStore } from '../../hooks';

const pageVariants = {
    initial: {
        opacity: 0,
        y: '200',
    },
    in: {
        opacity: 1,
        y: 0,
        //this is the child animation
        //second item will start after 0.9 seconds
        transition: {
            duration: 1.5,
            staggerChildren: 0.5,
        },
    },
};

export const ProfilePage = () => {
    const { startLoadingProfile } = useCollectionStore();

    const { id } = useParams();

    const { message } = useUiStore();


    useEffect(() => {
        startLoadingProfile(id);
    }, []);

    if (message === 'Profile not found') {
        return <NotFound message={message} />;
    }
    return (
        <Grid
            container
            direction="column"
            alignItems="center"
            rowSpacing={2}
            sx={{
                p: 1.5,
                width: '100%',

                minHeight: '100vh',
            }}
            ///framer-motion
            component={motion.div}
            initial="initial"
            animate="in"
            variants={pageVariants}
        >
            <ProfileMainInfo />
            <ProfileLists />
        </Grid>
    );
};
