import { WelcomeTextContent, WelcomeTextHeading, WelcomeTextMainBox } from './welcomeText.styles'

export default function WelcomeText({title, content}) {
    return (
        <WelcomeTextMainBox direction='column'>
            <WelcomeTextHeading>
                {title}
            </WelcomeTextHeading>
            <WelcomeTextContent>
                {content}
            </WelcomeTextContent>
        </WelcomeTextMainBox>
        
    )
}