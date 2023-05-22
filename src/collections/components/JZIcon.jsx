import { IconButton } from '@mui/material';
import logo from '../../../public/JZLogo.svg';

export const JZIcon = props => {
    return (
        <IconButton {...props} disabled>
            <img src={logo} alt="JZIcon" width={50} />
        </IconButton>
    );
};
