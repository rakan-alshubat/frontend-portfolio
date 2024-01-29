import PhotoTransition from "@/components/PhotoTransitionTile"
import WelcomeText from "@/components/WelcomeText"
import ContentList from "@/components/ContentList"
import selfie from 'src/media/selfie.JPG'

export default function Home() {
  return (
    <>
      <WelcomeText
        title={'Welcome to my site'}
        content={'This website was created to showcase my experience, ability, and myself! Its always going to be a work in progress as I gain more knowledge and experience or think of cool new things to work on. Enjoy!'}
      />
      <PhotoTransition 
        imageName={selfie}
        width={407}
        height={736}
        altText={'hello'}
        imageText={'My name is Rakan! A Software Engineer based in Seattle, Washington. With 4 years of experience with many technologies and multipdisciplined teams of engineers and designers, I graduated Arizona State University in 2019 with a B.S. in Computer Science and jumped straight into utilizing my passion for programming.'}
        rowDirection={'row'}
        slideDirection={'left'}
      />
      <ContentList />
    </>
  )
}
