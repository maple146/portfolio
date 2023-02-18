import { Box, Container, Typography } from "@mui/material";
import CustomButton from "../CustomButton/CustomButton";
import styles from './Header.module.css'

const Header = () => {
    return (
        <Box className={styles.headerBackground}>
            <Container className={styles.headerContainer}>
                <Box className={styles.headerTextContent}>
                    <Typography variant="h2" component="h1">
                        Luciano Alcaraz
                    </Typography>
                    <Typography variant="h1" component="h2">
                        Desarrollador Front-end
                    </Typography>
                </Box>
                <Box>
                    <CustomButton text={'LinkedIn'}/>
                    <CustomButton text={'Github'}/>
                </Box>
            </Container>
        </Box>
    );
}

export default Header;