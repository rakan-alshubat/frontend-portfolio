export default function calculatePoints(playerData, actualRankings, actualWinners){
  var totalPoints = 0; 
  var totalRankedQueens = actualRankings.length

  for(const rankedQueen of actualRankings){
    var QueenRanking = 15 - totalRankedQueens
    var position = playerData.playerRankings.indexOf(rankedQueen) + 1
    var rankingPoints = 14 - (Math.abs(QueenRanking - position))

    totalRankedQueens -= 1;

    totalPoints += rankingPoints
  }

  for (let i = 0; i < actualWinners.length; i++) {
    if(actualWinners[i].includes(playerData.playerWinners[i]) && playerData.playerWinners[i] !== ''){
      totalPoints += 5
    }
  }

  totalPoints += playerData.bonusPoints;

  return totalPoints
}