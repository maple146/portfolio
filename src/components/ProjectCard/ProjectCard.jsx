import { Card, CardMedia, CardContent, Typography, CardActions } from "@mui/material";
import CustomButton from "../CustomButton/CustomButton";
import styles from "./ProjectCard.module.css"
import Image from 'next/image'
import imgtest from "../../../public/test.jpg"
import CustomTitle from "../CustomTitle/CustomTitle";
import CustomParagraph from "../CustomParagraph/CustomParagraph";

const ProjectCard = () => {
    return (
        <Card className={styles.card}>
            <CardMedia sx={{ position: 'relative' }} className={styles.cardMedia}>
                <Image
                    src={imgtest}
                    fill
                    alt=""
                    style={{ objectFit: 'cover' }}
                />
            </CardMedia>
            <CardContent className={styles.cardContent}>
                <CustomTitle
                    text='Test project'
                    component='h5'
                    variant='h5'
                    fullWidth
                />
                <CustomParagraph
                    text={'Ut scelerisque molestie eros semper molestie. Nam venenatis ultricies dui sed maximus. Pellentesque consequat pellentesque purus quis consectetur. Vestibulum a turpis vestibulum, interdum orci ut, elementum sem.'}
                    component='p'
                    variant='body2'
                    isProjectVariant
                />
                <CustomParagraph
                    text={'Tecnologias usadas: React, Blabla, Bleble'}
                    component='p'
                    variant='body2'
                    isProjectVariant
                />
                <CustomButton
                    text={'Ver sitio web'}
                    isProjectVariant
                />
            </CardContent>
        </Card>
    );
}

export default ProjectCard;