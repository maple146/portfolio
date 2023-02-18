import { Typography } from "@mui/material";

const CustomParagraph = ({ text }) => {
    return (
        <Typography variant='p' component='p' mx={1} my={2}>
            {text}
        </Typography>
    );
}
 
export default CustomParagraph;