import { Button, Divider, Grid, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthStore, useCollectionStore, useUiStore } from '../../hooks';
import {
    CardFlip,
    ConfirmDeleteListModal,
    Loader,
    NotFound,
} from '../components';
import { ProfileCardSection } from '../layout';

export const ViewListPage = () => {
    const { id } = useParams();

    const navigate = useNavigate();

    const { vgList, startLoadingVgList, startEditVgList } =
        useCollectionStore();

    const { openDeleteListModal, ok, message } = useUiStore();

    const { user } = useAuthStore();

    useEffect(() => {
        startLoadingVgList(id);
    }, []);

    const handleOnClickEdit = () => {
        navigate(`/editlist/${id}`);
    };

    const handleOnClickSort = () => {
        startEditVgList({ id, is_sorted: !vgList.is_sorted });
    };

    const handleOnClickDelete = () => {
        openDeleteListModal();
    };

    const sortedGames = () => {
        if (vgList.is_sorted) {
            return [...vgList.games].sort((a, b) => b.rating - a.rating);
        } else {
            return vgList.games;
        }
    };

    if (message === 'List not found') {
        //! create not found component
        return <NotFound message={message} />;
    } else if (Object.keys(vgList).length === 0) {
        return (
            <Grid
                container
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '100vh' }}
            >
                <Grid item xs={3}>
                    <Loader />
                </Grid>
            </Grid>
        );
    } else {
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
            >
                <ProfileCardSection>
                    {/*H4 OR H5 */}
                    <Typography variant="h4">{vgList?.title}</Typography>
                    <Divider
                        sx={{
                            height: 2,
                            background: theme =>
                                `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                            width: '25%',
                        }}
                    />

                    <Grid container direction="column" marginTop={2}>
                        <Grid>
                            <Typography variant="p">
                                {vgList?.description}
                            </Typography>
                        </Grid>
                        <Grid>
                            <Typography variant="body1" color="text.secondary">
                                List By {vgList?.owner.name}
                            </Typography>
                        </Grid>
                        <Grid
                            container
                            marginTop={2}
                            columnSpacing={2}
                            rowSpacing={2}
                            justifyContent="center"
                        >
                            {sortedGames().map(game => (
                                <Grid item key={game.id}>
                                    <CardFlip game={game} />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>

                    {user.id === vgList.owner.id && (
                        <Grid
                            container
                            marginTop={2}
                            columnSpacing={2}
                            rowSpacing={2}
                            justifyContent="center"
                        >
                            <Grid item>
                                <Button
                                    variant="outlined"
                                    color="success"
                                    onClick={handleOnClickEdit}
                                >
                                    Edit List
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    variant="outlined"
                                    color="secondary"
                                    onClick={handleOnClickSort}
                                >
                                    {vgList.is_sorted
                                        ? 'Unsort List '
                                        : 'Sort List '}
                                    by rating
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    variant="outlined"
                                    color="error"
                                    onClick={handleOnClickDelete}
                                >
                                    Delete List
                                </Button>
                            </Grid>
                        </Grid>
                    )}
                </ProfileCardSection>
                <ConfirmDeleteListModal title={vgList.title} id={vgList.id} />
            </Grid>
        );
    }
};
