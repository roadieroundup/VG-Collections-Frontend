import { Button, Grid, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useAuthStore, useUiStore } from '../../hooks';
import { ModalLayout } from '../layout';

//TODO google auth?

export const LoginModal = () => {
    const {
        isLoginModalOpen,
        isRegisterModalOpen,
        closeLoginModal,
        ok,
        message,
    } = useUiStore();

    const { startLogin } = useAuthStore();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = ({ email, password }) => {
    
        startLogin({ email, password });
        if (ok === true) {
            closeLoginModal();
        }
    };

    const gridItemStyle = {
        my: 1,
    };

    return (
        <ModalLayout
            title="Login"
            isOpen={isLoginModalOpen}
            closeModal={closeLoginModal}
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid
                    container
                    direction="column"

                
                >
                    <Grid item xs={12} sx={gridItemStyle}>
                        <TextField
                            {...register('email', {
                                required: 'Required',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Invalid email address',
                                },
                            })}
                            name="email"
                            label="Email"
                            type="email"
                            fullWidth
                            helperText={errors.email?.message}
                            error={errors.email ? true : false}
                        />
                    </Grid>
                    <Grid item xs={12} sx={gridItemStyle}>
                        <TextField
                            {...register('password', {
                                required: 'Required',
                                minLength: {
                                    value: 8,
                                    message: 'Must be at least 8 characters',
                                },
                            })}
                            label="Password"
                            type="password"
                            fullWidth
                            helperText={
                                (message.includes('Invalid') && message) ||
                                errors.password?.message
                            }
                            error={
                                (message.includes('Invalid') && message) ||
                                errors.password
                                    ? true
                                    : false
                            }
                        />
                    </Grid>
                    <Grid item xs={12} sx={gridItemStyle}>
                        <Button
                            variant="contained"
                            color="secondary"
                            fullWidth
                            type="submit"
                        >
                            Let me in!
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </ModalLayout>
    );
};
