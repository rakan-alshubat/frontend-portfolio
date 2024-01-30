import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import TitleBackground from 'src/media/TitleBackground.jpg'

export const WelcomeTextMainBox = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(10),
    marginLeft: '5%',
    width: '90%',
    padding: theme.spacing(5),
    backgroundImage: `url(${TitleBackground.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
}));

export const WelcomeTextHeading = styled(Typography)(({ theme }) => ({
    textAlign: 'center',
    fontSize: theme.spacing(8),
    color: 'white'
}));

export const WelcomeTextContent = styled(Typography)(({ theme }) => ({
    textAlign: 'center',
    fontSize: theme.spacing(4),
    color: 'white'
}));