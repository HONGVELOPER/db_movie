import React, { useState, useEffect } from 'react';
import { makeStyles } from "@mui/styles";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import axios from 'axios';

const useStyles = makeStyles({
    root: {
        paddingTop: '100px',
    },
    grid: {
        border: '1px solid red',
        height: '560px'
    },
    header: {
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center',
    },
    border: {
        border: '1px sold black',
        textAlign: 'left',
        marginBottom: '5px',
    }
})

const Select = (props) => {

    console.log(props, 'props check')
    const classes = useStyles()
    const [movie, setMovie] = useState({
        code: '',
        name: '',
    })
    const [branch, setBranch] = useState({
        code: '',
        name: '',
    })
    const [date, setDate] = useState({
        code: '',
        name: ''
    })
    const [totalDate, setTotalDate] = useState([])

    const [time, setTime] = useState({
        code: '',
        name: '',
    })
    const [totalTime, setTotalTime] = useState([])

    let movieNames = []
    let locations = []

    if (props.data) {
        movieNames = props.data.data.movie
        locations = props.data.data.branch
    }

    useEffect(() => {
        console.log('USE EFFECT 접근 ~')
        if (movie.code && branch.code && !date.code) {
            console.log('if 접근')
            getDate()
        } else if (movie.code && branch.code & date.code) {
            console.log('else if 접근')
            getTime()
        }
    }, [movie, branch, date, time])

    const handleMovie = (event) => {
        setMovie((prevState) => {
            return {
                ...prevState,
                code: event.target.id,
                name: event.target.textContent
            }
        })
    }

    const handlebranch = (event) => {
        setBranch((prevState) => {
            return {
                ...prevState,
                code: event.target.id,
                name: event.target.textContent
            }
        })
    }
    const handleDate = (event) => {
        setDate((prevState) => {
            return {
                ...prevState,
                code: event.target.id,
                name: event.target.textContent
            }
        })
    }
    const handleTime = (event) => {
        setTime((prevState) => {
            return {
                ...prevState,
                code: event.target.id,
                name: event.target.textContent
            }
        })
    }

    const apiTest = async () => {
        const result = await axios.post('/api/reserve/test', {
            movie: movie,
            branch: branch,
            date: date,
            time: time
        })
        if (result.status === 200) {
            alert('예매되었습니다.')
        }
    }

    const getDate = async () => {
        const dateInfo = await axios.get('/api/reserve/date', {
            params: {
                movieCode: movie.code,
                branchCode: branch.code,
            }
        })
        setTotalDate(dateInfo.data)
    }

    const getTime = async () => {
        const timeInfo = await axios.get('/api/reserve/time', {
            params: {
                movieCode: movie.code,
                branchCode: branch.code,
                theaterDate: date.name,
            }
        })
        console.log(timeInfo)
        setTotalTime(timeInfo.data)
        console.log(totalTime,' TOTAL')
    }

    return (
        <>
            <Container className={classes.root}>
                <h1>Movie Page</h1>
                <Grid container>
                    <Grid item xs={3} className={classes.grid}>
                        <div className={classes.header}>영화</div>
                        <div style={{padding: '10px'}}>
                            <div className={classes.border}>
                                <Button>예매율순</Button>
                                <Button style={{marginLeft: '15px'}}>가나다순</Button>
                            </div>
                            <div style={{overflow: 'auto', height: '470px'}}>
                                {movieNames.map((movieName) => (
                                    <Button key={movieName.M_CODE} id={movieName.M_CODE} color="secondary" style={{display: 'block'}} onClick={handleMovie}>
                                        {movieName.M_NAME}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={2} className={classes.grid}>
                        <div className={classes.header}>극장</div>
                        <div style={{padding: '10px'}}>
                            <div style={{overflow: 'auto', height: '515px'}}>
                                {locations.map((loc) => (
                                    <Button key={loc.B_CODE} id={loc.B_CODE} color="secondary" style={{display: 'block'}} onClick={handlebranch}>
                                        {loc.B_NAME}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={2} className={classes.grid}>
                        <div className={classes.header}>날짜</div>
                        <div style={{padding: '10px'}}>
                            <div style={{overflow: 'auto', height: '515px'}}>
                                {totalDate.map((td) => (
                                    <Button key={td.MT_CODE} id={td.MT_CODE} color="secondary" style={{display: 'block'}} onClick={handleDate}>
                                        {td.MT_RUNNING_DATE}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={4} className={classes.grid}>
                        <div className={classes.header}>시간</div>
                        <div style={{padding: '10px'}}>
                            {totalTime.map((tt) => (
                                <Button key={tt.MT_CODE} color="secondary" id={tt.MT_CODE} onClick={handleTime}>
                                    {tt.MT_SCREEN_SPACE} {tt.MT_START_TIME} ({tt.MT_AVAIL_SEAT} / {tt.MT_TOTAL_SEAT}) 
                                </Button>
                            ))}
                        </div>
                    </Grid>
                </Grid>
                <Button onClick={apiTest}>API TEST</Button>
                <div>영화 : {movie.name} | {movie.code}</div>
                <div>극장 : {branch.name} | {branch.code}</div>
                <div>일시 : {date.name} | {date.code}</div>
                <div>시간 : {time.name} | {time.code}</div> 
            </Container>
        </>
    )
}

export default Select;