import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const BarChartMainGrid = styled(Grid)(({ theme }) => ({
    marginLeft: '5%',
    width: '90%',
}));
export const BarChartTop3Grid = styled(Grid)(({ theme }) => ({
    marginLeft: '5%',
    width: '90%',
    direction: 'column',
    alignItems:'center',
    justifyContent:'center',
    marginBottom: theme.spacing(10),
}));
export const Top3Text = styled(Typography)(({ theme }) => ({
    display: 'flex',
    alignItems:'center',
    justifyContent:'center',
    fontSize: theme.spacing(5)
}));
export const BarChartBottomPlayersGrid = styled(Grid)(({ theme }) => ({
    direction: 'column',
    alignItems:'center',
    justifyContent:'center',
}));