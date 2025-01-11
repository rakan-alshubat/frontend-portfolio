import { AppBar, Grid, IconButton, Typography, Button } from "@mui/material";
import Image from 'next/image'
import { styled } from "@mui/material/styles";

export const MainNavbar = styled(AppBar)(({ theme }) => ({
    height: theme.spacing(8),
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: theme.spacing(1),
    backgroundColor: '#3BBDC6'
}));

export const GridItemWrapper = styled(Grid)(({}) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}));

export const NavbarTitleTypography = styled(Typography)(({ theme }) => ({
    fontSize: theme.spacing(4),
    color: 'white'
}));

export const NavbarBurgerButton = styled(IconButton)(({}) => ({
    color: 'white'
}));

export const ContactModalPhoto = styled(Image)(({ theme }) => ({
    borderRadius: '50%',
}));

export const DrawerItemsButton = styled(Button)(({}) => ({
    textTransform: 'none',
    color: 'black',
}));
