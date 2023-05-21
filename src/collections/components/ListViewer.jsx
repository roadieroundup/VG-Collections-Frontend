import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {
    Box,
    Grid,
    IconButton,
    Typography,
    useMediaQuery,
} from '@mui/material';
import { ResultCard } from './ResultCard';

export const ListViewer = ({ name, currentPage, list, setCurrentPage }) => {
    const match = useMediaQuery('(max-width:414px)');
    const match600 = useMediaQuery('(max-width:600px)');
    const match899 = useMediaQuery('(max-width:899px)');


    const filterPage = () => {
        //! this will change if screen size changes
        //ONLY SHOW 1 GAME ON MOBILE

        if (match) {
            return list.slice(currentPage, currentPage + 1);
        }
        if (match899) {
            return list.slice(currentPage, currentPage + 2);
        }

        return list.slice(currentPage, currentPage + 5);
    };

    const prevOnClickPage = () => {
        if (currentPage > 0) {
            if (match) {
                setCurrentPage(currentPage - 1);
                return;
            }
            if (match899) {
                setCurrentPage(currentPage - 2);
                return;
            }
            
            
            setCurrentPage(currentPage - 5);
        }
    };

    const nextOnClickPage = () => {
        if (currentPage + 5 < list.length) {
            if (match) {
                setCurrentPage(currentPage + 1);
                return;
            }
            if (match899) {
                setCurrentPage(currentPage + 2);
                return;
            }
            setCurrentPage(currentPage + 5);
        }
    };

    return (
        <Box>
            <Typography variant="h6">{name}</Typography>
            <Box
                sx={{
                    width: '100%',
                    height: '40vh',
                    borderRadius: '4px',
                    border: '1px solid grey',
                    padding: '1rem',
                    position: 'relative',
                }}
            >
                <Grid container direction="row">
                    {filterPage().map(game => {
                        return (
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                md={2.4}
                                sx={{
                                    // my: 1,
                                    my: match ? 0 : 1,
                                }}
                                key={game.id}
                                display="flex"
                                alignContent="center"
                                justifyContent="center"
                            >
                                <ResultCard game={game} />
                            </Grid>
                        );
                    })}
                </Grid>
                {list.length > 5 && (
                    <Grid
                        container
                        direction="row"
                        sx={{
                            position: 'absolute',
                            bottom: 0,
                            width: '100%',
                            pb: '1rem',
                        }}
                    >
                        <Grid container xs={6} justifyContent="center">
                            <IconButton
                                onClick={prevOnClickPage}
                                disabled={currentPage === 0}
                            >
                                <ArrowBackIosIcon />
                            </IconButton>
                        </Grid>
                        <Grid container xs={6} justifyContent="center">
                            <IconButton
                                onClick={nextOnClickPage}
                                disabled={!!(currentPage + 5 >= list.length)}
                            >
                                <ArrowForwardIosIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                )}
            </Box>
        </Box>
    );
};
