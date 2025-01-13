import BarChart from "@/components/BarChartContainer";
import WelcomeText from "@/components/WelcomeText";
import calculatePoints from '@/helpers/calculatePoints'
import QueenSelection from "@/components/QueenSelection";

export default function DragRace() {
  var points

    playerData.map((player) => {
      points = calculatePoints(player, actualRankings, actualWinners)
    })
    return (
      <>
        <WelcomeText
          title={'Rakan\'s Fantasy Drag Race League! :)'}
        />
        <BarChart />
      </>
    )
  }

const playerData = [
  {
    playerName: 'Rakan',
    playerRankings: [
      'Q',
      'Dawn',
      'Sapphira Crystal',
      'Plasma',
      'Morphine Love Dion',
    ],
    playerWinners: [
      'Morphine Love Dion',
      'Dawn',
      'Plasma', 
      'Q',
      'Plasma'
    ],
  }
]

const actualRankings = [
  'Dawn',
  'Plasma',
  'Q', 
  'Sapphira Crystal',
  'Morphine Love Dion'
]

const actualWinners = [
  'Dawn',
  'Dawn',
  'Q', 
  'Dawn',
  'Plasma'
]