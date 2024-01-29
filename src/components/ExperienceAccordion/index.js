import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ExperienceAccordionWrapper, ExperiencenHeader, ExperiencenHeaderSecondary, ExperienceAccordionMainTitle, ExperienceAccordionSecondaryTitle } from './experienceAccordion.styles'

export default function ExperienceAccordion({}) {
    return (
        <ExperienceAccordionWrapper>
            <ExperiencenHeader>
                University Of Phoenix 
            </ExperiencenHeader>
            <ExperiencenHeaderSecondary>
                01/20 - Present
            </ExperiencenHeaderSecondary>
            {ExperienceList.map((position, index) => (
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <ExperienceAccordionMainTitle>
                            {position.title}
                        </ExperienceAccordionMainTitle>
                        <ExperienceAccordionSecondaryTitle>
                            {position.dates}
                        </ExperienceAccordionSecondaryTitle>
                    </AccordionSummary>
                    <AccordionDetails dangerouslySetInnerHTML={{ __html: position.description }} />
                </Accordion>    
            ))}
        </ExperienceAccordionWrapper>
    )
}

const ExperienceList = [
    {
        title: 'Tech Lead',
        dates: '02/2023 - Present',
        description: `<p>Re-architect the structure of a multi-page application into micro front-ends to be owned by different teams. Prioritize work and create timelines for deliverables in collaboration with stakeholder. Sustain high quality of code by conducting code reviews.</p>
        <ul>
            <li>Distinguished as the company's youngest tech lead at an early stage in career.</li>
            <li>Launched an entirely new product and saw it through its entire development.</li>
            <li>Developed multiple Next.JS web pages, dividing ownership among three teams.</li>
        </ul>
        `
    },
    {
        title: 'Software Engineer II',
        dates: '07/2021 - 02/2023',
        description: `<p>Aligned data across pages and systems by processing financial information via Java microservice. Established and maintained strong working relationships with developers using Git and Designers as part of a product team. Equipped junior developers with in-depth knowledge of our stack via training and onboarding.</p>
        <ul>
            <li>Reduced load times by 70% with a more modern, responsive design.</li>
            <li>Replaced older student-facing pages with Next.JS web pages.</li>
            <li>Minimized student advisor call frequency by 30% through a chatbot agent using JavaScript, AWS, Lambda, Genesis.</li>
        </ul>
        `
    },
    {
        title: 'Software Engineer I',
        dates: '01/2020 - 07/2021',
        description: `<p>Oversaw millions of interactions using New Relic, a CI/CD Pipeline with AWS. Troubleshot and resolved software bugs and defects efficiently through prioritization and problem-solving techniques. Acquired knowledge of new code base by learning and integrating into development team and collaborating with senior developers.</p>
        <ul>
            <li>Contributed to the advancement of an enterprise application, introducing new features (Spring Boot, Angular, MongoDB.</li>
            <li>Decreased outage rates by 80% by migrating Middleware services into Kafka.</li>
        </ul>
        `
    },
]