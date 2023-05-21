import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { ListCoverOverlap } from './';

export const ListComponent = ({ games, title, description, games_count }) => {
    return (
        <Grid
            item
            
            mt={2}
            rowSpacing={2}
            direction="column"
        >
            <Grid
                item
                display="flex"
                xs={12}
                className="aqui3"
                justifyContent="center"
                alignItems="center"
                marginRight={9}
            >
                <Box
                    sx={{
                        display: 'flex',
                        width: '32vh',
                        height: '30vh',
                    }}
                    justifyContent="center"
                    alignItems="center"
                >
                    {games.length > 0 ? (
                        games.map((game, index) => (
                            <ListCoverOverlap
                                key={game.id}
                                game={game}
                                index={index}
                                len={games.length}
                            />
                        ))
                    ) : (
                        <Typography
                            variant="h4"
                            sx={{
                                marginRight: -9,
                            }}
                        >
                            NO GAMES
                        </Typography>
                    )}
                </Box>
            </Grid>
            <Grid
                container
                item
                direction="column"
                xs={12}
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={12}>
                    <Typography variant="h6">{title}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h7" color="text.secondary">
                        {games_count} {games_count === 1 ? 'Game' : 'Games'}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="p" color="text.secondary">
                        {description}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};
