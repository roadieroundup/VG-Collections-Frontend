import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useUiStore } from '../../hooks';

export const NotFound = ({ message }) => {
    const { resetMessage } = useUiStore();
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
            <Typography variant="h1" style={{ color: 'white' }}>
                404
            </Typography>
            <Typography variant="h6" style={{ color: 'white' }}>
                {message}
            </Typography>
            <Button
                variant="contained"
                sx={{
                    my: 2,
                }}
                onClick={() => {
                    resetMessage();
                    navigate('/');
                }}
            >
                Back Home
            </Button>
        </Box>
    );
};
