import { createTheme } from '@mui/material';

export const theme = createTheme({
    typography: {
        fontFamily: ['Jost', 'sans - serif'].join(','),
    },
    palette: {
        mode: 'dark',
        primary: {
            main: '#ae67fa',
        },
        secondary: {
            main: '#f49867',
        },
        elevation: {
            0: 'hsla(0, 0%, 7%)',
            1: 'hsla(0, 0%, 12%)',
            2: 'hsla(0, 0%, 19%)',
            3: 'hsla(0, 0%, 20%)',
            4: 'hsla(0, 0%, 21%)',
            6: 'hsla(0, 0%, 23%)',
            8: 'hsla(0, 0%, 24%)',
            12: 'hsla(0, 0%, 26%)',
            16: 'hsla(0, 0%, 27%)',
            24: 'hsla(0, 0%, 28%)',
        },
    },
});
