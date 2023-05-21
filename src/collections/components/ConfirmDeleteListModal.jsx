import { Button, Grid, Typography } from '@mui/material';
import { ModalLayout } from '../../auth/layout';
import { useCollectionStore, useUiStore } from '../../hooks';

export const ConfirmDeleteListModal = ({ title, id }) => {
    const { isDeleteListModalOpen, closeDeleteListModal } = useUiStore();

    const { startDeleteVgList } = useCollectionStore();

    return (
        <ModalLayout
            title={`Delete ${title}?`}
            isOpen={isDeleteListModalOpen}
            closeModal={closeDeleteListModal}
        >
            <Grid container direction="column">
                <Grid
                    item
                    xs={12}
                    alignContent="center"
                    justifyContent="center"
                >
                    <Typography textAlign="center">
                        Are you sure about that?
                    </Typography>
                </Grid>

                <Grid
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                    item
                    xs={12}
                    sx={{ mt: 2 }}
                >
                    <Button
                        variant="outlined"
                        color="success"
                        onClick={closeDeleteListModal}
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="outlined"
                        color="error"
                        onClick={() => startDeleteVgList(id)}
                    >
                        Delete
                    </Button>
                </Grid>
            </Grid>
        </ModalLayout>
    );
};
