import { Controller, useForm } from 'react-hook-form';
import { ModalLayout } from '../../auth/layout';
import { useCollectionStore } from '../../hooks';
import { Button, Grid, Rating, TextField, Typography } from '@mui/material';

export const AddGameModal = ({ game }) => {
    const {
        isAddGameModalOpen,
        startCloseAddGameModal,
        startClearActiveGame,
        startAddGame,
        startEditGame,
        startRemoveGame,
        tempList,
    } = useCollectionStore();

    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
        watch,
        reset,
    } = useForm();

    const isGameOnTempList = () => {
        return tempList.some(tempGame => tempGame.id === game.id);
    };

    const onSubmit = ({ review, rating }) => {
        const new_game = { ...game, review, rating };

        if (isGameOnTempList()) {
            startEditGame(game.id, new_game);
            startClearActiveGame();
            startCloseAddGameModal();
            return;
        } else {
            startCloseAddGameModal();
            startAddGame(new_game);
            startClearActiveGame();
            return;
        }

    };

    const onRemoveGame = () => {
        startRemoveGame(game.id);
        startCloseAddGameModal();
        startClearActiveGame();
    };

    const onCloseModal = () => {
        startCloseAddGameModal();
        startClearActiveGame();
    };

    return (
        <ModalLayout
            title={game.title
            }
            isOpen={isAddGameModalOpen === game.id}
            closeModal={onCloseModal}
        >
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
                    <Controller
                        name="rating"
                        control={control}
                        defaultValue={game.rating ? game.rating : 2.5}
                        render={({ field }) => (
                            <Rating
                                name="half-rating"
                                precision={0.5}
                                value={field.value}
                                onChange={(_, value) => field.onChange(value)}
                            />
                        )}
                    />
                </Grid>
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
                    <TextField
                        {...register('review')}
                        name="review"
                        label="Your Review"
                        type="text"
                        fullWidth
                        defaultValue={game.review ? game.review : ''}
                        
                        sx={{ mr: 1 }}
                    />
                </Grid>

                <Grid
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                    item
                    xs={12}
                    sx={{
                        my: 1,
                    }}
                >
                    {isGameOnTempList() ? (
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={onRemoveGame}
                        >
                            Remove
                        </Button>
                    ) : null}
                    <Button
                        variant="contained"
                        color="secondary"
                        sx={{
                            color: 'white',
                        }}
                        fullWidth={!isGameOnTempList()}
                        onClick={handleSubmit(onSubmit)}
                    >
                        Save
                    </Button>
                </Grid>
            </Grid>
        </ModalLayout>
    );
};
