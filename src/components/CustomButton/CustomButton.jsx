import { Button } from "@mui/material";
import styles from './CustomButton.module.css'

const CustomButton = ({ text }) => {
    return (
        <Button
            variant="contained"
            disableElevation
            className={styles.customButton}
        >
            {text}
        </Button>
    );
}
 
export default CustomButton;