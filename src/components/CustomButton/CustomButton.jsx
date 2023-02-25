import { Button } from "@mui/material";
import styles from './CustomButton.module.css'

const CustomButton = ({ text, isProjectVariant }) => {
    return (
        <Button
            disableElevation
            variant="contained"
            className={isProjectVariant ? styles.projectButton : styles.customButton}
        >
            {text}
        </Button>
    );
}
 
export default CustomButton;