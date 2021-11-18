import React, { useState } from 'react';
import { makeStyles } from "@mui/styles";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
// import Divider from '@mui/material/Divider';

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

const SelectSeat = (props) => {
    console.log(props, 'props !!!!!!!!!!!!!!!!!')
    
    const classes = useStyles()

    const [AdultSeat, setAdultSeat] = useState(0)
    const [childSeat, setChildSeat] = useState(0)

    const handleAdult = (event) => {
        setAdultSeat(event.target.textContent)
        document.getElementById(event.target.id).style.backgroundColor = 'black'
        for (let i = 0; i < 9; i++) {
            if (`Adult-${i}` !== event.target.id) {
                document.getElementById(`Adult-${i}`).style.backgroundColor = 'white'
            }
        }
    }

    const handleChild = (event) => {
        setChildSeat(event.target.textContent)
        document.getElementById(event.target.id).style.backgroundColor = 'black'
        for (let i = 0; i < 9; i++) {
            if (`child-${i}` !== event.target.id) {
                document.getElementById(`child-${i}`).style.backgroundColor = 'white'
            }
        }
    }

    let rowSeat = null

    if (props.seat) {
        let row = props.seat.data[0].MS_ROW
        let count = 0
        rowSeat = props.seat.data.map((seat, idx) => {
            count += 1
            if (row !== seat.MS_ROW) {
                row = seat.MS_ROW
                return (
                    <>
                        <br key={idx} />
                        <span>{seat.MS_ROW}</span>
                        <Button variant="outlined" key={count}>{seat.MS_COL}</Button>
                    </>
                )
            }
            return (
                <>
                    <Button variant="outlined" key={count}>{seat.MS_COL}</Button>
                </>
            )
        })
    }

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
                                <Button id="Adult-0" variant="outlined" onClick={handleAdult} style={{borderRadius: 0, margin: 3, padding: 0, maxWidth: '30px', minWidth: '30px', backgroundColor: 'black'}}>0</Button>
                                <Button id="Adult-1" variant="outlined" onClick={handleAdult} style={{borderRadius: 0, margin: 3, padding: 0, maxWidth: '30px', minWidth: '30px'}}>1</Button>
                                <Button id="Adult-2" variant="outlined" onClick={handleAdult} style={{borderRadius: 0, margin: 3, padding: 0, maxWidth: '30px', minWidth: '30px'}}>2</Button>
                                <Button id="Adult-3" variant="outlined" onClick={handleAdult} style={{borderRadius: 0, margin: 3, padding: 0, maxWidth: '30px', minWidth: '30px'}}>3</Button>
                                <Button id="Adult-4" variant="outlined" onClick={handleAdult} style={{borderRadius: 0, margin: 3, padding: 0, maxWidth: '30px', minWidth: '30px'}}>4</Button>
                                <Button id="Adult-5" variant="outlined" onClick={handleAdult} style={{borderRadius: 0, margin: 3, padding: 0, maxWidth: '30px', minWidth: '30px'}}>5</Button>
                                <Button id="Adult-6" variant="outlined" onClick={handleAdult} style={{borderRadius: 0, margin: 3, padding: 0, maxWidth: '30px', minWidth: '30px'}}>6</Button>
                                <Button id="Adult-7" variant="outlined" onClick={handleAdult} style={{borderRadius: 0, margin: 3, padding: 0, maxWidth: '30px', minWidth: '30px'}}>7</Button>
                                <Button id="Adult-8" variant="outlined" onClick={handleAdult} style={{borderRadius: 0, margin: 3, padding: 0, maxWidth: '30px', minWidth: '30px'}}>8</Button>                       
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
                        <div>
                            <span>
                                {props.data.branch.name}&nbsp;
                                {props.data.movie.name}&nbsp;
                                {props.data.date.name}&nbsp;
                                {props.data.time.name}&nbsp;
                            </span>
                                {/* <Divider orientation="vertical" /> */}
                        </div>
                    </Grid>
                    <Grid item xs={12} style={{border: '1px solid black'}}>
                        <div>
                            <div>{AdultSeat}</div>
                            <div>{childSeat}</div>
                            <div style={{border: '1px solid black', textAlign: 'center'}}>Screen</div>
                        </div>   
                        {rowSeat}
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default SelectSeat;