import { createTheme } from '@mui/material'

const theme = createTheme({
    palette: {
        primary: {
            mode: 'dark',
            main: '#2ebb90',
            contrastText: '#ffffff',
        },
        divider: '#57C8A6',
    },
    typography: {
        fontFamily: [
            'Noto Sans',
            'Arial',
            'sans-serif',
        ].join(','),
        h1: {
            fontSize: '56px',
            fontWeight: '700',
        },
        h2: {
            fontSize: '48px',
            fontWeight: '600',
        },
        h3: {
            fontSize: '48px',
            fontWeight: '700',
        },
        h4: {
            fontSize: '40px',
            fontWeight: '600',
        },
        p: {
            fontSize: '24px',
            fontWeight: '400',
            fontFamily: [
                'Raleway',
                'Arial',
                'sans-serif',
            ].join(','),
        },
        button: {
            fontSize: '20px',
            fontWeight: '600',
        },
    }
});

export default theme