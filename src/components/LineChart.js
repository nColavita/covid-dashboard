import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({ globalData, type }) => {
    const lineChart = globalData.length ? (
        <Line
            options={{
                elements: {
                    point: {
                        radius: 0,
                    },
                },
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
                    fontColor: type === 'infected' ? '#C0C51C' : '#9C1616',
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
                        borderWidth: 5,
                        borderColor: '#53A8BD',
                        fill: false,
                    },
                    {
                        data: globalData.map(
                            type === 'infected'
                                ? ({ confirmedOutside }) => confirmedOutside
                                : ({ deathsOutside }) => deathsOutside
                        ),
                        label: 'Outside China',
                        borderWidth: 5,
                        borderColor: '#5385BD',
                        fill: false,
                    },
                ],
            }}
        />
    ) : null;

    return (
        <div className="line-chart" style={{ width: '48%' }}>
            {lineChart}
        </div>
    );
};

export default LineChart;
