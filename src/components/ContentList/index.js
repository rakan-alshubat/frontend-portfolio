import React from "react"
import { ContentListMainBox, ContentListHeading, ContentListSubHeading, ContentListTypography } from "./contentList.style"

export default function ContentList() {
    return (
        <ContentListMainBox>
            <ContentListHeading>
                Content List
            </ContentListHeading>
            {pageList.map((item, index) => (
                <React.Fragment key={item.title}>
                    <ContentListSubHeading>
                        {item.title}
                    </ContentListSubHeading>
                    <ContentListTypography>
                        {item.description}
                    </ContentListTypography>
                </React.Fragment>
            ))}
        </ContentListMainBox>
    )
}

const pageList = [
    {
        title: 'Experince',
        description: 'The page highlights the work that I do for my team as well as information about my skill set.'
    },
    {
        title: 'Projects / Accomplishments',
        description: '(WIP) The page highlights some personal projects that I have worked on outside of my professional experience, as well as any accomplishments or awards I have recieved.'
    },
    {
        title: 'Education',
        description: '(WIP) The page contains information about my education and courses that I have taken during my program.'
    },
    {
        title: 'Hobbies',
        description: 'the Hobbies page is meant to give a glimse on who I am outside of a professional context. What I enjoy doing in my free time.'
    },
    {
        title: 'Contact Info',
        description: 'The top right contact info pop-up has my number, email, and links to LinkedIn and Github.'
    }
]