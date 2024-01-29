import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ContentListMainBox = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(10),
    marginLeft: '5%',
    width: '90%',
    padding: theme.spacing(5),
    border: '1px black solid',
    borderRadius: theme.spacing(3),
    boxShadow: '10px 10px 10px grey',
}));

export const ContentListHeading = styled(Typography)(({ theme }) => ({
    textAlign: 'center',
    fontSize: theme.spacing(8),
}));

export const ContentListSubHeading = styled(Typography)(({ theme }) => ({
    fontSize: theme.spacing(6),
}));

export const ContentListTypography = styled(Typography)(({ theme }) => ({
    textIndent: theme.spacing(10),
    fontSize: theme.spacing(4),
    paddingBottom: theme.spacing(4),
}));
