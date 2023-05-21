import { Card, CardContent, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const itemVariants = {
    initial: {
        opacity: 0,
        y: '100',
    },
    in: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
        },
    },
};

export const ProfileCardSection = ({ children }) => {
    return (
        <Grid
            item
            xs={12}
            sx={{
                width: '100%',
                height: '100%',
            }}
            ///framer-motion
            component={motion.div}
            variants={itemVariants}
        >
            <Card
                sx={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'elevation.3',
                }}
                elevation={0}
            >
                <CardContent>{children}</CardContent>
            </Card>
        </Grid>
    );
};
