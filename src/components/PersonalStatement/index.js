import { Stack } from "@mui/material"
import { PersonalStatementWrapper, PersonalStatementTypography, TechnicalChips } from "./personalStatement.styles"

export default function PersonalStatement() {
    return (
        <PersonalStatementWrapper>
            <PersonalStatementTypography>
                Analytical professional with hands-on experience in implementing exceptional user interfaces and interactive web applications using various programming languages. Adept at translating UI/UX designs into pixel-perfect, responsive layouts and optimizing web performance for seamless user experiences. Skilled in managing software development lifecycle, including software testing and debugging, designing scalable, and testable code. Proficient at creating, maintaining, testing, and debugging the entire back end of an application or system, including core application logic, databases, data and application integration, and API. Ability to coordinate with technical teams to attain collective goals and shared visions. Elite communicator and active problem-solver and troubleshooter, resolving complex issues via innovative solutions.
            </PersonalStatementTypography>
            <Stack direction={'row'} spacing={2}>
                {skillsList.map((item) => (
                    <TechnicalChips label={item}/>
                ))}
            </Stack>
        </PersonalStatementWrapper>
    )
}

const skillsList = [
    'JavaScript (Next.JS, React, ES6)',
    'HTML/CSS',
    'Java',
    'Git',
    'AWS Technologies',
    'Typescript',
    'React Native'
]