import { IconButton } from '@mui/material';

export const JZIcon = props => {
    return (
        <IconButton {...props} disabled>
            <img src="/JZLogo.svg" alt="JZIcon" width={50} />
        </IconButton>
    );
};
