import React, { useState } from 'react';
import { makeStyles } from "@mui/styles";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

const useStyles = makeStyles({
    root: {
        border: '1px solid black'
    },
    subHeader: {
        backgroundColor: 'black',
        textAlign: 'center',
        color: 'white'
    },
    button: {
        padding: 0,
        maxWidth: '30px',
        minWidth: '30px',
    }
})

const SelectSeat = () => {

    const classes = useStyles()

    const [normalSeat, setNormalSeat] = useState(0)
    const [childSeat, setChildSeat] = useState(0)

    const handleNormal = (event) => {
        setNormalSeat(event.target.textContent)
        document.getElementById(event.target.id).style.backgroundColor = 'black'
        for (let i = 0; i < 9; i++) {
            if (`normal-${i}` != event.target.id) {
                document.getElementById(`normal-${i}`).style.backgroundColor = 'white'
            }
        }
    }

    const handleChild = (event) => {
        console.log(event)
        setChildSeat(event.target.textContent)
        document.getElementById(event.target.id).style.backgroundColor = 'black'
        for (let i = 0; i < 9; i++) {
            if (`child-${i}` != event.target.id) {
                document.getElementById(`child-${i}`).style.backgroundColor = 'white'
            }
        }
    }

    const seatData = [
        0, 2, -1, 0, 0, 5, 6, 7, 8, 9, 10, -1, 11, 12
    ]


    return (
        <>
            <Container>
                <h1>Select Component</h1>
                <Grid container className={classes.root}>
                    <Grid item xs={12} className={classes.subHeader}>
                        인원 / 좌석
                    </Grid>
                    <Grid item xs={6} style={{padding: 10}}>
                        <div>
                            <span style={{marginLeft: '10px', fontSize: 13}}>일반</span>
                            <span style={{marginLeft: '33px'}}>
                                <Button id="normal-0" variant="outlined" onClick={handleNormal} style={{borderRadius: 0, margin: 3, padding: 0, maxWidth: '30px', minWidth: '30px', backgroundColor: 'black'}}>0</Button>
                                <Button id="normal-1" variant="outlined" onClick={handleNormal} style={{borderRadius: 0, margin: 3, padding: 0, maxWidth: '30px', minWidth: '30px'}}>1</Button>
                                <Button id="normal-2" variant="outlined" onClick={handleNormal} style={{borderRadius: 0, margin: 3, padding: 0, maxWidth: '30px', minWidth: '30px'}}>2</Button>
                                <Button id="normal-3" variant="outlined" onClick={handleNormal} style={{borderRadius: 0, margin: 3, padding: 0, maxWidth: '30px', minWidth: '30px'}}>3</Button>
                                <Button id="normal-4" variant="outlined" onClick={handleNormal} style={{borderRadius: 0, margin: 3, padding: 0, maxWidth: '30px', minWidth: '30px'}}>4</Button>
                                <Button id="normal-5" variant="outlined" onClick={handleNormal} style={{borderRadius: 0, margin: 3, padding: 0, maxWidth: '30px', minWidth: '30px'}}>5</Button>
                                <Button id="normal-6" variant="outlined" onClick={handleNormal} style={{borderRadius: 0, margin: 3, padding: 0, maxWidth: '30px', minWidth: '30px'}}>6</Button>
                                <Button id="normal-7" variant="outlined" onClick={handleNormal} style={{borderRadius: 0, margin: 3, padding: 0, maxWidth: '30px', minWidth: '30px'}}>7</Button>
                                <Button id="normal-8" variant="outlined" onClick={handleNormal} style={{borderRadius: 0, margin: 3, padding: 0, maxWidth: '30px', minWidth: '30px'}}>8</Button>                       
                            </span>
                        </div>
                        <div>
                            <span style={{marginLeft: '10px', fontSize: 13}}>청소년</span>
                            <span style={{marginLeft: '20px'}}>
                                <Button id="child-0" variant="outlined" onClick={handleChild} style={{borderRadius: 0, margin: 3, padding: 0, maxWidth: '30px', minWidth: '30px', backgroundColor: 'black'}}>0</Button>
                                <Button id="child-1" variant="outlined" onClick={handleChild} style={{borderRadius: 0, margin: 3, padding: 0, maxWidth: '30px', minWidth: '30px'}}>1</Button>
                                <Button id="child-2" variant="outlined" onClick={handleChild} style={{borderRadius: 0, margin: 3, padding: 0, maxWidth: '30px', minWidth: '30px'}}>2</Button>
                                <Button id="child-3" variant="outlined" onClick={handleChild} style={{borderRadius: 0, margin: 3, padding: 0, maxWidth: '30px', minWidth: '30px'}}>3</Button>
                                <Button id="child-4" variant="outlined" onClick={handleChild} style={{borderRadius: 0, margin: 3, padding: 0, maxWidth: '30px', minWidth: '30px'}}>4</Button>
                                <Button id="child-5" variant="outlined" onClick={handleChild} style={{borderRadius: 0, margin: 3, padding: 0, maxWidth: '30px', minWidth: '30px'}}>5</Button>
                                <Button id="child-6" variant="outlined" onClick={handleChild} style={{borderRadius: 0, margin: 3, padding: 0, maxWidth: '30px', minWidth: '30px'}}>6</Button>
                                <Button id="child-7" variant="outlined" onClick={handleChild} style={{borderRadius: 0, margin: 3, padding: 0, maxWidth: '30px', minWidth: '30px'}}>7</Button>
                                <Button id="child-8" variant="outlined" onClick={handleChild} style={{borderRadius: 0, margin: 3, padding: 0, maxWidth: '30px', minWidth: '30px'}}>8</Button>                       
                            </span>
                        </div>
                        {/* <Divider orientation="vertical" style={{position: 'relative', bottom: '65px'}} /> */}
                    </Grid>
                    <Grid item xs={6}>
                        check
                    </Grid>
                    {/* <Grid item xs={12} style={{border: '1px solid black'}}>
                        <div>
                            <div>{normalSeat}</div>
                            <div>{childSeat}</div>
                            <div style={{border: '1px solid black', textAlign: 'center'}}>Screen</div>
                            <div className="Seat">
                                {seatData.map((seat) => (
                                    <Button variant="outlined" key={seat} color="secondary" style={{borderRadius: 0, margin: 0.5, padding: 0, maxWidth: '30px', minWidth: '30px', backgroundColor: '#808080'}}>
                                        {seat}
                                    </Button>
                                ))}
                            </div>
                        </div>                    
                    </Grid> */}
                </Grid>
            </Container>
        </>
    )
}

export default SelectSeat;