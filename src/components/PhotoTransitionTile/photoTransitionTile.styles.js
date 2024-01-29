import { styled } from "@mui/material/styles";
import Image from 'next/image'
import { Grid, Typography } from "@mui/material";

export const ImageTransitionGrid = styled(Grid)(({ theme }) => ({
    width: '100%',
    height: theme.spacing(100),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

export const ImageElevated = styled(Image)(({ theme }) => ({
    boxShadow: '10px 10px 10px grey'
}));

export const ImageTransitionPhotoBox = styled(Grid)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

export const ImageTransitionTypographyGrid = styled(Grid)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(10),
}));

export const ImageTransitionTypography = styled(Typography)(({ theme }) => ({
    fontSize: theme.spacing(4),
    textAlign: 'center'
}));