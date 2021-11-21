import axios from 'axios';
import { useState, useEffect } from "react"
import { baseUrl } from "./../../core"

import Stack from '@mui/material/Stack';
import io from 'socket.io-client';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function Dashboard() {

    const [score, setScore] = useState({})


    useEffect(() => {
        axios.get(`${baseUrl}/api/v1/score`)
            .then((res) => {
                console.log("res +++: ", res.data);
                setScore(res.data)
            })
    }, [])

    useEffect(() => {
        const socket = io("http://localhost:5001"); // to connect with locally running Socker.io server

        socket.on('connect', function () {
            console.log("connected to server")
        });
        socket.on('disconnect', function (message) {
            console.log("disconnected from server: ", message);
        });
        socket.on('SCORE', function (data) {
            console.log(data);
            setScore(data)
        });

        return () => {
            socket.close();
        };
    }, []);




    return (
        <div style={{ margin: "1rem" }}>

            <h1 style={{textAlign:'center', 
            textDecorationLine:'underline', color:'#0d6efd', fontStyle:'italic'}}>
             Live ScoreBoard! </h1>


            <Stack spacing={2} direction="column" >
<br />
                <Card sx={{ minWidth: 275 }}>
                    <CardContent style={{textAlign:'center'}}>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {score?.teamOne} VS. {score?.teamTwo} (Bat {score.bat})
                        </Typography>
<br />

                        <Typography variant="h5" component="div">
                            {score?.score} / {score?.wicket}
                        </Typography>
<br />

                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Over: {score.over}
                        </Typography>
<br />

                        <Typography variant="body2">
                            Commentry: <b> {score?.comentry || "Nasser Hussain & Shane Watson"}</b>
                        </Typography>
                    </CardContent>
                    {/* <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions> */}
                </Card>
            </Stack>


        </div>
    );
}

export default Dashboard;