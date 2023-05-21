import { Box } from '@mui/material';
import React, { useState, useEffect, useRef } from 'react';
import { useUiStore } from '../../hooks';

export const Carousel = React.memo(() => {
    const [currentImage, setCurrentImage] = useState(0);
    const timerRef = useRef(null);

    
    const { homePageGames, loadHomePageGames, homeBgImage, setHomeBgImage } = useUiStore();
    
    useEffect(() => {
        setHomeBgImage(homePageGames[currentImage].bgImage);
        timerRef.current = setTimeout(() => {
            setCurrentImage(currentImage => (currentImage + 1) % homePageGames.length);
        }, 9000);
        return () => {
            clearTimeout(timerRef.current);
        };
    }, [currentImage, homePageGames, setHomeBgImage]);

    const handleImageHover = index => {
        setCurrentImage(index);
        clearTimeout(timerRef.current);
    };

    return (
        <Box
            sx={{
                position: 'inherit',
                display: 'flex',
            }}
        >
            <section className='carousel'>
                {homePageGames.map((game, index) => (
                    <img
                        key={game.id}
                        onMouseEnter={() => handleImageHover(index)}
                        className={index === currentImage ? 'hover' : ''}
                        src={game.cover}
                        alt={game.name}
                    />
                ))}
            </section>
        </Box>
    );
});


