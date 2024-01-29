import { Card, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ExperienceAccordionWrapper = styled(Card)(({ theme }) => ({
    margin: theme.spacing(10),
    padding: theme.spacing(5),
    backgroundColor: 'lightgray'
}));

export const ExperiencenHeader = styled(Typography)(({ theme }) => ({
    fontSize: theme.spacing(6),
}));

export const ExperiencenHeaderSecondary = styled(Typography)(({ theme }) => ({
    fontSize: theme.spacing(3),
    marginBottom: theme.spacing(3),
    color: 'GrayText'
}));

export const ExperienceAccordionMainTitle = styled(Typography)(({ theme }) => ({
    width: '33%',
    fontSize: theme.spacing(3),
}));

export const ExperienceAccordionSecondaryTitle = styled(Typography)(({ theme }) => ({
    color: 'GrayText',
    fontSize: theme.spacing(3),
}));