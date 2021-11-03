import React, {useState} from 'react';
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

const Select = () => {

    const classes = useStyles()
    const [movie, setMovie] = useState(null)
    const [theater, setTheater] = useState(null)
    const [date, setDate] = useState(null)
    const [time, setTime] = useState(null)

    const movieNames = [
        'Oliver Hansen',
        'Van Henry',
        'April Tucker',
        'Ralph Hubbard',
        'Omar Alexander',
        'Carlos Abbott',
        'Miriam Wagner',
        'Bradley Wilkerson',
        'Virginia Andrews',
        'Kelly Snyder',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
    ]

    const locations = [
        '서울', '경기', '인천', '강원', '대전/충청', '대구', '부산/울산', '경상', '광주/전라/제주'
    ]

    const totalDate = ['3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15' ,'16', '17', '18', '19', '20', '21', '22']

    const movieTime = ['12:00', '15:05', '18:10', '21:15']

    const handleMovie = (event) => {
        console.log(event.target.textContent)
        setMovie(event.target.textContent)
    }

    const handleTheater = (event) => {
        setTheater(event.target.textContent)
    }
    const handleDate = (event) => {
        setDate(event.target.textContent)
    }
    const handleTime = (event) => {
        setTime(event.target.textContent)
    }

    const apiTest = async () => {
        const result = await axios.post('/api/reserve/test', {
            movie: movie,
            theater: theater,
            date: date,
            time: time
        })
        if (result.status === 200) {
            alert('예매되었습니다.')
        }
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
                                    <Button key={movieName} color="secondary" style={{display: 'block'}} onClick={handleMovie}>
                                        {movieName}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={2} className={classes.grid}>
                        <div className={classes.header}>극장</div>
                        <div style={{padding: '10px'}}>
                            <div style={{overflow: 'auto', height: '515px'}}>
                                {locations.map((location) => (
                                    <Button key={location} color="secondary" style={{display: 'block'}} onClick={handleTheater}>
                                        {location}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={2} className={classes.grid}>
                        <div className={classes.header}>날짜</div>
                        <div style={{padding: '10px'}}>
                            <div style={{overflow: 'auto', height: '515px'}}>
                                {totalDate.map((datecheck) => (
                                    <Button key={datecheck} color="secondary" style={{display: 'block'}} onClick={handleDate}>
                                        {datecheck}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={4} className={classes.grid}>
                        <div className={classes.header}>시간</div>
                        <div style={{padding: '10px'}}>
                            <div>2D 1관 3층 (총 140석)</div>
                            {movieTime.map((mt) => (
                                <Button key={mt} color="secondary" onClick={handleTime}>
                                    {mt} 140석
                                </Button>   
                            ))}
                        </div>
                    </Grid>
                </Grid>
                <Button onClick={apiTest}>API TEST</Button>
                <div>{movie}</div>
                <div>{theater}</div>
                <div>{date}</div>
                <div>{time}</div>
                
            </Container>
        </>
    )
}

export default Select;