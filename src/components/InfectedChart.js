import React, { useState, useEffect } from 'react';
import { fetchGlobalData } from '../api';
import { Line } from 'react-chartjs-2';

const InfectedChart = () => {
    const [globalData, setGlobalData] = useState({});

    useEffect(() => {
        const fetchAPI = async () => {
            setGlobalData(await fetchGlobalData());
        };

        fetchAPI();
    }, []);

    const infectedChart = globalData.length ? (
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
                    text: 'Infected',
                    fontSize: 22,
                },
                legend: {
                    position: 'right',
                },
            }}
            data={{
                //destructure date from globalData
                labels: globalData.map(({ date }) => date),
                datasets: [
                    {
                        data: globalData.map(
                            ({ confirmedChina }) => confirmedChina
                        ),
                        label: 'China',
                        borderColor: '#fff23e',
                        fill: false,
                    },
                    {
                        data: globalData.map(
                            ({ confirmedOutside }) => confirmedOutside
                        ),
                        label: 'Outside China',
                        borderColor: '#cac360',
                        fill: false,
                    },
                ],
            }}
        />
    ) : null;

    return <div style={{ width: '48%' }}>{infectedChart}</div>;
};

export default InfectedChart;
