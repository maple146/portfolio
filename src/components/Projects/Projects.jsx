import { Box, Container, Grid } from "@mui/material";
import ProjectCard from "../ProjectCard/ProjectCard";
import CustomTitle from "../CustomTitle/CustomTitle";
import styles from './Projects.module.css'

const Projects = () => {
    return (
        <Box  className={styles.projects}>
            <Container>
                <Grid
                    container
                    justifyContent='center'
                    spacing={4}
                >
                    <Grid item xs={12} display='flex' justifyContent='center'>
                        <CustomTitle
                            text='Proyectos'
                            variant='h3'
                            component='h3'
                        />
                    </Grid>
                    <Grid container item xs={12}>
                      <ProjectCard />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
 
export default Projects;