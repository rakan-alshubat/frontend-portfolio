import { styled } from "@mui/material/styles";
import { Chip, Grid, Typography } from "@mui/material";

export const PersonalStatementWrapper = styled(Grid)(({ theme }) => ({
    margin: theme.spacing(10),
    padding: theme.spacing(2),
    backgroundColor: '#3BBDC6',
    borderRadius: theme.spacing(5)
}));

export const PersonalStatementTypography = styled(Typography)(({ theme }) => ({
    fontSize: theme.spacing(2.5),
    fontWeight: '500',
    marginBottom: theme.spacing(2)
}));

export const TechnicalChips = styled(Chip)(({ theme }) => ({
    backgroundColor: '#F5CC00',
    fontSize: theme.spacing(2.5),
}));