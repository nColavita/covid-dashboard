import React, { useState, useEffect } from 'react';
import { fetchGlobalData } from '../api';
import { Line } from 'react-chartjs-2';

const DeathChart = () => {
    const [globalData, setGlobalData] = useState({});

    useEffect(() => {
        const fetchAPI = async () => {
            setGlobalData(await fetchGlobalData());
        };

        fetchAPI();
    }, []);

    const deathChart = globalData.length ? (
        <Line
            options={{
                scales: {
                    xAxes: [
                        {
                            gridLines: {
                                display: false,
                            },
                        },
                    ],
                },
                title: {
                    display: true,
                    text: 'Deaths',
                },
            }}
            data={{
                //destructure date from globalData
                labels: globalData.map(({ date }) => date),
                datasets: [
                    {
                        data: globalData.map(({ deathsChina }) => deathsChina),
                        label: 'China',
                        borderColor: '#ff3e3e',
                        fill: false,
                    },
                    {
                        data: globalData.map(
                            ({ deathsOutside }) => deathsOutside
                        ),
                        label: 'Outside China',
                        borderColor: '#c76757',
                        fill: false,
                    },
                ],
            }}
        />
    ) : null;

    return <div>{deathChart}</div>;
};

export default DeathChart;
