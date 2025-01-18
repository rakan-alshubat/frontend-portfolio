import { BarChart } from '@mui/x-charts/BarChart';
import {playerData} from '../../files/playerData'
import calculatePoints from '@/helpers/calculatePoints'
import { Accordion, AccordionSummary, AccordionDetails, Grid } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import gameData from '../../files/gameData'
import {
    BarChartTop3Grid, 
    BarChartMainGrid,
    BarChartBottomPlayersGrid,
    Top3Text,
    PlayersAccordionWrapper,
    PlayersHeader,
    PlayerAccordionMainTitle,
    PlayerAccordionSecondaryTitle,
    PlayersListMainGrid,
    PlayersRankedQueens,
    Playersadditional,
    TitleGrid,
    NamesTop3Grid
 } from "./BarChartContainer.styles";

export default function BarChartContainer() {

      var hasItStarted = gameData.winnersList.length > 0

    const colors = [
        '#C0C0C0',
        '#FFD700',
        '#CD7F32',
    ];

    var players = []

    const colorOfText = (playerWinner, actualWinner) => {
        if(playerWinner === actualWinner){
            return 'green'
        }else{
            return 'red'
        }
    }


    playerData.map((player) => {
        const name = player.playerName;
        const points = calculatePoints(player, gameData.eleminationsList, gameData.winnersList)
        players.push({
            "playerName": name,
            "totalPoints": points
        })
    })

    players.sort(function(a, b) {
        if(a.totalPoints < b.totalPoints) return 1
        if(a.totalPoints > b.totalPoints) return -1
        return 0
    })

  
    var comboList = []
    var count = 0
    players.map((player) => {
        if(comboList.length === 0){
            comboList.push({
                "playerName": player.playerName,
                "totalPoints": player.totalPoints
            })
        }else if(comboList.length < 4){
            var shouldAdd = false
            comboList.map((ply) => {
                if(player.totalPoints === ply.totalPoints){
                    ply.playerName = ply.playerName + ', ' + player.playerName
                    shouldAdd = false;
                    count++
                }else{
                    shouldAdd = true;
                }
            })
            if(shouldAdd){
                comboList.push({
                    "playerName": player.playerName,
                    "totalPoints": player.totalPoints
                })
            }
        }
    })

    var top3 = comboList.slice(0,3)
    var temp = top3[0]
    top3[0] = top3[1]
    top3[1] = temp

    var bottomPlayers = players.slice(3+count, players.length)
    var bottomPlayersChartHeight = 50* players.length

    return(
        <BarChartMainGrid container>
            {hasItStarted &&
            <>
            <BarChartTop3Grid item sm={8} xs={12}>
                <Top3Text>
                    Top 3 Queens
                </Top3Text>
                <BarChart
                    dataset={top3}
                    xAxis={[{ 
                        scaleType: 'band', 
                        dataKey: 'playerName',
                        tickFontSize: 26,
                        colorMap:
                        {
                            type: 'ordinal',
                            colors
                        }
                    }]}
                    yAxis={[{
                        label: 'RuPeter Badges',
                        disableLine: true,
                        disableTicks: true,
                        labelFontSize: 34
                    }]}
                    series={[{ dataKey: 'totalPoints' }]}
                    barLabel="value"
                    borderRadius={19}
                    height={500}
                    sx={{
                        //change left yAxis label styles
                    "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel":{
                            display: 'none'
                    },
                    // change all labels fontFamily shown on both xAxis and yAxis
                    "& .MuiChartsAxis-tickContainer .MuiChartsAxis-tickLabel":{
                        },
                        // change bottom label styles
                        "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel":{
                            display: 'none'
                        },
                        // bottomAxis Line Styles
                        "& .MuiChartsAxis-bottom .MuiChartsAxis-line":{
                        stroke:"#0000FF",
                        strokeWidth:0.4
                        },
                        // leftAxis Line Styles
                        "& .MuiChartsAxis-left .MuiChartsAxis-line":{
                        stroke:"#00000FF",
                        strokeWidth:0.4
                        },
                    }}
                />
            </BarChartTop3Grid>
            <NamesTop3Grid container>
                <TitleGrid item xs={4}>
                    {top3[0].playerName}
                </TitleGrid>
                <TitleGrid item xs={3}>
                    {top3[1].playerName}
                </TitleGrid>
                <TitleGrid item xs={4}>
                    {top3[2].playerName}
                </TitleGrid>
            </NamesTop3Grid>
            <BarChartBottomPlayersGrid item sm={8} xs={12}>
                <Top3Text>
                    Bottom Queens
                </Top3Text>
                <BarChart
                        dataset={bottomPlayers}
                        layout="horizontal"
                        yAxis={[{
                            scaleType: 'band', 
                            dataKey: 'playerName',
                            tickLabelStyle: {
                                angle: -50,
                                fontSize: 15,
                            },
                        }]}
                        series={[{ dataKey: 'totalPoints' }]}
                        barLabel={(v)=> `${v.value}`}
                        height={bottomPlayersChartHeight}
                        sx={{
                            //change left yAxis label styles
                            "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel":{
                                
                            },
                            // change all labels fontFamily shown on both xAxis and yAxis
                            "& .MuiChartsAxis-tickContainer .MuiChartsAxis-tickLabel":{
                                fontFamily: '',
                            },
                            // change bottom label styles
                            "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel":{
                                display: 'none'
                            },
                            // bottomAxis Line Styles
                            "& .MuiChartsAxis-bottom .MuiChartsAxis-line":{
                                stroke:"#0000FF",
                                strokeWidth:0.4
                            },
                            // leftAxis Line Styles
                            "& .MuiChartsAxis-left .MuiChartsAxis-line":{
                                stroke:"#00000FF",
                                strokeWidth:0.4
                            }
                        }}
                    />
            </BarChartBottomPlayersGrid>
            </>}
            <PlayersAccordionWrapper item xs={12}>
                <Grid container>
                    <Grid item xs={4}>
                        <PlayersHeader>
                                Players: 
                        </PlayersHeader>
                    </Grid>
                    <Grid item xs={8}>
                        {hasItStarted && 
                            <PlayerAccordionSecondaryTitle>
                                    Maxi winner of the week: {gameData.winnersList[0]}
                            </PlayerAccordionSecondaryTitle>
                        }
                    </Grid>
                </Grid>
                {playerData.map((player, index) => (
                    <Accordion key={index}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}>
                                <PlayerAccordionMainTitle>
                                    {player.playerName}
                                </PlayerAccordionMainTitle>
                                {player.playerWinners[0] !== '' && hasItStarted &&
                                <PlayerAccordionSecondaryTitle sx={{color:colorOfText(player.playerWinners[0], gameData.winnersList[0])}}>
                                    Players Maxi winner of the week: {player.playerWinners[0]}
                                </PlayerAccordionSecondaryTitle>
                                }
                        </AccordionSummary>
                        <AccordionDetails>
                            <PlayersListMainGrid container>
                                {player.playerRankings.map((queen, index) => (
                                    <>
                                        <PlayersRankedQueens item xs={1}>
                                            {index+1}
                                        </PlayersRankedQueens>
                                        <PlayersRankedQueens item xs={11}>
                                            {queen}
                                        </PlayersRankedQueens>
                                    </>
                                ))}
                                <Playersadditional>
                                    <PlayersRankedQueens>
                                        Miss Congeniality: {player.MissC}
                                    </PlayersRankedQueens>
                                    <PlayersRankedQueens>
                                        Golden Boot: {player.GoldenBoot}
                                    </PlayersRankedQueens>
                                    <PlayersRankedQueens>
                                        Lever Queen: {player.leverQueen}
                                    </PlayersRankedQueens>
                                    <PlayersRankedQueens>
                                        Lever Number: {player.leverNum}
                                    </PlayersRankedQueens>
                                    <PlayersRankedQueens>
                                        Lip Sync Assassin: {player.lipSyncAssasin}
                                    </PlayersRankedQueens>
                                </Playersadditional>
                            </PlayersListMainGrid>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </PlayersAccordionWrapper>
        </BarChartMainGrid>
    )
}
