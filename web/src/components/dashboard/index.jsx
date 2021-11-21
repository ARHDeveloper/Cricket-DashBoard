import axios from 'axios';
import { useState, useEffect } from "react"
import { baseUrl } from "./../../core"

import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import io from 'socket.io-client';

function Scoreboard() {
    const [score, setScore] = useState({
        teamOne: "",
        teamTwo: "",
        bat: "",
        score: "",
        wicket: "",
        over: ""
    });

    useEffect(() => {
        axios.get(`${baseUrl}/api/v1/score`)
            .then((res) => {
                console.log("res +++: ", res.data);
                setScore(res.data)
            })
    }, [])

    const submit = () => {
        axios.post(`${baseUrl}/api/v1/score`, score)
            .then((res) => {
                console.log("res: ", res.data);
            })
    }

    return (
        <div style={{ margin: "0.5rem" }}>

            <h1 style={{textAlign:'center', 
            textDecorationLine:'underline', color:'#0d6efd', fontStyle:'italic'}}>
                 ScoreBoard Admin Panel </h1>
<br /><br />
            <Box style={{textAlign:'center', borderRadius:'40px'}}
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >

                <TextField
                    label="Team 1"
                    variant="standard"
                    value={score.teamOne}
                    onChange={(e) => {
                        setScore((prev) => {
                            return { ...prev, teamOne: e.target.value }
                        })
                    }}
                    placeholder="Enter Team Name"
                />

                <TextField
                    label="Team 2"
                    variant="standard"
                    value={score.teamTwo}
                    onChange={(e) => {
                        setScore((prev) => {
                            return { ...prev, teamTwo: e.target.value }
                        })
                    }}
                    placeholder="Enter Team Name"
                />
                <TextField
                    label="Bating Team"
                    variant="standard"
                    value={score.bat}
                    onChange={(e) => {
                        setScore((prev) => {
                            return { ...prev, bat: e.target.value }
                        })
                    }}
                    placeholder="Batting Team"
                />
                <TextField
                    label="Runs/Score"
                    variant="standard"
                    type="number"
                    value={score.score}
                    onChange={(e) => {
                        setScore((prev) => {
                            return { ...prev, score: e.target.value }
                        })
                    }}
                    placeholder="Scores"
                /> 
                <TextField
                    label="Wicket"
                    variant="standard"
                    type="number"
                    value={score.wicket}
                    onChange={(e) => {
                        setScore((prev) => {
                            return { ...prev, wicket: e.target.value }
                        })
                    }}
                    placeholder="Wickets"
                />
                <TextField
                    label="Over"
                    variant="standard"
                    type="number"
                    value={score.over}
                    onChange={(e) => {
                        setScore((prev) => {
                            return { ...prev, over: e.target.value }
                        })
                    }}
                    placeholder="Overs"
                /> <br /><br /><br />
               
                <Button variant="contained" onClick={submit}>UPDATE ScoreBoard</Button>
                
            </Box>

        </div>
    );
}

export default Scoreboard;