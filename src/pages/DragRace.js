import BarChart from "@/components/BarChartContainer";
import WelcomeText from "@/components/WelcomeText";
import React from 'react'
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'
import gameData from '../files/gameData'

export default function DragRace() {
  const { width, height } = useWindowSize()
  var hasItEnded = gameData.eleminationsList.length === 14
    return (
      <>
        <WelcomeText
          title={'Rakan\'s Fantasy Drag Race League!'}
        />
        {hasItEnded &&
          <Confetti
            width={width}
            height={height}
            numberOfPieces={500}
          />
        }
        <BarChart />
      </>
    )
  }