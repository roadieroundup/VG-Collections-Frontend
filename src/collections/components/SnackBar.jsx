import { Alert, Slide, Snackbar } from '@mui/material';
import { useEffect, useState } from 'react';
import { useUiStore } from '../../hooks';

function SlideTransition(props) {
    return <Slide {...props} direction="up" />;
}

export const SnackBar = () => {
    const { ok, message } = useUiStore();

    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (ok !== undefined) {
            setOpen(true);
            setTimeout(() => {
                setOpen(false);
            }, 3000); // close the snackbar after 3 seconds
        }
    }, [ok]);

    return (
        <Snackbar
            open={open}
            autoHideDuration={3000}
            TransitionComponent={SlideTransition}
            key="SlideTransition"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
            <Alert
                severity={ok === true ? 'success' : 'error'}
                sx={{ width: '100%' }}
                variant="filled"
            >
                {message}
            </Alert>
        </Snackbar>
    );
};
