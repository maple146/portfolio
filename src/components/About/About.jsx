import { Box, Container, Grid, Typography } from "@mui/material";
import CustomParagraph from "../CustomParagraph/CustomParagraph";
import CustomTitle from "../CustomTitle/CustomTitle";
import styles from './About.module.css'

const About = () => {
    return (
        <Box className={styles.about}>
            <Container>
                <Grid
                    container
                    justifyContent='center'
                    spacing={4}
                >
                    <Grid item xs={12} display='flex' justifyContent='center'>
                        <CustomTitle
                            text='Sobre mi'
                            variant='h3'
                            component='h3'
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <CustomTitle
                            fullWidth
                            text='Quien soy?'
                            variant='h4'
                            component='h4'
                        />
                        <CustomParagraph
                            text='Lorem ipsum dolor sit amet, consectetur.'
                        />
                        <CustomParagraph
                            text='Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Ut diam quam nulla porttitor massa id. Pellentesque habitant morbi tristique senectus. Fames ac turpis egestas integer eget aliquet. Rhoncus urna neque viverra justo.'
                        />
                        <CustomParagraph
                            text='Enim facilisis gravida neque convallis. Vitae suscipit tellus mauris a diam maecenas sed. Vitae et leo duis ut diam quam nulla. Leo vel fringilla est ullamcorper eget nulla facilisi. Urna id volutpat lacus laoreet non curabitur gravida arcu. Urna condimentum mattis pellentesque id nibh tortor.'
                        />
                        <CustomParagraph
                            text='Ante metus dictum at tempor commodo ullamcorper a lacus. Sed tempus urna et pharetra pharetra massa massa. Vitae tortor condimentum lacinia quis. Porta lorem mollis aliquam ut porttitor. Et netus et malesuada fames.'
                        />
                    </Grid>
                    <Grid container item xs={6}>
                        <Grid item xs={12}>
                            <CustomTitle
                                fullWidth
                                text='A que me dedico?'
                                variant='h4'
                                component='h4'
                            />
                            <CustomParagraph
                                text='Ante metus dictum at tempor commodo ullamcorper a lacus. Sed tempus urna et pharetra pharetra massa massa. Vitae tortor condimentum lacinia quis. Porta lorem mollis aliquam ut porttitor. Et netus et malesuada fames.'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <CustomTitle
                                fullWidth
                                text='Que herramientas uso?'
                                variant='h4'
                                component='h4'
                            />
                            <CustomParagraph
                                text='Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Ut diam quam nulla porttitor massa id. Pellentesque habitant morbi tristique senectus. Fames ac turpis egestas integer eget aliquet. Rhoncus urna neque viverra justo.'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <CustomTitle
                                fullWidth
                                text='Certificaciones'
                                variant='h4'
                                component='h4'
                            />
                            <CustomParagraph
                                text='Lorem ipsum dolor sit amet, consectetur adipis'
                            />
                            <CustomParagraph
                                text='Lorem ipsum dolor sit amet, consectetur adipis'
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default About;