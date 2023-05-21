import {
    Box,
    Button,
    Divider,
    Grid,
    TextField,
    Typography,
    useMediaQuery,
} from '@mui/material';
import { useCollectionStore, useUiStore } from '../../hooks';
import { ListViewer, SearchGame } from '../components';
import { ProfileCardSection } from '../layout';

//! no results found message
export const ListFormLayout = ({
    register,
    handleSubmit,
    errors,
    onSubmitList,
    pageName,
    title,
    description,
    handleCancelButton,
}) => {
    const { gameResults, tempList } = useCollectionStore();

    const {
        currentResultsPage,
        currentYourListPage,
        setCurrentResultsPage,
        setCurrentYourListPage,
    } = useUiStore();

    const match = useMediaQuery('(max-width:600px)');

    return (
        <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            rowSpacing={2}
            sx={{
                p: 1.5,
                width: '100%',

                minHeight: '100vh',
            }}
        >
            <ProfileCardSection>
                <Typography variant="h4">{pageName}</Typography>

                <Divider
                    sx={{
                        height: 2,
                        background: theme =>
                            `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        width: '25%',
                    }}
                />

                <form onSubmit={handleSubmit(onSubmitList)}>
                    <Grid container sx={{ my: 2 }} columnSpacing={1}>
                        <Grid
                            item
                            direction="column"
                            xs={12}
                            sm={6}
                            paddingRight={{
                                xs: 0,
                            }}
                            sx={
                                {
                                    // pr: 2,
                                }
                            }
                        >
                            <Grid item xs={12}>
                                <TextField
                                    {...register('title', {
                                        required: 'Required',
                                    })}
                                    name="title"
                                    label="Title"
                                    type="text"
                                    fullWidth
                                    helperText={errors.title?.message}
                                    error={errors.title ? true : false}
                                    defaultValue={title}
                                />
                            </Grid>
                            {match ? null : <SearchGame />}
                        </Grid>

                        <Grid
                            item
                            xs={12}
                            sm={6}
                            marginTop={{
                                xs: 2,
                                sm: 0,
                            }}
                        >
                            <TextField
                                {...register('description')}
                                name="description"
                                label="Description"
                                type="text"
                                multiline
                                rows={4}
                                fullWidth
                                helperText={errors.description?.message}
                                error={errors.description ? true : false}
                                defaultValue={description}
                            />
                        </Grid>

                        {match ? <SearchGame /> : null}

                        <Grid
                            item
                            xs={12}
                            lg={6}
                            paddingRight={{
                                xs: 0,
                            }}
                            sx={
                                {
                                    // pr: 2,
                                }
                            }
                        >
                            <ListViewer
                                name={'Results'}
                                currentPage={currentResultsPage}
                                list={gameResults}
                                setCurrentPage={setCurrentResultsPage}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            lg={6}
                            paddingRight={{
                                xs: 0,
                            }}
                            marginTop={{
                                xs: 2,
                                lg: 0,
                            }}
                            sx={
                                {
                                    // pr: 2,
                                }
                            }
                        >
                            <ListViewer
                                name={'Your List'}
                                currentPage={currentYourListPage}
                                list={tempList}
                                setCurrentPage={setCurrentYourListPage}
                            />
                        </Grid>
                    </Grid>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            marginTop: 3,
                            '& > *:not(:first-of-type)': {
                                marginLeft: '10px',
                            },
                        }}
                    >
                        {pageName === 'Edit List' && (
                            <Button
                                variant="contained"
                                color="error"
                                onClick={handleCancelButton}
                            >
                                Cancel
                            </Button>
                        )}

                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                        >
                            Save List
                        </Button>
                    </Box>
                </form>
            </ProfileCardSection>
        </Grid>
    );
};
