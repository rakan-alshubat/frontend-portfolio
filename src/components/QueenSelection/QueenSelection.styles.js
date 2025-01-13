import { Grid, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const QueenSelectionMainGrid = styled(Grid)(({ theme }) => ({
    marginLeft: '15%',
    marginTop: '5%',
    width: '70%',
}));
export const QueenSelectionNumbers = styled(Grid)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: theme.spacing(3),
}));
export const QueenSelectionDropDown = styled(Grid)(({ theme }) => ({
    paddingBottom: theme.spacing(3),
}));
export const QueenSelectionTitle = styled(Typography)(({ theme }) => ({
    marginLeft: '15%',
    marginTop: '2%',
    width: '70%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: theme.spacing(8)
}));
export const QueenSelectionSubTitle = styled(Typography)(({ theme }) => ({
    marginLeft: '15%',
    width: '70%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: theme.spacing(4)
}));
export const PlayerInfoMainGrid = styled(Grid)(({ theme }) => ({
    marginLeft: '15%',
    marginTop: '5%',
    width: '70%',
}));
export const PlayerInfoSubmissionGrid = styled(Grid)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    paddingBottom: theme.spacing(3),
}));
export const PlayerInfoSubmissionText = styled(Typography)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));
export const RankingSubmitButton = styled(Button)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'yellow',
    borderWidth: theme.spacing(1)
}));