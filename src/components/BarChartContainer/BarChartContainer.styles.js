import { Accordion, Grid, Typography} from "@mui/material";
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
    width: '90%',
    padding: theme.spacing(5),
    paddingTop: theme.spacing(2),
    backgroundColor: 'lightgray'
}));
export const InfoAccordionWrapper = styled(Grid)(({ theme }) => ({
    width: '90%',
    marginTop: theme.spacing(20),
    backgroundColor: 'lightgray'
}));
export const PlayersHeader = styled(Typography)(({ theme }) => ({
    fontSize: theme.spacing(6),
    display: 'flex',
    alignItems:'center',
    justifyContent:'center',
    width: '90%',
    [theme.breakpoints.down('sm')]: {
        fontSize: theme.spacing(4),
    },
}));
export const PlayerAccordionMainTitle = styled(Typography)(({ theme }) => ({
    width: '33%',
    fontSize: theme.spacing(3),
}));

export const PlayerAccordionSecondaryTitle = styled(Typography)(({ theme }) => ({
    color: 'GrayText',
    textAlign: 'center',
}));
export const PlayersListMainGrid = styled(Grid)(({ theme }) => ({

}));
export const PlayersRankedQueens = styled(Grid)(({ theme }) => ({
    fontSize: theme.spacing(2.3),
    [theme.breakpoints.down('sm')]: {
        fontSize: theme.spacing(1.7),
    },
}));
export const Playersadditional = styled(Grid)(({ theme }) => ({
    paddingTop: theme.spacing(3)
}));
export const TitleGrid = styled(Grid)(({ theme }) => ({
    width: '50%',
    display: 'flex',
    alignItems:'center',
    justifyContent:'center',
    [theme.breakpoints.down('sm')]: {
        transform: 'rotate(15deg)',
    },
}));
export const NamesTop3Grid = styled(Grid)(({ theme }) => ({
    marginLeft: '5%',
    width: '68%',
    direction: 'column',
    alignItems:'center',
    justifyContent:'center',
    textAlign: 'center',
    fontSize: theme.spacing(5),
    marginBottom: theme.spacing(10),
    [theme.breakpoints.down('sm')]: {
        fontSize: theme.spacing(2),
        width: '90%',
        marginTop: theme.spacing(-5),
    },
}));
export const GameInfoGrid = styled(Grid)(({ theme }) => ({
    width: '90%',
}));
export const GameInfoItems = styled(Grid)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    fontSize: theme.spacing(3.5),
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
        fontSize: theme.spacing(2),
    },
}));
export const PlayerWinnersAccordion = styled(Accordion)(({ theme }) => ({
    marginTop: '10px',
    backgroundColor: '#b8fdfc',
    width: '60%',
    [theme.breakpoints.down('sm')]: {
        width: '100%',
    },
}));
export const PlayerInfoGrid = styled(Grid)(({ theme }) => ({
    width: '90%',
}));
export const PlayerInfoItems = styled(Grid)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    fontSize: theme.spacing(3.5),
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
        fontSize: theme.spacing(1.1),
    },
}));
