import { Typography } from "@mui/material";
import styles from './CustomParagraph.module.css'

const CustomParagraph = ({ text, component, variant, isProjectVariant }) => {
    return (
        <Typography
            component={component}
            variant={variant}
            className={ isProjectVariant ? styles.projectParagraph : styles.customParagraph}
        >
            {text}
        </Typography>
    );
}

export default CustomParagraph;