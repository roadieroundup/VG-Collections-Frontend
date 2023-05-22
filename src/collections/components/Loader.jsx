import { Box, CircularProgress} from '@mui/material';
import { motion } from 'framer-motion';
import logo from '../../../public/JZLogo.svg';

const logoVariants = {
    initial: { y: '-100vh' },
    animate: { y: 0 },
};

export const Loader = () => {
    return (
        <Box position="relative" display="inline-flex">
            <CircularProgress size={150} thickness={1} color="error" />
            <Box
                top={0}
                left={0}
                bottom={0}
                right={0}
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <motion.img
                    src={logo}
                    alt="Logo"
                    variants={logoVariants}
                    initial="initial"
                    animate="animate"
                    style={{
                        width: '100px',
                    }}
                />
            </Box>
        </Box>
    );
};
