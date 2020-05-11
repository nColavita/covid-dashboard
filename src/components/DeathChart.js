import React, { useState, useEffect } from 'react';
import { Grid, Card } from '@material-ui/core';
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
                        data: globalData.map(({ deathsChina }) => deathsChina),
                        label: 'Deaths - China',
                        borderColor: '#ff3e3e',
                        fill: false,
                    },
                    {
                        data: globalData.map(
                            ({ deathsOutside }) => deathsOutside
                        ),
                        label: 'Deaths - Outside China',
                        borderColor: '#9e1d1d',
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

export default DeathChart;
