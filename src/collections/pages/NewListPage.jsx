import { useMediaQuery } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useCollectionStore, useUiStore } from '../../hooks';
import { ListFormLayout } from '../layout';

//! no results found message
export const NewListPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { startSavingList, startClearGameResults, startClearList } =
        useCollectionStore();

    const { resetCurrentResultsPage, resetCurrentYourListPage } = useUiStore();

    const onSubmitList = async ({ title, description }) => {
        try {
            await startSavingList({ title, description });
            resetCurrentResultsPage();
            resetCurrentYourListPage();
            startClearGameResults();
            startClearList();
            //manage redirect in useCollectionStore hook
        } catch (error) {
            // handle error
            console.log(error);
        }
    };

    const match = useMediaQuery('(max-width:600px)');

    return (
        <ListFormLayout
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            onSubmitList={onSubmitList}
            pageName="New List"
        />
    );
};
