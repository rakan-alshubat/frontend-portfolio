import { BarChart } from '@mui/x-charts/BarChart';
import {playerData} from '../../files/playerData'
import calculatePoints from '@/helpers/calculatePoints'
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material"
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
    Playersadditional
 } from "./BarChartContainer.styles";

export default function BarChartContainer() {

      var hasItStarted = gameData.winnersList.length > 0

    const colors = [
        '#C0C0C0',
        '#FFD700',
        '#CD7F32',
    ];

    var players = []


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

    var top3 = players.slice(0,3)
    var temp = top3[0]
    top3[0] = top3[1]
    top3[1] = temp

    var bottomPlayers = players.slice(3, players.length)
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
                        tickFontSize: 30,
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
                        fontFamily: '',
                        },
                        // change bottom label styles
                        "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel":{
                            fill:"black"
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
            </BarChartTop3Grid>
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
                <PlayersHeader>
                        Players:
                </PlayersHeader>
                {playerData.map((player, index) => (
                    <Accordion key={index}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}>
                                <PlayerAccordionMainTitle>
                                    {player.playerName}
                                </PlayerAccordionMainTitle>
                                {player.playerWinners[0] !== '' &&
                                <PlayerAccordionSecondaryTitle>
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
