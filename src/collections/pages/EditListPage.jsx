import { Grid, useMediaQuery } from '@mui/material';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { useCollectionStore, useUiStore } from '../../hooks';
import { Loader, NotFound } from '../components';
import { ListFormLayout } from '../layout';

export const EditListPage = () => {
    const { id } = useParams();

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const {
        tempList,
        vgList,
        startClearGameResults,
        startClearList,
        startLoadingEditPage,
        startEditVgList,
    } = useCollectionStore();

    const { ok, resetCurrentResultsPage, resetCurrentYourListPage, message } =
        useUiStore();

    const onSubmitList = async ({ title, description }) => {
        try {
            await startEditVgList({ title, description, list: tempList, id });
            resetCurrentResultsPage();
            resetCurrentYourListPage();
            startClearGameResults();
            startClearList();
        } catch (error) {
            // handle error
            console.log(error);
        }
    };

    const handleCancelButton = () => {
        resetCurrentResultsPage();
        resetCurrentYourListPage();
        startClearGameResults();
        startClearList();
        navigate(`/list/${id}`);
    };

    const match = useMediaQuery('(max-width:600px)');

    useEffect(() => {
        startLoadingEditPage(id);
    }, []);

    if (message === 'List not found') {
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
            <ListFormLayout
                register={register}
                handleSubmit={handleSubmit}
                errors={errors}
                onSubmitList={onSubmitList}
                pageName="Edit List"
                title={vgList.title}
                description={vgList.description}
                handleCancelButton={handleCancelButton}
            />
        );
    }
};
