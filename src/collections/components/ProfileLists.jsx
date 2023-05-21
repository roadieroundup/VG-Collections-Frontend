import {
    Box,
    Button,
    Divider,
    Grid,
    Typography,
    useMediaQuery,
} from '@mui/material';
import { ProfileCardSection } from '../layout';
import { ListComponent } from './ListComponent';
import { useNavigate} from 'react-router-dom';
import { useAuthStore, useCollectionStore } from '../../hooks';


export const ProfileLists = () => {
    const matches = useMediaQuery('(max-width:899px)');
    const navigate = useNavigate();

    const {
        user: { id: authID },
    } = useAuthStore();

    const {
        profile: { lists, id: profileID },
    } = useCollectionStore();

    return (
        <ProfileCardSection>
            <Typography variant="h4">Lists</Typography>

            <Divider
                sx={{
                    height: 2,
                    background: theme =>
                        `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    width: '25%',
                }}
            />

            {lists?.length === 0 ? (
                <Typography variant="h6">No lists yet</Typography>
            ) : (
                <Grid container className="AQUIII">
                    {lists?.map(list => (
                        <Grid
                            item
                            xs={12}
                            sm={12}
                            md={12}
                            lg={4}
                            xl={3}
                            key={list.id}
                            className="AQUII2"
                            rowSpacing={2}
                            onClick={() => navigate(`/list/${list.id}`)}
                        >
                            <ListComponent {...list} />
                        </Grid>
                    ))}
                </Grid>
            )}

            {matches ? null : (
                <>
                    {authID === profileID && (
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                marginTop: 3,
                            }}
                        >
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => navigate('/newlist')}
                            >
                                New List
                            </Button>
                        </Box>
                    )}
                </>
            )}
        </ProfileCardSection>
    );
};
