import { Grid } from '@mui/material';
import { useUiStore } from '../../hooks';

import { Header } from '../components';

export const HomePage = () => {
    const { homeBgImage } = useUiStore();

    return (
        <Grid
            container
            direction="row"
            alignContent="center"
            justifyContent="center"
            sx={{
                minHeight: '100vh',
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.7)), url(${homeBgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
            
        >
            <Header />
        </Grid>
    );
};
