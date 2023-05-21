import { Grid, Typography, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';

import { Carousel } from './Carousel';


const visible = { opacity: 1, y: 0, transition: { duration: 0.9 } };

const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible,
};


export const Header = () => {
    const match = useMediaQuery('(max-width:414px)');    

    return (
        <>
            <Grid
                container
                item
                xs={12}
                sm={12}
                md={6}
                alignContent="center"
                justifyContent="center"
                direction="column"
                ///framer-motion
                component={motion.div}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, transition: { duration: 1 } }}
                variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
            >
                <Typography
                    className="gradient-text"
                    variant="h1"
                    align="center"
                    component={motion.h1}
                    variants={{
                        hidden: { opacity: 0, y: -20 },
                        visible,
                    }}
                    sx={{
                        fontSize: theme => {
                            return match
                                ? theme.typography.h2.fontSize
                                : theme.typography.h1.fontSize;
                        },
                    }}
                >
                    Video Game Collections
                </Typography>
                <Typography
                    variant="h5"
                    sx={{ p: 5 }}
                    component={motion.h5}
                    variants={itemVariants}
                    align="center"
                >
                    Create and manage your video game collections, and share
                    them with your friends.
                </Typography>
            </Grid>
            <Grid
                item
                xs={12}
                sm={12}
                md={6}
                alignContent="center"
                justifyContent="center"
                sx={{
                    px: 2,
                }}
            >
                <Carousel />
            </Grid>
        </>
    );
};
