import { Card, CardMedia } from '@mui/material';

export const ListCoverOverlap = ({ game, index, len }) => {
    return (
        <Card
            sx={{
                width: '100%',
                height: '100%',
                marginRight: -9,
                position: 'relative',
                zIndex: len - index,
                boxShadow: '6px 0px 4px 0px rgba(0,0,0,0.75)',
            }}
        >
            <CardMedia
                sx={{ height: '100%', width: '100%' }}
                image={game.image_url}
                title={`Game ${index + 1}`}
            />
        </Card>
    );
};
