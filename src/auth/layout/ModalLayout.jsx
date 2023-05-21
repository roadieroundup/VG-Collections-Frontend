import { Box, Modal, Typography } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';

export const ModalLayout = ({ children, title = '', isOpen, closeModal }) => {
    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <Modal
                        open={isOpen}
                        onClose={closeModal}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        component={motion.div}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Box
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: 350,

                                bgcolor: 'elevation.4',
                                borderRadius: 3,
                                boxShadow: 24,
                                p: 4,
                            }}
                        >
                            <Typography
                                variant="h5"
                                sx={{ mb: 1 }}
                                className="gradient-text"
                                textAlign="center"
                            >
                                {title}
                            </Typography>
                            {children}
                        </Box>
                    </Modal>
                )}
            </AnimatePresence>
        </>
    );
};
