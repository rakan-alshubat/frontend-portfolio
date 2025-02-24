export default function calculatePoints(playerData, gameData){
  var totalPoints = 0; 
  var totalRankedQueens = gameData.eleminationsList.length

  for(const rankedQueen of gameData.eleminationsList){
    var QueenRanking = 15 - totalRankedQueens
    var position = playerData.playerRankings.indexOf(rankedQueen) + 1
    var rankingPoints = 14 - (Math.abs(QueenRanking - position))

    totalRankedQueens -= 1;

    totalPoints += rankingPoints
  }

  for (let i = 0; i < gameData.winnersList.length; i++) {
    if(gameData.winnersList[i].includes(playerData.playerWinners[i]) && playerData.playerWinners[i] !== ''){
      totalPoints += 5
    }
  }

  if(gameData.leverQueen === playerData.leverQueen){
    totalPoints += 5
  }
  if(gameData.leverNum === playerData.leverNum){
    totalPoints += 5
  }
  if(gameData.missC === playerData.missC){
    totalPoints += 5
  }
  if(gameData.goldenBoot === playerData.goldenBoot){
    totalPoints += 5
  }
  // if(lipSyncAssasin.includes(playerData.lipSyncAssasin)){
  //   totalPoints += 5
  // }

  return totalPoints
}