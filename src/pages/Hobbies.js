import WelcomeText from "@/components/WelcomeText";
import PhotoTransitionTile from "@/components/PhotoTransitionTile";
import VideoGames from 'src/media/Video-Games.jpg'
import BoardGames from 'src/media/Board-Games.jpg'
import Dogs from 'src/media/Dogs.jpg'
import Camping from 'src/media/Camping.jpg'
import Halloween from 'src/media/Halloween.jpg'
import Festival from 'src/media/Festival.jpg'
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'


export default function Hobbies() {
    const { width, height } = useWindowSize()
    return (
      <>
      <WelcomeText
        title={'Welcome to the hobbies page'}
        content={'The page is meant to give a glimse on who I am outside of a professional context. What I enjoy doing in my free time. If I match the skill set needed for the position, why not find out if I\'m a cultural fit too!'}
      />
      <Confetti
        width={width}
        height={height}
        numberOfPieces={500}
      />
      {/* <PhotoTransitionTile 
        imageName={VideoGames}
        width={600}
        height={400}
        altText={'Joker outfit'}
        imageText={'A software engineer who likes video games? SHOCKING! It\'s my go-to relaxation/decompression activity. This is a halloween costume the year I dressed as a character from one of my favorite games.'}
        rowDirection={'row'}
        slideDirection={'left'}
      />
      <PhotoTransitionTile 
        imageName={Dogs}
        width={800}
        height={600}
        altText={'Two dogs'}
        imageText={'I LOVE DOGS! who doesn\'t? The goof on the left is my dog Summer, and the dog to the right is one of the dogs I fostered, Penny! I also volunteered at the shelter once a week and help keep it running.'}
        rowDirection={'row-reverse'}
        slideDirection={'right'}
      />
      <PhotoTransitionTile 
        imageName={Halloween}
        width={460}
        height={736}
        altText={'Halloween outfit'}
        imageText={'I consider Halloween to be a hobby, yes. It\'s my favorite holiday and every year in recent memory, I would make my own halloween outfit. One example is this costume that required me to melt and mold plastic and hand paint it. The body suit is the only thing I purchased as is.'}
        rowDirection={'row'}
        slideDirection={'left'}
      />
      <PhotoTransitionTile 
        imageName={Camping}
        width={500}
        height={736}
        altText={'fireside Photo'}
        imageText={'At least once a year, I would do a weekend with some friends out in nature. A camping weekend getaway, cooking fireside, hiking, and bonding with friends? sign me up.'}
        rowDirection={'row-reverse'}
        slideDirection={'right'}
      />
      <PhotoTransitionTile 
        imageName={Festival}
        width={500}
        height={800}
        altText={'Music Festival'}
        imageText={'Electronic Music Festivals are a big part of my life, I go to at least 5 or 6 every year. They function as tentpolls for my calendar, I always have one right over on the horizon to look forward to and then? well the next one of course! Nothing beats dancing with friends until you see the sun rise over the stage.'}
        rowDirection={'row'}
        slideDirection={'left'}
      />
      <PhotoTransitionTile 
        imageName={BoardGames}
        width={700}
        height={636}
        altText={'Board games with friends'}
        imageText={'Getting some friends together to play a bunch of board games will always be my suggested Friday night! I have a big collection so we will always have something for whatever occasion. From simple card games to deep strategy games.'}
        rowDirection={'row-reverse'}
        slideDirection={'right'}
      /> */}
      </>
    )
  }