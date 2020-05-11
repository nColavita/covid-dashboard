import React, { useState, useEffect } from 'react';
import { Grid, Card } from '@material-ui/core';
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

    const globalChart = globalData.length ? (
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
            }}
            data={{
                //destructure date from globalData
                labels: globalData.map(({ date }) => date),
                datasets: [
                    {
                        data: globalData.map(
                            ({ confirmedChina }) => confirmedChina
                        ),
                        label: 'Infected - China',
                        borderColor: '#39DCD2',
                        fill: false,
                    },
                    {
                        data: globalData.map(
                            ({ confirmedOutside }) => confirmedOutside
                        ),
                        label: 'Infected - Outside China',
                        borderColor: '#3981DC',
                        fill: false,
                    },
                ],
            }}
        />
    ) : null;

    return (
        <Grid item component={Card} xs={12} md={5}>
            <div>{globalChart}</div>
        </Grid>
    );
};

export default InfectedChart;
