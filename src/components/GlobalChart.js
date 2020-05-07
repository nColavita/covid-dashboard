import React, { useState, useEffect } from 'react';
import { fetchGlobalData } from '../api';

const GlobalChart = ({ data }) => {
    const [globalData, setGlobalData] = useState({});

    useEffect(() => {
        const fetchAPI = async () => {
            setGlobalData(await fetchGlobalData());
        };

        fetchAPI();
    }, []);

    return (
        <div>
            <h1>Global Chart</h1>
        </div>
    );
};

export default GlobalChart;
