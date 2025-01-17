import { Grid, Typography, Card } from "@mui/material";
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
    paddingLeft: theme.spacing(3)
}));
export const PlayersAccordionWrapper = styled(Grid)(({ theme }) => ({
    marginTop: theme.spacing(4),
    width: '90%',
    padding: theme.spacing(5),
    backgroundColor: 'lightgray'
}));
export const PlayersHeader = styled(Typography)(({ theme }) => ({
    fontSize: theme.spacing(6),
}));
export const PlayerAccordionMainTitle = styled(Typography)(({ theme }) => ({
    width: '33%',
    fontSize: theme.spacing(3),
}));

export const PlayerAccordionSecondaryTitle = styled(Typography)(({ theme }) => ({
    color: 'GrayText',
    fontSize: theme.spacing(3),
}));
export const PlayersListMainGrid = styled(Grid)(({ theme }) => ({

}));
export const PlayersRankedQueens = styled(Grid)(({ theme }) => ({
    fontSize: theme.spacing(2)
}));
export const Playersadditional = styled(Grid)(({ theme }) => ({
    paddingTop: theme.spacing(3)
}));
export const titleGrid = styled(Grid)(({ theme }) => ({

}));