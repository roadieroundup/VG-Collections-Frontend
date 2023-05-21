import { Button, Grid, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useCollectionStore, useUiStore } from '../../hooks';

export const SearchGame = () => {
    const { startLoadingGameResults } =
        useCollectionStore();

    const { resetCurrentResultsPage } = useUiStore();

    const {
        register: searchRegister,
        handleSubmit: handleSearchSubmit,
        formState: { errors: searchErrors },
        watch: searchWatch,
    } = useForm();

    const onSubmitSearch = ({ game_title }) => {
        resetCurrentResultsPage();
        startLoadingGameResults({ game_title });
    };

    return (
        <Grid item direction="row" sx={{ my: 1.5, display: 'flex' }} xs={12}>
            <TextField
                {...searchRegister('game_title', {
                    required: 'Required',
                })}
                name="game_title"
                label="Search games"
                type="text"
                fullWidth
                helperText={searchErrors.game_title?.message} // show error message from nested field validation
                error={searchErrors.game_title ? true : false} // show error state from nested field validation
                sx={{ mr: 1 }}
            />
            <Button
                variant="outlined"
                color="primary"
                type="button" // change to type="button" to avoid triggering form submission
                size="medium"
                sx={{ height: '55px' }}
                onClick={handleSearchSubmit(onSubmitSearch)}
            >
                Search
            </Button>
        </Grid>
    );
};
