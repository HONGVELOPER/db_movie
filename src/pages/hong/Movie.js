import Select from '../../components/hong/select';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Movie = () => {

    const [data, setData] = useState(null)

    useEffect(() => {
        async function getMovieInfo() {
            const result = await axios.get('api/reserve/getInfo')
            setData(result)
        }
        getMovieInfo()
    }, [])

    return (
        <>
            <Select data={data} />
        </>
    )
}

export default Movie;