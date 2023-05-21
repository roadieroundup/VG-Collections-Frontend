import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    useMediaQuery,
} from '@mui/material';
import { useCollectionStore } from '../../hooks';
import { AddGameModal } from './AddGameModal';

export const ResultCard = ({ game }) => {
    const match = useMediaQuery('(max-width:414px)');

    const { startOpenAddGameModal, startSetActiveGame } = useCollectionStore();

    const handleOpenAddGameModal = () => {
        startOpenAddGameModal(game.id);
        startSetActiveGame(game);
    };

    return (
        <>
            <Card
                sx={{
                    // height: 280,
                    // width: 150,
                    height: match ? 180 : 280,
                    width: match ? 125 : 150,
                }}
                onClick={() => handleOpenAddGameModal()}
            >
                <CardMedia
                    sx={{
                        width: '100%',
                        // height: '70%',
                        height: match ? '100%' : '70%',
                    }}
                    image={game.image_url}
                    title="game image"
                />

                {match ? null : (
                    <CardContent
                        sx={{
                            padding: '0.5rem',
                        }}
                    >
                        <Typography variant="p">
                            {game.title.substr(0, 31) +
                                (game.title.length > 31 ? '...' : '')}
                        </Typography>
                        <br />
                        <Typography variant="p" color="text.secondary">
                            {game.date}
                        </Typography>
                    </CardContent>
                )}
            </Card>

            <AddGameModal game={game} />
        </>
    );
};
