import { AddAPhotoOutlined } from '@mui/icons-material';
import {
    Avatar,
    Box,
    Button,
    Grid,
    IconButton,
    TextField,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { ModalLayout } from '../../auth/layout';
import { useAuthStore, useUiStore } from '../../hooks';

const gridItemStyle = {
    my: 1,
};

const validFileTypes = ['image/png', 'image/jpeg'];

export const UpdateProfileModal = () => {
    const {
        isEditProfileModalOpen,
        closeEditProfileModal,
        tempAvatar,
        setTempAvatar,
    } = useUiStore();
    const { startUpdateProfile, user } = useAuthStore();

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        reset,
    } = useForm();

    const onSubmit = ({ name, bio, image }) => {
        const isValidType = !!validFileTypes.find(
            type => type === image[0]?.type
        );

        if (image.length !== 0 && !isValidType) {
            return;
        } else if (image[0] === undefined && !isValidType) {
            startUpdateProfile({ name, bio }).then(() => {
                onCloseModal();
            });
        } else if (image.length === 1 && isValidType) {
            startUpdateProfile({ name, bio, image }).then(() => {
                onCloseModal();
            });
        } else {
            return;
        }
    };

    const avatarChange = ({ target }) => {
        setTempAvatar(URL.createObjectURL(target.files[0]));
    };

    const onCloseModal = () => {
        reset();
        closeEditProfileModal();
    };

    return (
        <ModalLayout
            title="Edit Profile"
            isOpen={isEditProfileModalOpen}
            closeModal={onCloseModal}
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container direction="column">
                    <Grid
                        item
                        container
                        xs={12}
                        sx={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            my: 1,
                        }}
                    >
                        <input
                            id="fileInput"
                            {...register('image', {
                                onChange: avatarChange,
                            })}
                            type="file"
                            name="image"
                            accept="image/png, image/jpeg"
                            style={{ display: 'none' }}
                        />
                        <Box
                            sx={{
                                position: 'relative',
                                width: 100,
                                height: 100,
                                borderRadius: '50%',
                                overflow: 'hidden',
                            }}
                        >
                            <Avatar
                                src={tempAvatar ? tempAvatar : user.image_url}
                                sx={{
                                    width: 100,
                                    height: 100,
                                }}
                                className="avatar"
                            />
                            <IconButton
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: 40,
                                    height: 40,
                                    borderRadius: '50%',
                                    backgroundColor: 'rgba(0, 0, 0, .5)',
                                }}
                                onChange={avatarChange}
                                onClick={() =>
                                    document.getElementById('fileInput').click()
                                }
                            >
                                <AddAPhotoOutlined
                                    fontSize="small"
                                    style={{ color: '#fff' }}
                                />
                            </IconButton>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sx={gridItemStyle}>
                        <TextField
                            {...register('name', { required: 'Required' })}
                            name="name"
                            label="Name"
                            type="text"
                            fullWidth
                            helperText={errors.name?.message}
                            error={errors.name ? true : false}
                            defaultValue={user.name}
                        />
                    </Grid>
                    <Grid item xs={12} sx={gridItemStyle}>
                        <TextField
                            {...register('bio', {
                                required: 'Required',
                            })}
                            name="bio"
                            label="Short bio"
                            type="text"
                            fullWidth
                            helperText={errors.bio?.message}
                            error={errors.bio ? true : false}
                            multiline
                            rows={2}
                            defaultValue={user.bio}
                        />
                    </Grid>

                    <Grid item xs={12} sx={gridItemStyle}>
                        <Button
                            variant="contained"
                            color="secondary"
                            fullWidth
                            type="submit"
                        >
                            Save
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </ModalLayout>
    );
};
