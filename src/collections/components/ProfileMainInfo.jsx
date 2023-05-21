import { Avatar, Button, Grid, Typography, useMediaQuery } from '@mui/material';
import { useAuthStore, useCollectionStore, useUiStore } from '../../hooks';
import { ProfileCardSection } from '../layout';
import { UpdateProfileModal } from './UpdateProfileModal';

const mobileAvatar = {
    width: 75,
    height: 75,
};

const mobileButton = {
    fontSize: '0.5rem',
    p: 0.3,
};

export const ProfileMainInfo = () => {
    const match = useMediaQuery('(max-width:414px)');
    const { openEditProfileModal } = useUiStore();
    const { user } = useAuthStore();

    const { profile } = useCollectionStore();

    return (
        <ProfileCardSection>
            <Grid container item direction="row" rowSpacing={1}>
                <Grid item xs={4} md={2.5}>
                    <Avatar
                        src={profile.image_url}
                        alt="Profile Picture"
                        sx={
                            match
                                ? mobileAvatar
                                : {
                                      width: 150,
                                      height: 150,
                                  }
                        }
                    >
                        {profile.name && profile.name.slice(0, 1)}
                    </Avatar>
                </Grid>
                <Grid
                    container
                    item
                    direction="column"
                    xs={6}
                    md={4}
                    spacing={1}
                >
                    <Grid container item direction="row" spacing={1}>
                        <Grid item xs={6}>
                            <Typography
                                variant="h4"
                                sx={{
                                    fontSize: theme => {
                                        return match
                                            ? theme.typography.h6.fontSize
                                            : theme.typography.h4.fontSize;
                                    },
                                }}
                            >
                                {profile.name ? profile.name : profile.username}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            {user.id === profile.id && (
                                <Button
                                    variant="contained"
                                    size="small"
                                    sx={match ? mobileButton : null}
                                    onClick={() => openEditProfileModal()}
                                >
                                    Edit Profile
                                </Button>
                            )}
                            <UpdateProfileModal />
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant="p" color="text.secondary">
                            {profile.bio}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                    container
                    item
                    direction="row"
                    display={{ xs: null, md: 'flex' }}
                    sx={{ width: '100%' }}
                    justifyContent={{ xs: null, md: 'flex-end', lg: 'center' }}
                    alignItems={{ xs: null, md: 'center' }}
                    xs={12}
                    md={5.5}
                >
                    <Grid
                        container
                        item
                        direction="column"
                        display={{ xs: null, md: 'flex' }}
                        alignItems="center"
                        alignContent={{ xs: 'center', md: 'flex-end' }}
                        xs={6}
                        md={2}
                    >
                        <Grid item>
                            <Typography variant="h6">
                                {profile.lists?.length}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="p" color="text.secondary">
                                Lists
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        item
                        direction="column"
                        display={{ xs: null, md: 'flex' }}
                        alignItems="center"
                        alignContent={{ xs: 'center', md: 'flex-end' }}
                        xs={6}
                        md={2}
                    >
                        <Grid item>
                            <Typography variant="h6">
                                0{/* {user.friends.length} */}
                                {/* {profile.friends.length} */}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="p" color="text.secondary">
                                Friends
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </ProfileCardSection>
    );
};
