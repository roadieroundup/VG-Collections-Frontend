import {
    Box,
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    Rating,
    Typography,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';

const flipVariants = {
    initial: {
        transform: 'rotateY(0deg)',
    },
    flip: {
        transform: 'rotateY(180deg)',
    },
    transition: {
        duration: 0.5, // adjust duration as needed
    },
};

const frontStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
};

const backStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    transform: 'rotateY(180deg)',
};

export const CardFlip = ({ game }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <Box
            sx={{
                width: '35vh',
                height: '50vh',
                perspective: '1000px',
                position: 'relative',
                transformStyle: 'preserve-3d',
            }}
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
            whileHover={{ scale: 1.05 }}
            component={motion.div}
            variants={flipVariants}
            initial="initial"
            animate={isFlipped ? 'flip' : 'initial'}
        >
            <Card
                sx={{
                    width: '100%',
                    height: '100%',
                }}
                component={motion.div}
                style={frontStyles}
            >
                <CardMedia
                    sx={{ height: '100%', width: '100%' }}
                    image={game.image_url}
                />
            </Card>
            <Card
                sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
                component={motion.div}
                style={backStyles}
            >
                <CardHeader
                    sx={{
                        textAlign: 'center',
                        marginTop: -10,
                    }}
                    titleTypographyProps={{ variant: 'h7', marginTop: -1 }}
                    subheaderTypographyProps={{
                        fontSize: '0.8rem',
                        marginBottom: -2,
                    }}
                    title={game.title}
                    subheader={game.year}
                />
                <CardContent
                    sx={{
                        textAlign: 'center',
                    }}
                    style={{ marginBottom: -4 }}
                >
                    <Typography fontSize="0.9rem">
                        {game.description}
                    </Typography>

                    {game.review && (
                        <Typography fontSize="0.9rem" my={1} fontStyle="italic">
                            "{game.review}"
                        </Typography>
                    )}

                    <Rating
                        name="rating"
                        defaultValue={game.rating}
                        precision={0.5}
                        readOnly
                    />
                </CardContent>
            </Card>
        </Box>
    );
};
