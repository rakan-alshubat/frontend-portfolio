import { Button, Card, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const NavbarContactCard = styled(Card)(({ theme }) => ({
    width: '40%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
        width: '55%',
    },
}));

export const ContactCardGridContainer = styled(Grid)(({ theme }) => ({
    width: '100%',
    padding: theme.spacing(5)
}));

export const ContactCardList = styled(Grid)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

export const ContactCardTypography = styled(Typography)(({ theme }) => ({
    width: '100%',
    textAlign: 'center',
    marginTop: theme.spacing(2)
}));

export const ContactCardLinks = styled(Button)(({ theme }) => ({
    width: '100%',
    padding: theme.spacing(0),
    textTransform: 'none'
}));
