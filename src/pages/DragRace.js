import { use, useEffect } from 'react';
import BarChart from "@/components/BarChartContainer";
import WelcomeText from "@/components/WelcomeText";
import calculatePoints from '@/helpers/calculatePoints'
import gameData from '../files/gameData'
import QueenSelection from "@/components/QueenSelection";
import { Button } from '@mui/material';

export default function DragRace() {
  var points
  var fileNames

  const pullFiles = async () => {
    const response = await fetch('/api/pull-files', {
    method: 'POST',
    headers: {
      'Concent-Type': 'application/json'
    },
    })
    const data = await response.json()
    fileNames = data.message
    console.log(fileNames)
  };

  useEffect(() => {
    pullFiles();
  }, [])

  var hasItStarted = gameData.winnersList.length > 0

    playerData.map((player) => {
      points = calculatePoints(player, actualRankings, actualWinners)
    })

    return (
      <>
        <WelcomeText
          title={'Rakan\'s Fantasy Drag Race League'}
        />
        {hasItStarted  && 
        <>
          <BarChart />
        </>
        }
        {!hasItStarted  && 
        <>
          <QueenSelection />
        </>
        }
        <Button onClick={() => pullFiles()}>test</Button>
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