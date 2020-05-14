import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({ globalData, type }) => {
    const lineChart = globalData.length ? (
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
                    text: type === 'infected' ? 'Infected' : 'Deaths',
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
                            type === 'infected'
                                ? ({ confirmedChina }) => confirmedChina
                                : ({ deathsChina }) => deathsChina
                        ),
                        label: 'China',
                        borderColor:
                            type === 'infected' ? '#fff23e' : '#ff3e3e',
                        fill: false,
                    },
                    {
                        data: globalData.map(
                            type === 'infected'
                                ? ({ confirmedOutside }) => confirmedOutside
                                : ({ deathsOutside }) => deathsOutside
                        ),
                        label: 'Outside China',
                        borderColor:
                            type === 'infected' ? '#cac360' : '#c76757',
                        fill: false,
                    },
                ],
            }}
        />
    ) : null;

    return <div style={{ width: '48%' }}>{lineChart}</div>;
};

export default LineChart;
