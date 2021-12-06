import React, { useState, useEffect } from 'react';
import { makeStyles } from "@mui/styles";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { loginState, qrState } from "../../loginState";
import { useRecoilState } from "recoil";
import { useHistory } from "react-router";

const useStyles = makeStyles({
    root: {
        paddingTop: '50px',
    },
    grid: {
        border: '1px solid black',
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
    },
    navBar: {
        backgroundColor: 'black',
        color: 'white',
        height: '150px',
        paddingTop: '20px',
        marginTop: '10px'
    },
    select: {
        paddingTop: '10px',
        fontSize: '23px',
    }
})

const Select = (props) => {
    // console.log(props, 'moive component props check')
    const classes = useStyles()
    const history = useHistory();
    
    const [isLogin, setIsLogin] = useRecoilState(loginState);
    const [qrCheck, setQrCheck] = useRecoilState(qrState);

    const [movie, setMovie] = useState({
        code: '',
        name: '',
        age: '',
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
        if (!isLogin.email || !qrCheck.safe) {
            alert('비정상적인 접근입니다.')
            history.push("./")
        }
        if (movie.code && branch.code && !date.code) {
            getDate()
        } else if (movie.code && branch.code && date) {
            getTime()
        } 
    }, [movie, branch, date, time])

    const handleMovie = (event) => {
        setMovie((prevState) => {
            if (event.target.id.split('/')[1] === '-1') {
                return {
                    ...prevState,
                    code: event.target.id.split('/')[0],
                    name: event.target.textContent,
                    age: '없음',
                }
            } else {
                return {
                    ...prevState,
                    code: event.target.id.split('/')[0],
                    name: event.target.textContent,
                    age: event.target.id.split('/')[1],
                }
            }
        })
    }
    const handleBranch = (event) => {
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
        setTotalTime(timeInfo.data)
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
                                    <Button key={movieName.M_CODE} id={`${movieName.M_CODE}/${movieName.M_AGE_LIMIT}`}  color="secondary" style={{display: 'block'}} onClick={handleMovie}>
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
                                    <Button key={loc.B_CODE} id={loc.B_CODE} color="secondary" style={{display: 'block'}} onClick={handleBranch}>
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
                                <Button key={tt.MT_CODE} id={tt.MT_CODE} color="secondary" onClick={handleTime}>
                                    {tt.MT_SCREEN_SPACE} {tt.MT_START_TIME} ({tt.MT_AVAIL_SEAT} / {tt.MT_TOTAL_SEAT}) 
                                </Button>
                            ))}
                        </div>
                    </Grid>
                </Grid>
            </Container>
            <div className={classes.navBar}>
                <Container>
                    <Grid container>
                        <Grid item xs={2}>
                            <div style={{height: '100px', borderRight: '1px solid white', marginLeft: '20%'}}>
                                <div>예매정보</div>
                                <div>제목 : {movie.name}</div>
                                <div>나이 제한 : {movie.age}</div>
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div style={{height: '100px', borderRight: '1px solid white', marginLeft: '20%'}}>
                                <div>극장 : {branch.name}</div>
                                <div>일시 : {date.name} {time.name.split(' ')[2]}</div>
                                <div>상영관 : {time.name.split(' ')[0]} {time.name.split(' ')[1]}</div>
                            </div>
                        </Grid>
                        <Grid item xs={7} style={{color: '#808080'}}>
                            <div style={{paddingTop: '10px', marginLeft: '5%'}}>
                                <ArrowForwardIosIcon />
                                <span className={classes.select}>&nbsp;좌석 선택&nbsp;</span>
                                <ArrowForwardIosIcon />
                                <span className={classes.select}>&nbsp;결제&nbsp;</span>
                                <Button variant="contained" color="error" style={{maxWidth: '100px', minWidth: '100px', marginLeft: '35%', borderRadius: 0, minHeight: '100px', maxHeight: '100px'}}>
                                    <Link style={{textDecoration: 'none'}} to={{
                                        pathname: "/movie/seat",
                                        state: {
                                            movie : movie,
                                            branch: branch,
                                            date: date,
                                            time: time,
                                            email: isLogin.email
                                        }
                                    }}>
                                        좌석선택
                                    </Link>
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    )
}

export default Select;