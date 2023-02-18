import { Box, Typography } from "@mui/material";
import styles from './CustomTitle.module.css'
const CustomTitle = ({ fullWidth, text, variant, component }) => {
    return (
        <Box className={fullWidth ? styles.customTitleAlt : styles.customTitle}>
            <Typography variant={variant} component={component} mb={1}>
                {text}
            </Typography>
        </Box>
    );
}
 
export default CustomTitle;