import { Button, Grid, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useAuthStore, useUiStore } from '../../hooks';
import { ModalLayout } from '../layout';

export const RegisterModal = () => {
    const { isRegisterModalOpen, closeRegisterModal, ok, message } =
        useUiStore();
    const { startRegister, user } = useAuthStore();

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();

    const onSubmit = ({ username, email, password }) => {
        startRegister({ username, email, password });
    };

    const gridItemStyle = {
        my: 1,
    };

    return (
        <ModalLayout
            title="Register"
            isOpen={isRegisterModalOpen}
            closeModal={closeRegisterModal}
            BackdropProps={{
                clickable: false, // Disable closing by clicking outside
            }}
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container direction="column">
                    <Grid item xs={12} sx={gridItemStyle}>
                        <TextField
                            {...register('username', { required: 'Required' })}
                            name="username"
                            label="User Name"
                            type="text"
                            fullWidth
                            helperText={
                                (message.includes('Username') && message) ||
                                errors.username?.message
                            }
                            error={
                                (message.includes('Username') && message) ||
                                errors.username
                                    ? true
                                    : false
                            }
                        />
                    </Grid>
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
                            helperText={
                                (message.includes('Email') && message) ||
                                errors.email?.message
                            }
                            error={
                                (message.includes('Email') && message) ||
                                errors.email
                                    ? true
                                    : false
                            }
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
                            helperText={errors.password?.message}
                            error={errors.password ? true : false}
                        />
                    </Grid>
                    <Grid item xs={12} sx={gridItemStyle}>
                        <TextField
                            {...register('confirmPassword', {
                                required: 'Required',
                                validate: value => {
                                    return (
                                        value === watch('password') ||
                                        'The passwords do not match'
                                    );
                                },
                            })}
                            name="confirmPassword"
                            label="Confirm Password"
                            type="password"
                            fullWidth
                            helperText={errors.confirmPassword?.message}
                            error={errors.confirmPassword ? true : false}
                        />
                    </Grid>
                    <Grid item xs={12} sx={gridItemStyle}>
                        <Button
                            variant="contained"
                            color="secondary"
                            fullWidth
                            type="submit"
                        >
                            Create Account
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </ModalLayout>
    );
};
