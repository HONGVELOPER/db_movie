import SeatSelect from '../../components/hong/selectSeat';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Seat = (props) => {

    const [seat, setSeat] = useState(null)

    useEffect(() => {
        async function getSeatInfo() {
            const result = await axios.get('/api/reserve/seatInfo', {
                params: {
                    mtScreenSpace: props.location.state.time.name.split(' ')[0],
                    bCode: props.location.state.branch.code
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