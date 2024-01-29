import ExperienceAccordion from "@/components/ExperienceAccordion";
import PersonalStatement from "@/components/PersonalStatement";
import WelcomeText from "@/components/WelcomeText";

export default function Experience() {
  return (
    <>
      <WelcomeText 
        title={'Experience'}
        content={'The page highlights the work that i do for my team as well as information about my skill set. Languages I know, contributions I\'ve made, and the different positions I have held.'}
      />
      <PersonalStatement />
      <ExperienceAccordion />
    </>
  )
}
