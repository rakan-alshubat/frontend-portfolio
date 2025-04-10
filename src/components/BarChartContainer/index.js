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
    NamesTop3Grid,
    GameInfoGrid,
    GameInfoItems,
    PlayerWinnersAccordion,
    PlayerInfoGrid,
    PlayerInfoItems,
    WinnerText
 } from "./BarChartContainer.styles";

export default function BarChartContainer() {

    var hasItStarted = gameData.winnersList.length > 0
    var hasItEnded = gameData.eleminationsList.length === 14

    var lipSyncAssasin = []
    var maxWins = 0
    var assassinText = ''

    for(var i = 0; i < gameData.lipSyncWinners.length; i++){
        
        var wins = 0;

        for(var j = 0; j < gameData.lipSyncWinners.length; j++){
            if(gameData.lipSyncWinners[i] === gameData.lipSyncWinners[j]){
                wins++
            }
        }

        if(wins > maxWins){
            maxWins = wins;
            lipSyncAssasin = [gameData.lipSyncWinners[i]]
        }else if(wins === maxWins && !lipSyncAssasin.includes(gameData.lipSyncWinners[i])){
            lipSyncAssasin.push(gameData.lipSyncWinners[i])
        }
    }

    for(var i = 0; i < lipSyncAssasin.length; i++){
        assassinText += lipSyncAssasin[i] + " & "
    }

    assassinText = assassinText.substring(0, assassinText.length-3);

    if(lipSyncAssasin.length > 1){
        assassinText = "Current Lip Sync Assassins: " + assassinText
    } else {
        assassinText = "Current Lip Sync Assassin: " + assassinText
    }

    const colors = [
        '#C0C0C0',
        '#FFD700',
        '#CD7F32',
    ];

    var players = []

    const colorOfText = (playerWinner, actualWinner) => {
        if(actualWinner != ''){
            if(actualWinner.includes(playerWinner)){
                return 'green'
            }else{
                return 'red'
            }
        }else{
            return ''
        }
    }

    const colorOfLSA = (playerWinner) => {
        if(lipSyncAssasin.includes(playerWinner)){
            return 'green'
        }else{
            return 'red'
        }
    }    
    
    const colorOfSwitch = (rankedQueen, firstQueen, secondQueen) => {
        if(rankedQueen === firstQueen || rankedQueen === secondQueen){
            return '#ec971c'
        }else{
            return ''
        }
    }

    const pointstxt = (color) => {
        if(color === 'green'){
            return '+5'
        } 
    }

    const position = (rankedQueen) => {
        let pos;
        for(const queens of gameData.eleminationsList){
            if(rankedQueen === queens.queen){
                pos = queens.rank
                if(pos === 1){
                    pos += 'st'
                }else if(pos === 2){
                    pos += 'nd'
                }else if(pos === 3){
                    pos += 'rd'
                }else{
                    pos += 'th'
                }
            }
        }

        return pos
    }

    const pointsGained = (rankedQueen, playerRankings) => {
        let ptsGained
        for(const queens of gameData.eleminationsList){
            if(rankedQueen === queens.queen){
                ptsGained = '+'
                let actualPos = playerRankings.findIndex(el => el === rankedQueen)+1

                ptsGained += 14 - (Math.abs(queens.rank - actualPos))
            }
        }

        return ptsGained
    }

    playerData.map((player) => {
        const name = player.playerName;
        const points = calculatePoints(player, gameData, lipSyncAssasin)
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
            {hasItEnded &&
            <>
                <BarChartTop3Grid item sm={8} xs={12}>
                    <Top3Text>
                        The Winner of the 2025 Drag League is...
                    </Top3Text>
                    <WinnerText>
                        {top3[1].playerName}
                    </WinnerText>

                </BarChartTop3Grid>
            </> 
            }
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
            <GameInfoGrid>
                <Grid container>
                    {hasItStarted &&
                        <>
                        <GameInfoItems item xs={12}>
                            <>{assassinText}</>
                        </GameInfoItems>
                        <GameInfoItems item xs={12} md={6}>
                            <>lever Queen: {gameData.leverQueen}</>
                        </GameInfoItems>
                        <GameInfoItems item xs={12} md={6}>
                            <>lever: #{gameData.leverNum}</>
                        </GameInfoItems>
                        <GameInfoItems item xs={12} md={6}>
                            <>Miss Congeniality: {gameData.missC}</>
                        </GameInfoItems>
                        <GameInfoItems item xs={12} md={6}>
                            <>Golden Boot: {gameData.goldenBoot}</>
                        </GameInfoItems>
                        </>
                    }
                </Grid>
            </GameInfoGrid>
            <PlayersHeader>
                Players 
            </PlayersHeader>
            <PlayersAccordionWrapper item xs={12}>
                <Grid container>
                    <Grid item xs={10.5}>
                        {hasItStarted && 
                            <PlayerAccordionSecondaryTitle sx={{paddingBottom: '10px'}}>
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
                            <PlayerInfoGrid container>
                                <PlayerInfoItems item xs={8}>
                                    Player Rankings
                                </PlayerInfoItems>
                                <PlayerInfoItems item xs={2}>
                                    Actual Position
                                </PlayerInfoItems>
                                <PlayerInfoItems item xs={2}>
                                    Points Gained
                                </PlayerInfoItems>
                            </PlayerInfoGrid>
                            <PlayersListMainGrid container>
                                {player.playerRankings.map((queen, index) => (
                                    <>
                                        <PlayersRankedQueens item xs={2}>
                                            {index+1}
                                        </PlayersRankedQueens>
                                        <PlayersRankedQueens item xs={6} sx={{color:colorOfSwitch(queen, player.firstQueensSwaped, player.secondQueensSwaped)}}>
                                            {queen}
                                        </PlayersRankedQueens>
                                        <PlayersRankedQueens item xs={2}>
                                            {position(queen)}
                                        </PlayersRankedQueens>
                                        <PlayersRankedQueens item xs={2}>
                                            {pointsGained(queen, player.playerRankings)}
                                        </PlayersRankedQueens>
                                    </>
                                ))}
                                <Playersadditional>
                                    <PlayersRankedQueens sx={{color:colorOfText(player.MissC, gameData.missC)}}>
                                        Miss Congeniality: {player.MissC} {pointstxt(colorOfText(player.MissC, gameData.missC))}
                                    </PlayersRankedQueens>
                                    <PlayersRankedQueens sx={{color:colorOfText(player.GoldenBoot, gameData.goldenBoot)}}>
                                        Golden Boot: {player.GoldenBoot} {pointstxt(colorOfText(player.GoldenBoot, gameData.goldenBoot))}
                                    </PlayersRankedQueens>
                                    <PlayersRankedQueens sx={{color:colorOfText(player.leverQueen, gameData.leverQueen)}}>
                                        Lever Queen: {player.leverQueen} {pointstxt(colorOfText(player.leverQueen, gameData.leverQueen))}
                                    </PlayersRankedQueens>
                                    <PlayersRankedQueens sx={{color:colorOfText(player.leverNum, gameData.leverNum)}}>
                                        Lever Number: {player.leverNum} {pointstxt(colorOfText(player.leverNum, gameData.leverNum))}
                                    </PlayersRankedQueens>
                                    <PlayersRankedQueens sx={{color:colorOfLSA(player.lipSyncAssasin)}}>
                                        Lip Sync Assassin: {player.lipSyncAssasin} {pointstxt(colorOfLSA(player.lipSyncAssasin))}
                                    </PlayersRankedQueens>
                                </Playersadditional>
                            </PlayersListMainGrid>
                            <PlayerWinnersAccordion>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    Player winners list
                                </AccordionSummary>
                                <AccordionDetails>
                                    {player.playerWinners.slice(0).reverse().map((winner, index) => (
                                        <>
                                            <PlayersRankedQueens sx={{color:colorOfText(winner, gameData.winnersList.slice(0).reverse()[index])}}>
                                                Episode {index+3}: {winner} {pointstxt(colorOfText(winner, gameData.winnersList.slice(0).reverse()[index]))}
                                            </PlayersRankedQueens>
                                        </>
                                    ))}
                                </AccordionDetails>
                            </PlayerWinnersAccordion>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </PlayersAccordionWrapper>
            <Grid container>
                <Grid item sx={12} md={4}>
                    <Accordion sx={{marginTop: '10px', backgroundColor: '#b8fdfc', width: '100%'}}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            Elemination Order
                        </AccordionSummary>
                        <AccordionDetails>
                            {gameData.eleminationOrder.map((queen) => (
                                <>
                                    Episode {queen.episode}: {queen.winner} <br/>
                                </>
                            ))}
                        </AccordionDetails>
                    </Accordion>
                </Grid>
                <Grid item sx={12} md={4}>
                    <Accordion sx={{marginTop: '10px', backgroundColor: '#b8fdfc', width: '100%'}}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            Maxi Challenege Win Order
                        </AccordionSummary>
                        <AccordionDetails>
                            {gameData.winnersList.slice(0).reverse().map((queen, index) => (
                                <>
                                    Episode {index+3}: {queen} <br/>
                                </>
                            ))}
                        </AccordionDetails>
                    </Accordion>
                </Grid>
                <Grid item sx={12} md={4}>
                    <Accordion sx={{marginTop: '10px', backgroundColor: '#b8fdfc', width: '100%'}}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            Lip Sync Winners
                        </AccordionSummary>
                        <AccordionDetails>
                            {gameData.lipSyncWinnersList.map((queen) => (
                                <>
                                    Episode {queen.episode}: {queen.winner} <br/>
                                </>
                            ))}
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>
        </BarChartMainGrid>
    )
}
