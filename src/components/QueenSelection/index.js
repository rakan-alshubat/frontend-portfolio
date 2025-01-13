import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { TextField } from '@mui/material';
import { 
    QueenSelectionMainGrid, 
    QueenSelectionNumbers, 
    QueenSelectionDropDown, 
    QueenSelectionTitle, 
    QueenSelectionSubTitle, 
    PlayerInfoMainGrid,
    PlayerInfoSubmissionGrid,
    PlayerInfoSubmissionText,
    RankingSubmitButton
} from './QueenSelection.styles';

export default function QueenSelection() {
    // const [one, setOne] = React.useState('');
    // const [two, setTwo] = React.useState('');
    // const [three, setThree] = React.useState('');
    // const [four, setFour] = React.useState('');
    // const [five, setFive] = React.useState('');
    // const [six, setSix] = React.useState('');
    // const [seven, setSeven] = React.useState('');
    // const [eight, setEight] = React.useState('');
    // const [nine, setNine] = React.useState('');
    // const [ten, setTen] = React.useState('');
    // const [eleven, setEleven] = React.useState('');
    // const [twelve, setTwelve] = React.useState('');
    // const [thirtheen, setThirteen] = React.useState('');
    // const [fourteen, setFourteen] = React.useState('');
    // const [goldenBoot, setGoldenBoot] = React.useState('');
    // const [missC, setMissC] = React.useState('');
    // const [leverQueen, setLeverQueen] = React.useState('');
    // const [leverNumber, setLeverNumber] = React.useState('');
    // const [playerName, setPlayerName] = React.useState('');
    // const [playerPassword, setPlayerPassword] = React.useState('');
    // const [error, setError] = React.useState(false);

    // var rankings = []

    // const handleOne = (event) => {
    //     rankings[1] = event.target.value
    //     setOne(event.target.value);
    // };
    // const handleTwo = (event) => {
    //     rankings[2] = event.target.value
    //     setTwo(event.target.value);
    // };
    // const handleThree = (event) => {
    //     rankings[3] = event.target.value
    //     setThree(event.target.value);
    // };
    // const handleFour = (event) => {
    //     rankings[4] = event.target.value
    //     setFour(event.target.value);
    // };
    // const handleFive = (event) => {
    //     rankings[5] = event.target.value
    //     setFive(event.target.value);
    // };
    // const handleSix = (event) => {
    //     rankings[6] = event.target.value
    //     setSix(event.target.value);
    // };
    // const handleSeven = (event) => {
    //     rankings[7] = event.target.value
    //     setSeven(event.target.value);
    // };
    // const handleEight = (event) => {
    //     rankings[8] = event.target.value
    //     setEight(event.target.value);
    // };
    // const handleNine = (event) => {
    //     rankings[9] = event.target.value
    //     setNine(event.target.value);
    // };
    // const handleTen = (event) => {
    //     rankings[10] = event.target.value
    //     setTen(event.target.value);
    // };
    // const handleEleven = (event) => {
    //     rankings[11] = event.target.value
    //     setEleven(event.target.value);
    // };
    // const handleTwelve = (event) => {
    //     rankings[12] = event.target.value
    //     setTwelve(event.target.value);
    // };
    // const handleThirteen = (event) => {
    //     rankings[13] = event.target.value
    //     setThirteen(event.target.value);
    // };
    // const handleFourteen = (event) => {
    //     rankings[14] = event.target.value
    //     setFourteen(event.target.value);
    // };
    // const handleGoldenBoot = (event) => {
    //     setGoldenBoot(event.target.value);
    // };
    // const handleMissC = (event) => {
    //     setMissC(event.target.value);
    // };
    // const handleLeverQueen = (event) => {
    //     setLeverQueen(event.target.value);
    // };
    // const handleLeverNumber = (event) => {
    //     setLeverNumber(event.target.value);
    // };
    // const createFile = async () => {
    //     if(!rankings.includes('') && 
    //         !rankings.some((val, i) => rankings.indexOf(val) !== i) &&
    //         goldenBoot !== '' &&
    //         missC !== '' &&
    //         leverQueen !== '' &&
    //         leverNumber !== '' &&
    //         playerName !== '' &&
    //         playerPassword !== '')
    //     {
    //         setError(false)
    //         var playerData = {
    //             "playerName": playerName,
    //             "playerPassword": playerPassword,
    //             "goldenBoot": goldenBoot,
    //             "missC": missC,
    //             "leverQueen": leverQueen,
    //             "leverNumber": leverNumber,
    //             "playerRankings": rankings,
    //             "playerWinners": [],
    //             "hasPlayerSwitched": false
    //         }
    //         const response = await fetch('/api/create-json', {
    //             method: 'POST',
    //             headers: {
    //                 'Concent-Type': 'application/json'
    //             },
    //             body: JSON.stringify(playerData)
    //         })


    //     }else{
    //         setError(true)
    //     }
    //   }
    

    return(
        <>
        <QueenSelectionTitle>Rankings!</QueenSelectionTitle>
        <QueenSelectionSubTitle>Please Submit Your rankings BEFORE the start of the next episode.</QueenSelectionSubTitle>
        <QueenSelectionSubTitle>After that, submissions are CLOSED</QueenSelectionSubTitle>
        {/* <QueenSelectionMainGrid container>
            <QueenSelectionNumbers item xs={0.5}>{1}</QueenSelectionNumbers>
            <QueenSelectionDropDown item xs={11.5}>
                    <FormControl fullWidth>
                        <Select
                            displayEmpty
                            value={one}
                            onChange={handleOne}
                        >
                            <MenuItem value={'Acacia Forgot'}>Acacia Forgot</MenuItem>
                            <MenuItem value={'Arrietty'}>Arrietty</MenuItem>
                            <MenuItem value={'Crystal Envy'}>Crystal Envy</MenuItem>
                            <MenuItem value={'Hormona Lisa'}>Hormona Lisa</MenuItem>
                            <MenuItem value={'Jewels Sparkles'}>Jewels Sparkles</MenuItem>
                            <MenuItem value={'Joella'}>Joella</MenuItem>
                            <MenuItem value={'Kori King'}>Kori King</MenuItem>
                            <MenuItem value={'Lana Ja\'Rae'}>Lana Ja'Rae</MenuItem>
                            <MenuItem value={'Lexi Love'}>Lexi Love</MenuItem>
                            <MenuItem value={'Lucky Starzzz'}>Lucky Starzzz</MenuItem>
                            <MenuItem value={'Lydia B Kollins'}>Lydia B Kollins</MenuItem>
                            <MenuItem value={'Onya Nurve'}>Onya Nurve</MenuItem>
                            <MenuItem value={'Sam Star'}>Sam Star</MenuItem>
                            <MenuItem value={'Suzie Toot'}>Suzie Toot</MenuItem>
                        </Select>
                    </FormControl>
            </QueenSelectionDropDown>
            <QueenSelectionNumbers item xs={0.5}>{2}</QueenSelectionNumbers>
            <QueenSelectionDropDown item xs={11.5}>
                    <FormControl fullWidth>
                        <Select
                            displayEmpty
                            value={two}
                            onChange={handleTwo}
                        >
                            <MenuItem value={'Acacia Forgot'}>Acacia Forgot</MenuItem>
                            <MenuItem value={'Arrietty'}>Arrietty</MenuItem>
                            <MenuItem value={'Crystal Envy'}>Crystal Envy</MenuItem>
                            <MenuItem value={'Hormona Lisa'}>Hormona Lisa</MenuItem>
                            <MenuItem value={'Jewels Sparkles'}>Jewels Sparkles</MenuItem>
                            <MenuItem value={'Joella'}>Joella</MenuItem>
                            <MenuItem value={'Kori King'}>Kori King</MenuItem>
                            <MenuItem value={'Lana Ja\'Rae'}>Lana Ja'Rae</MenuItem>
                            <MenuItem value={'Lexi Love'}>Lexi Love</MenuItem>
                            <MenuItem value={'Lucky Starzzz'}>Lucky Starzzz</MenuItem>
                            <MenuItem value={'Lydia B Kollins'}>Lydia B Kollins</MenuItem>
                            <MenuItem value={'Onya Nurve'}>Onya Nurve</MenuItem>
                            <MenuItem value={'Sam Star'}>Sam Star</MenuItem>
                            <MenuItem value={'Suzie Toot'}>Suzie Toot</MenuItem>
                        </Select>
                    </FormControl>
            </QueenSelectionDropDown>
            <QueenSelectionNumbers item xs={0.5}>{3}</QueenSelectionNumbers>
            <QueenSelectionDropDown item xs={11.5}>
                    <FormControl fullWidth>
                        <Select
                            displayEmpty
                            value={three}
                            onChange={handleThree}
                        >
                            <MenuItem value={'Acacia Forgot'}>Acacia Forgot</MenuItem>
                            <MenuItem value={'Arrietty'}>Arrietty</MenuItem>
                            <MenuItem value={'Crystal Envy'}>Crystal Envy</MenuItem>
                            <MenuItem value={'Hormona Lisa'}>Hormona Lisa</MenuItem>
                            <MenuItem value={'Jewels Sparkles'}>Jewels Sparkles</MenuItem>
                            <MenuItem value={'Joella'}>Joella</MenuItem>
                            <MenuItem value={'Kori King'}>Kori King</MenuItem>
                            <MenuItem value={'Lana Ja\'Rae'}>Lana Ja'Rae</MenuItem>
                            <MenuItem value={'Lexi Love'}>Lexi Love</MenuItem>
                            <MenuItem value={'Lucky Starzzz'}>Lucky Starzzz</MenuItem>
                            <MenuItem value={'Lydia B Kollins'}>Lydia B Kollins</MenuItem>
                            <MenuItem value={'Onya Nurve'}>Onya Nurve</MenuItem>
                            <MenuItem value={'Sam Star'}>Sam Star</MenuItem>
                            <MenuItem value={'Suzie Toot'}>Suzie Toot</MenuItem>
                        </Select>
                    </FormControl>
            </QueenSelectionDropDown>
            <QueenSelectionNumbers item xs={0.5}>{4}</QueenSelectionNumbers>
            <QueenSelectionDropDown item xs={11.5}>
                    <FormControl fullWidth>
                        <Select
                            displayEmpty
                            value={four}
                            onChange={handleFour}
                        >
                            <MenuItem value={'Acacia Forgot'}>Acacia Forgot</MenuItem>
                            <MenuItem value={'Arrietty'}>Arrietty</MenuItem>
                            <MenuItem value={'Crystal Envy'}>Crystal Envy</MenuItem>
                            <MenuItem value={'Hormona Lisa'}>Hormona Lisa</MenuItem>
                            <MenuItem value={'Jewels Sparkles'}>Jewels Sparkles</MenuItem>
                            <MenuItem value={'Joella'}>Joella</MenuItem>
                            <MenuItem value={'Kori King'}>Kori King</MenuItem>
                            <MenuItem value={'Lana Ja\'Rae'}>Lana Ja'Rae</MenuItem>
                            <MenuItem value={'Lexi Love'}>Lexi Love</MenuItem>
                            <MenuItem value={'Lucky Starzzz'}>Lucky Starzzz</MenuItem>
                            <MenuItem value={'Lydia B Kollins'}>Lydia B Kollins</MenuItem>
                            <MenuItem value={'Onya Nurve'}>Onya Nurve</MenuItem>
                            <MenuItem value={'Sam Star'}>Sam Star</MenuItem>
                            <MenuItem value={'Suzie Toot'}>Suzie Toot</MenuItem>
                        </Select>
                    </FormControl>
            </QueenSelectionDropDown>
            <QueenSelectionNumbers item xs={0.5}>{5}</QueenSelectionNumbers>
            <QueenSelectionDropDown item xs={11.5}>
                    <FormControl fullWidth>
                        <Select
                            displayEmpty
                            value={five}
                            onChange={handleFive}
                        >
                            <MenuItem value={'Acacia Forgot'}>Acacia Forgot</MenuItem>
                            <MenuItem value={'Arrietty'}>Arrietty</MenuItem>
                            <MenuItem value={'Crystal Envy'}>Crystal Envy</MenuItem>
                            <MenuItem value={'Hormona Lisa'}>Hormona Lisa</MenuItem>
                            <MenuItem value={'Jewels Sparkles'}>Jewels Sparkles</MenuItem>
                            <MenuItem value={'Joella'}>Joella</MenuItem>
                            <MenuItem value={'Kori King'}>Kori King</MenuItem>
                            <MenuItem value={'Lana Ja\'Rae'}>Lana Ja'Rae</MenuItem>
                            <MenuItem value={'Lexi Love'}>Lexi Love</MenuItem>
                            <MenuItem value={'Lucky Starzzz'}>Lucky Starzzz</MenuItem>
                            <MenuItem value={'Lydia B Kollins'}>Lydia B Kollins</MenuItem>
                            <MenuItem value={'Onya Nurve'}>Onya Nurve</MenuItem>
                            <MenuItem value={'Sam Star'}>Sam Star</MenuItem>
                            <MenuItem value={'Suzie Toot'}>Suzie Toot</MenuItem>
                        </Select>
                    </FormControl>
            </QueenSelectionDropDown>
            <QueenSelectionNumbers item xs={0.5}>{6}</QueenSelectionNumbers>
            <QueenSelectionDropDown item xs={11.5}>
                    <FormControl fullWidth>
                        <Select
                            displayEmpty
                            value={six}
                            onChange={handleSix}
                        >
                            <MenuItem value={'Acacia Forgot'}>Acacia Forgot</MenuItem>
                            <MenuItem value={'Arrietty'}>Arrietty</MenuItem>
                            <MenuItem value={'Crystal Envy'}>Crystal Envy</MenuItem>
                            <MenuItem value={'Hormona Lisa'}>Hormona Lisa</MenuItem>
                            <MenuItem value={'Jewels Sparkles'}>Jewels Sparkles</MenuItem>
                            <MenuItem value={'Joella'}>Joella</MenuItem>
                            <MenuItem value={'Kori King'}>Kori King</MenuItem>
                            <MenuItem value={'Lana Ja\'Rae'}>Lana Ja'Rae</MenuItem>
                            <MenuItem value={'Lexi Love'}>Lexi Love</MenuItem>
                            <MenuItem value={'Lucky Starzzz'}>Lucky Starzzz</MenuItem>
                            <MenuItem value={'Lydia B Kollins'}>Lydia B Kollins</MenuItem>
                            <MenuItem value={'Onya Nurve'}>Onya Nurve</MenuItem>
                            <MenuItem value={'Sam Star'}>Sam Star</MenuItem>
                            <MenuItem value={'Suzie Toot'}>Suzie Toot</MenuItem>
                        </Select>
                    </FormControl>
            </QueenSelectionDropDown>
            <QueenSelectionNumbers item xs={0.5}>{7}</QueenSelectionNumbers>
            <QueenSelectionDropDown item xs={11.5}>
                    <FormControl fullWidth>
                        <Select
                            displayEmpty
                            value={seven}
                            onChange={handleSeven}
                        >
                            <MenuItem value={'Acacia Forgot'}>Acacia Forgot</MenuItem>
                            <MenuItem value={'Arrietty'}>Arrietty</MenuItem>
                            <MenuItem value={'Crystal Envy'}>Crystal Envy</MenuItem>
                            <MenuItem value={'Hormona Lisa'}>Hormona Lisa</MenuItem>
                            <MenuItem value={'Jewels Sparkles'}>Jewels Sparkles</MenuItem>
                            <MenuItem value={'Joella'}>Joella</MenuItem>
                            <MenuItem value={'Kori King'}>Kori King</MenuItem>
                            <MenuItem value={'Lana Ja\'Rae'}>Lana Ja'Rae</MenuItem>
                            <MenuItem value={'Lexi Love'}>Lexi Love</MenuItem>
                            <MenuItem value={'Lucky Starzzz'}>Lucky Starzzz</MenuItem>
                            <MenuItem value={'Lydia B Kollins'}>Lydia B Kollins</MenuItem>
                            <MenuItem value={'Onya Nurve'}>Onya Nurve</MenuItem>
                            <MenuItem value={'Sam Star'}>Sam Star</MenuItem>
                            <MenuItem value={'Suzie Toot'}>Suzie Toot</MenuItem>
                        </Select>
                    </FormControl>
            </QueenSelectionDropDown>
            <QueenSelectionNumbers item xs={0.5}>{8}</QueenSelectionNumbers>
            <QueenSelectionDropDown item xs={11.5}>
                    <FormControl fullWidth>
                        <Select
                            displayEmpty
                            value={eight}
                            onChange={handleEight}
                        >
                            <MenuItem value={'Acacia Forgot'}>Acacia Forgot</MenuItem>
                            <MenuItem value={'Arrietty'}>Arrietty</MenuItem>
                            <MenuItem value={'Crystal Envy'}>Crystal Envy</MenuItem>
                            <MenuItem value={'Hormona Lisa'}>Hormona Lisa</MenuItem>
                            <MenuItem value={'Jewels Sparkles'}>Jewels Sparkles</MenuItem>
                            <MenuItem value={'Joella'}>Joella</MenuItem>
                            <MenuItem value={'Kori King'}>Kori King</MenuItem>
                            <MenuItem value={'Lana Ja\'Rae'}>Lana Ja'Rae</MenuItem>
                            <MenuItem value={'Lexi Love'}>Lexi Love</MenuItem>
                            <MenuItem value={'Lucky Starzzz'}>Lucky Starzzz</MenuItem>
                            <MenuItem value={'Lydia B Kollins'}>Lydia B Kollins</MenuItem>
                            <MenuItem value={'Onya Nurve'}>Onya Nurve</MenuItem>
                            <MenuItem value={'Sam Star'}>Sam Star</MenuItem>
                            <MenuItem value={'Suzie Toot'}>Suzie Toot</MenuItem>
                        </Select>
                    </FormControl>
            </QueenSelectionDropDown>
            <QueenSelectionNumbers item xs={0.5}>{9}</QueenSelectionNumbers>
            <QueenSelectionDropDown item xs={11.5}>
                    <FormControl fullWidth>
                        <Select
                            displayEmpty
                            value={nine}
                            onChange={handleNine}
                        >
                            <MenuItem value={'Acacia Forgot'}>Acacia Forgot</MenuItem>
                            <MenuItem value={'Arrietty'}>Arrietty</MenuItem>
                            <MenuItem value={'Crystal Envy'}>Crystal Envy</MenuItem>
                            <MenuItem value={'Hormona Lisa'}>Hormona Lisa</MenuItem>
                            <MenuItem value={'Jewels Sparkles'}>Jewels Sparkles</MenuItem>
                            <MenuItem value={'Joella'}>Joella</MenuItem>
                            <MenuItem value={'Kori King'}>Kori King</MenuItem>
                            <MenuItem value={'Lana Ja\'Rae'}>Lana Ja'Rae</MenuItem>
                            <MenuItem value={'Lexi Love'}>Lexi Love</MenuItem>
                            <MenuItem value={'Lucky Starzzz'}>Lucky Starzzz</MenuItem>
                            <MenuItem value={'Lydia B Kollins'}>Lydia B Kollins</MenuItem>
                            <MenuItem value={'Onya Nurve'}>Onya Nurve</MenuItem>
                            <MenuItem value={'Sam Star'}>Sam Star</MenuItem>
                            <MenuItem value={'Suzie Toot'}>Suzie Toot</MenuItem>
                        </Select>
                    </FormControl>
            </QueenSelectionDropDown>
            <QueenSelectionNumbers item xs={0.5}>{10}</QueenSelectionNumbers>
            <QueenSelectionDropDown item xs={11.5}>
                    <FormControl fullWidth>
                        <Select
                            displayEmpty
                            value={ten}
                            onChange={handleTen}
                        >
                            <MenuItem value={'Acacia Forgot'}>Acacia Forgot</MenuItem>
                            <MenuItem value={'Arrietty'}>Arrietty</MenuItem>
                            <MenuItem value={'Crystal Envy'}>Crystal Envy</MenuItem>
                            <MenuItem value={'Hormona Lisa'}>Hormona Lisa</MenuItem>
                            <MenuItem value={'Jewels Sparkles'}>Jewels Sparkles</MenuItem>
                            <MenuItem value={'Joella'}>Joella</MenuItem>
                            <MenuItem value={'Kori King'}>Kori King</MenuItem>
                            <MenuItem value={'Lana Ja\'Rae'}>Lana Ja'Rae</MenuItem>
                            <MenuItem value={'Lexi Love'}>Lexi Love</MenuItem>
                            <MenuItem value={'Lucky Starzzz'}>Lucky Starzzz</MenuItem>
                            <MenuItem value={'Lydia B Kollins'}>Lydia B Kollins</MenuItem>
                            <MenuItem value={'Onya Nurve'}>Onya Nurve</MenuItem>
                            <MenuItem value={'Sam Star'}>Sam Star</MenuItem>
                            <MenuItem value={'Suzie Toot'}>Suzie Toot</MenuItem>
                        </Select>
                    </FormControl>
            </QueenSelectionDropDown>
            <QueenSelectionNumbers item xs={0.5}>{11}</QueenSelectionNumbers>
            <QueenSelectionDropDown item xs={11.5}>
                    <FormControl fullWidth>
                        <Select
                            displayEmpty
                            value={eleven}
                            onChange={handleEleven}
                        >
                            <MenuItem value={'Acacia Forgot'}>Acacia Forgot</MenuItem>
                            <MenuItem value={'Arrietty'}>Arrietty</MenuItem>
                            <MenuItem value={'Crystal Envy'}>Crystal Envy</MenuItem>
                            <MenuItem value={'Hormona Lisa'}>Hormona Lisa</MenuItem>
                            <MenuItem value={'Jewels Sparkles'}>Jewels Sparkles</MenuItem>
                            <MenuItem value={'Joella'}>Joella</MenuItem>
                            <MenuItem value={'Kori King'}>Kori King</MenuItem>
                            <MenuItem value={'Lana Ja\'Rae'}>Lana Ja'Rae</MenuItem>
                            <MenuItem value={'Lexi Love'}>Lexi Love</MenuItem>
                            <MenuItem value={'Lucky Starzzz'}>Lucky Starzzz</MenuItem>
                            <MenuItem value={'Lydia B Kollins'}>Lydia B Kollins</MenuItem>
                            <MenuItem value={'Onya Nurve'}>Onya Nurve</MenuItem>
                            <MenuItem value={'Sam Star'}>Sam Star</MenuItem>
                            <MenuItem value={'Suzie Toot'}>Suzie Toot</MenuItem>
                        </Select>
                    </FormControl>
            </QueenSelectionDropDown>
            <QueenSelectionNumbers item xs={0.5}>{12}</QueenSelectionNumbers>
            <QueenSelectionDropDown item xs={11.5}>
                    <FormControl fullWidth>
                        <Select
                            displayEmpty
                            value={twelve}
                            onChange={handleTwelve}
                        >
                            <MenuItem value={'Acacia Forgot'}>Acacia Forgot</MenuItem>
                            <MenuItem value={'Arrietty'}>Arrietty</MenuItem>
                            <MenuItem value={'Crystal Envy'}>Crystal Envy</MenuItem>
                            <MenuItem value={'Hormona Lisa'}>Hormona Lisa</MenuItem>
                            <MenuItem value={'Jewels Sparkles'}>Jewels Sparkles</MenuItem>
                            <MenuItem value={'Joella'}>Joella</MenuItem>
                            <MenuItem value={'Kori King'}>Kori King</MenuItem>
                            <MenuItem value={'Lana Ja\'Rae'}>Lana Ja'Rae</MenuItem>
                            <MenuItem value={'Lexi Love'}>Lexi Love</MenuItem>
                            <MenuItem value={'Lucky Starzzz'}>Lucky Starzzz</MenuItem>
                            <MenuItem value={'Lydia B Kollins'}>Lydia B Kollins</MenuItem>
                            <MenuItem value={'Onya Nurve'}>Onya Nurve</MenuItem>
                            <MenuItem value={'Sam Star'}>Sam Star</MenuItem>
                            <MenuItem value={'Suzie Toot'}>Suzie Toot</MenuItem>
                        </Select>
                    </FormControl>
            </QueenSelectionDropDown>
            <QueenSelectionNumbers item xs={0.5}>{13}</QueenSelectionNumbers>
            <QueenSelectionDropDown item xs={11.5}>
                    <FormControl fullWidth>
                        <Select
                            displayEmpty
                            value={thirtheen}
                            onChange={handleThirteen}
                        >
                            <MenuItem value={'Acacia Forgot'}>Acacia Forgot</MenuItem>
                            <MenuItem value={'Arrietty'}>Arrietty</MenuItem>
                            <MenuItem value={'Crystal Envy'}>Crystal Envy</MenuItem>
                            <MenuItem value={'Hormona Lisa'}>Hormona Lisa</MenuItem>
                            <MenuItem value={'Jewels Sparkles'}>Jewels Sparkles</MenuItem>
                            <MenuItem value={'Joella'}>Joella</MenuItem>
                            <MenuItem value={'Kori King'}>Kori King</MenuItem>
                            <MenuItem value={'Lana Ja\'Rae'}>Lana Ja'Rae</MenuItem>
                            <MenuItem value={'Lexi Love'}>Lexi Love</MenuItem>
                            <MenuItem value={'Lucky Starzzz'}>Lucky Starzzz</MenuItem>
                            <MenuItem value={'Lydia B Kollins'}>Lydia B Kollins</MenuItem>
                            <MenuItem value={'Onya Nurve'}>Onya Nurve</MenuItem>
                            <MenuItem value={'Sam Star'}>Sam Star</MenuItem>
                            <MenuItem value={'Suzie Toot'}>Suzie Toot</MenuItem>
                        </Select>
                    </FormControl>
            </QueenSelectionDropDown>
            <QueenSelectionNumbers item xs={0.5}>{14}</QueenSelectionNumbers>
            <QueenSelectionDropDown item xs={11.5}>
                    <FormControl fullWidth>
                        <Select
                            displayEmpty
                            value={fourteen}
                            onChange={handleFourteen}
                        >
                            <MenuItem value={'Acacia Forgot'}>Acacia Forgot</MenuItem>
                            <MenuItem value={'Arrietty'}>Arrietty</MenuItem>
                            <MenuItem value={'Crystal Envy'}>Crystal Envy</MenuItem>
                            <MenuItem value={'Hormona Lisa'}>Hormona Lisa</MenuItem>
                            <MenuItem value={'Jewels Sparkles'}>Jewels Sparkles</MenuItem>
                            <MenuItem value={'Joella'}>Joella</MenuItem>
                            <MenuItem value={'Kori King'}>Kori King</MenuItem>
                            <MenuItem value={'Lana Ja\'Rae'}>Lana Ja'Rae</MenuItem>
                            <MenuItem value={'Lexi Love'}>Lexi Love</MenuItem>
                            <MenuItem value={'Lucky Starzzz'}>Lucky Starzzz</MenuItem>
                            <MenuItem value={'Lydia B Kollins'}>Lydia B Kollins</MenuItem>
                            <MenuItem value={'Onya Nurve'}>Onya Nurve</MenuItem>
                            <MenuItem value={'Sam Star'}>Sam Star</MenuItem>
                            <MenuItem value={'Suzie Toot'}>Suzie Toot</MenuItem>
                        </Select>
                    </FormControl>
            </QueenSelectionDropDown>
            <QueenSelectionNumbers item xs={2} md={1}>Golden Boot</QueenSelectionNumbers>
            <QueenSelectionDropDown item xs={10} md={11}>
                    <FormControl fullWidth>
                        <Select
                            displayEmpty
                            value={goldenBoot}
                            onChange={handleGoldenBoot}
                        >
                            <MenuItem value={'Acacia Forgot'}>Acacia Forgot</MenuItem>
                            <MenuItem value={'Arrietty'}>Arrietty</MenuItem>
                            <MenuItem value={'Crystal Envy'}>Crystal Envy</MenuItem>
                            <MenuItem value={'Hormona Lisa'}>Hormona Lisa</MenuItem>
                            <MenuItem value={'Jewels Sparkles'}>Jewels Sparkles</MenuItem>
                            <MenuItem value={'Joella'}>Joella</MenuItem>
                            <MenuItem value={'Kori King'}>Kori King</MenuItem>
                            <MenuItem value={'Lana Ja\'Rae'}>Lana Ja'Rae</MenuItem>
                            <MenuItem value={'Lexi Love'}>Lexi Love</MenuItem>
                            <MenuItem value={'Lucky Starzzz'}>Lucky Starzzz</MenuItem>
                            <MenuItem value={'Lydia B Kollins'}>Lydia B Kollins</MenuItem>
                            <MenuItem value={'Onya Nurve'}>Onya Nurve</MenuItem>
                            <MenuItem value={'Sam Star'}>Sam Star</MenuItem>
                            <MenuItem value={'Suzie Toot'}>Suzie Toot</MenuItem>
                        </Select>
                    </FormControl>
            </QueenSelectionDropDown>
            <QueenSelectionNumbers item xs={3.5} md={1.5}>Miss Congeniality</QueenSelectionNumbers>
            <QueenSelectionDropDown item xs={8.5} md={10.5}>
                    <FormControl fullWidth>
                        <Select
                            displayEmpty
                            value={missC}
                            onChange={handleMissC}
                        >
                            <MenuItem value={'Acacia Forgot'}>Acacia Forgot</MenuItem>
                            <MenuItem value={'Arrietty'}>Arrietty</MenuItem>
                            <MenuItem value={'Crystal Envy'}>Crystal Envy</MenuItem>
                            <MenuItem value={'Hormona Lisa'}>Hormona Lisa</MenuItem>
                            <MenuItem value={'Jewels Sparkles'}>Jewels Sparkles</MenuItem>
                            <MenuItem value={'Joella'}>Joella</MenuItem>
                            <MenuItem value={'Kori King'}>Kori King</MenuItem>
                            <MenuItem value={'Lana Ja\'Rae'}>Lana Ja'Rae</MenuItem>
                            <MenuItem value={'Lexi Love'}>Lexi Love</MenuItem>
                            <MenuItem value={'Lucky Starzzz'}>Lucky Starzzz</MenuItem>
                            <MenuItem value={'Lydia B Kollins'}>Lydia B Kollins</MenuItem>
                            <MenuItem value={'Onya Nurve'}>Onya Nurve</MenuItem>
                            <MenuItem value={'Sam Star'}>Sam Star</MenuItem>
                            <MenuItem value={'Suzie Toot'}>Suzie Toot</MenuItem>
                        </Select>
                    </FormControl>
            </QueenSelectionDropDown>
            <QueenSelectionNumbers item xs={4} md={1.5}>Budonka Dunk Tank Lever recipient</QueenSelectionNumbers>
            <QueenSelectionDropDown item xs={8} md={10.5}>
                    <FormControl fullWidth>
                        <Select
                            displayEmpty
                            value={leverQueen}
                            onChange={handleLeverQueen}
                        >
                            <MenuItem value={'Acacia Forgot'}>Acacia Forgot</MenuItem>
                            <MenuItem value={'Arrietty'}>Arrietty</MenuItem>
                            <MenuItem value={'Crystal Envy'}>Crystal Envy</MenuItem>
                            <MenuItem value={'Hormona Lisa'}>Hormona Lisa</MenuItem>
                            <MenuItem value={'Jewels Sparkles'}>Jewels Sparkles</MenuItem>
                            <MenuItem value={'Joella'}>Joella</MenuItem>
                            <MenuItem value={'Kori King'}>Kori King</MenuItem>
                            <MenuItem value={'Lana Ja\'Rae'}>Lana Ja'Rae</MenuItem>
                            <MenuItem value={'Lexi Love'}>Lexi Love</MenuItem>
                            <MenuItem value={'Lucky Starzzz'}>Lucky Starzzz</MenuItem>
                            <MenuItem value={'Lydia B Kollins'}>Lydia B Kollins</MenuItem>
                            <MenuItem value={'Onya Nurve'}>Onya Nurve</MenuItem>
                            <MenuItem value={'Sam Star'}>Sam Star</MenuItem>
                            <MenuItem value={'Suzie Toot'}>Suzie Toot</MenuItem>
                        </Select>
                    </FormControl>
            </QueenSelectionDropDown>
            <QueenSelectionNumbers item xs={4} md={1.5}>Budonka Dunk Tank Lever number</QueenSelectionNumbers>
            <QueenSelectionDropDown item xs={8} md={10.5}>
                    <FormControl fullWidth>
                        <Select
                            displayEmpty
                            value={leverNumber}
                            onChange={handleLeverNumber}
                        >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                            <MenuItem value={8}>8</MenuItem>
                            <MenuItem value={9}>9</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                        </Select>
                    </FormControl>
            </QueenSelectionDropDown>
      </QueenSelectionMainGrid> */}
        <PlayerInfoMainGrid container>
            <PlayerInfoSubmissionGrid item xs={3} md={1}>
                <PlayerInfoSubmissionText>Player Name</PlayerInfoSubmissionText>
            </PlayerInfoSubmissionGrid>
            <PlayerInfoSubmissionGrid item xs={9} md={11}>
                {/* <TextField 
                    placeholder='Name'
                    value={playerName}
                    onChange={(e) => {
                        setPlayerName(e.target.value)
                    }}
                /> */}
            </PlayerInfoSubmissionGrid>
            <PlayerInfoSubmissionGrid item xs={3} md={1}>
                <PlayerInfoSubmissionText>Password</PlayerInfoSubmissionText>
            </PlayerInfoSubmissionGrid>
            <PlayerInfoSubmissionGrid item xs={9} md={2.5}>
                {/* <TextField 
                    placeholder='Password'
                    value={playerPassword}
                    onChange={(e) => {
                        setPlayerPassword(e.target.value)
                    }}
                /> */}
            </PlayerInfoSubmissionGrid>
            <PlayerInfoSubmissionGrid item xs={12} md={8.5}>
                <PlayerInfoSubmissionText>PS: dont use a real password. This is all built by me and not really secure. you will use this password to submit your challenge winners every week</PlayerInfoSubmissionText>
            </PlayerInfoSubmissionGrid>
            {/* <RankingSubmitButton onClick={() => createFile()} variant='contained'>Submit!</RankingSubmitButton> */}
            {error &&
                <PlayerInfoSubmissionGrid item xs={12}>
                    <PlayerInfoSubmissionText color={'red'}>Please fill out all fields</PlayerInfoSubmissionText>
                </PlayerInfoSubmissionGrid>
            }
        </PlayerInfoMainGrid>
      </>
    )
}