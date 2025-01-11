import { BarChart } from '@mui/x-charts/BarChart';
import {
    BarChartTop3Grid, 
    BarChartMainGrid,
    BarChartBottomPlayersGrid,
    Top3Text,
 } from "./BarChartContainer.styles";

export default function BarChartContainer(playerRanking) {

    const colors = [
        '#C0C0C0',
        '#FFD700',
        '#CD7F32',
    ];

    playerData.sort(function(a, b) {
        if(a.totalPoints < b.totalPoints) return 1
        if(a.totalPoints > b.totalPoints) return -1
        return 0
    })

    var top3 = playerData.slice(0,3)
    var temp = top3[0]
    top3[0] = top3[1]
    top3[1] = temp

    var bottomPlayers = playerData.slice(3, playerData.length)

    return(
        <BarChartMainGrid container>
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
            <BarChartBottomPlayersGrid item sm={3} xs={12}>
                <Top3Text>
                    Bottom Queens
                </Top3Text>
                <BarChart
                        dataset={bottomPlayers}
                        layout="horizontal"
                        yAxis={[{
                            scaleType: 'band', 
                            dataKey: 'playerName',
                            tickFontSize: 15,
                        }]}
                        series={[{ dataKey: 'totalPoints' }]}
                        barLabel="value"
                        height={500}
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
        </BarChartMainGrid>
    )
}

const playerData = [
    {
        playerName: 'Rakan',
        totalPoints: 50
    },
    {
        playerName: 'jack',
        totalPoints: 40
    },
    {
        playerName: 'tom',
        totalPoints: 45
    },
    {
        playerName: 'cam',
        totalPoints: 65
    },
    {
        playerName: 'greg',
        totalPoints: 25
    },
    {
        playerName: 'pete',
        totalPoints: 32
    },
    {
        playerName: 'colin',
        totalPoints: 42
    },
    {
        playerName: 'rex',
        totalPoints: 20
    },
    {
        playerName: 'lola',
        totalPoints: 5
    },
  ]
