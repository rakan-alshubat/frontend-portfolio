import { Drawer, Box, List, ListItem, Grid, Button, Modal } from "@mui/material"
import React, { useState } from "react"
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu'
import ClearIcon from '@mui/icons-material/Clear';
import ContactInfoModal from "../ContactInfoModal";
import ContactInfo from 'src/media/contactInfo.jpg'
import { MainNavbar, GridItemWrapper, NavbarTitleTypography, NavbarBurgerButton, ContactModalPhoto, DrawerItemsButton } from "./navbar.styles"

export default function Navbar() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const handleOpen = () => setModalOpen(true);
    const handleClose = () => setModalOpen(false);

    return (
        <MainNavbar position={'sticky'}>
            <Grid container>
                <GridItemWrapper item xs={0.5}>
                    <React.Fragment key={'drawe'}>
                        <NavbarBurgerButton onClick={() => { setDrawerOpen(true) }}>
                            <MenuIcon fontSize="large"/>
                        </NavbarBurgerButton>
                        <Drawer
                            anchor='left'
                            open={drawerOpen}
                            onClose={() => { setDrawerOpen(false) }}
                        > 
                            <Box
                                role='presentation'
                                width='250px'
                                onClick={() => {setDrawerOpen(false)}}
                                onKeyDown={() => {setDrawerOpen(false)}}
                            >
                                <List>
                                    <ListItem>
                                        <NavbarBurgerButton onClick={() => { setDrawerOpen(false) }}>
                                            <ClearIcon fontSize="large" sx={{color: 'black'}}/>
                                        </NavbarBurgerButton>
                                    </ListItem>
                                    <ListItem>
                                        <DrawerItemsButton href="/">
                                            Home
                                        </DrawerItemsButton>
                                    </ListItem>
                                    <Divider variant="middle"/>
                                    <ListItem>
                                        <DrawerItemsButton href="/Experience">
                                            Experience
                                        </DrawerItemsButton>
                                    </ListItem>
                                    <ListItem>
                                        <DrawerItemsButton href="/Projects">
                                            Projects / Accomplishments
                                        </DrawerItemsButton>
                                    </ListItem>
                                    <ListItem>
                                        <DrawerItemsButton href="/Education">
                                            Education
                                        </DrawerItemsButton>
                                    </ListItem>
                                    <Divider variant="middle"/>
                                    <ListItem>
                                        <DrawerItemsButton href="/Hobbies">
                                            Hobbies
                                        </DrawerItemsButton>
                                    </ListItem>
                                </List>
                            </Box>
                        </Drawer>
                    </React.Fragment>
                </GridItemWrapper>
                <GridItemWrapper item xs={10.5}>
                    <NavbarTitleTypography>
                        Rakan Alshubat
                    </NavbarTitleTypography>
                </GridItemWrapper>
                <GridItemWrapper item xs={1}>
                    <Button onClick={handleOpen}>
                        <ContactModalPhoto
                            src={ContactInfo}
                            width={38}
                            height={40}
                            alt={'Contact Card photo'} 
                        />
                    </Button>
                    <Modal
                        open={modalOpen}
                        onClose={handleClose}
                    >
                        <ContactInfoModal />
                    </Modal>
                </GridItemWrapper>
            </Grid>
        </MainNavbar>
    )
}