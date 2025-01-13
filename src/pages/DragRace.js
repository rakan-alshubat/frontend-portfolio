import BarChart from "@/components/BarChartContainer";
import WelcomeText from "@/components/WelcomeText";
import gameData from '../files/gameData'

export default function DragRace() {
  var hasItStarted = gameData.winnersList.length > 0

    return (
      <>
        <WelcomeText
          title={'Rakan\'s Fantasy Drag Race League!'}
        />
        {hasItStarted &&
          <BarChart />
        }
        
      </>
    )
  }