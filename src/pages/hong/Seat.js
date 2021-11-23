import SeatSelect from '../../components/hong/selectSeat';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Seat = (props) => {

    const [seat, setSeat] = useState(null)

    useEffect(() => {
        async function getSeatInfo() {
            const result = await axios.get('/api/reserve/seatInfo', {
                params: {
                    mtCode: props.location.state.date.code
                }
            })
            setSeat(result)
        }
        getSeatInfo()
    }, [])
    
    return (
        <>
            <h1>Seat Page</h1>
            <SeatSelect data={props.location.state} seat={seat} />
        </>
    )
}

export default Seat;