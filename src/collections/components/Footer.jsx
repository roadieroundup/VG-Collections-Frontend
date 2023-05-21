import { Box, Grid, IconButton, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { JZIcon } from './JZIcon';

export const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
             
                width: '100%',
            }}
        >
            <Box
                sx={{
                    minHeight: '9vh',
                    bottom: 0,
                    width: '100%',
                    mt: 'auto',
                    backgroundColor: 'elevation.1',
                }}
            >
                <Grid
                    container
                    direction={'row'}
                    spacing={0}
                    sx={{
                        p: 1,
                    }}
                    alignItems={'center'}
                >
                    <Grid
                        container
                        item
                        direction="row"
                        xs={3}
                        alignContent="center"
                    >
                        <Grid item>
                            <JZIcon />
                        </Grid>
                        <Grid item sx={{ mt: 1 }}>
                            <Typography>Jostin Aguilera</Typography>
                            <Typography>
                                © {new Date().getFullYear()}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        container
                        xs={9}
                        direction="row"
                        justifyContent="flex-end"
                        alignItems="center"
                    >
                        <IconButton
                            size="large"
                            onClick={() => {
                                window.open('https://github.com/roadieroundup');
                            }}
                        >
                            <GitHubIcon fontSize="large" />
                        </IconButton>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};
