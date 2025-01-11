import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Image from 'next/image'
import { Grid } from '@mui/material';
import ContactInfo from 'src/media/contactInfo.jpg'
import { NavbarContactCard, ContactCardGridContainer, ContactCardList, ContactCardTypography, ContactCardLinks } from "./contactInfoModal.styles"

export default function ContactInfoModal() {

    return (
        <NavbarContactCard>
            <ContactCardGridContainer container direction={'row'}>
                <Grid item sm={0} md={6}>
                    <Image
                        src={ContactInfo}
                        width={217}
                        height={357}
                        alt={'Contact Card photo'}
                    />
                </Grid>
                <ContactCardList item sm={12} md={6} direction={'column'}>
                    <ContactCardTypography>
                        <Grid container>
                            <Grid item xs={0.5}>
                                <PhoneIcon />
                            </Grid>
                            <Grid item xs={11.5}>
                                (480) 359-8045
                            </Grid>
                        </Grid>
                    </ContactCardTypography>
                    <ContactCardTypography>
                        <Grid container>
                            <Grid item xs={0.5}>
                                <EmailIcon />
                            </Grid>
                            <Grid item xs={11.5}>
                                Rakan.Alshubat@gmail.com
                            </Grid>
                        </Grid>
                    </ContactCardTypography>
                    <ContactCardTypography>
                        <Grid container>
                            <Grid item xs={0.5}>
                                <LinkedInIcon />
                            </Grid>
                            <Grid item xs={11.5}>
                                <ContactCardLinks href='https://www.linkedin.com/in/rakan-alshubat/'>
                                    linkedin.com/in/rakan-alshubat/
                                </ContactCardLinks>
                            </Grid>
                        </Grid>
                    </ContactCardTypography>
                    <ContactCardTypography>
                        <Grid container>
                            <Grid item xs={0.5}>
                                <GitHubIcon />
                            </Grid>
                            <Grid item xs={11.5}>
                                <ContactCardLinks href='https://www.github.com/rakan-alshubat'>
                                    github.com/rakan-alshubat
                                </ContactCardLinks>
                            </Grid>
                        </Grid>
                    </ContactCardTypography>
                </ContactCardList>
            </ContactCardGridContainer>
        </NavbarContactCard>
    )
}

