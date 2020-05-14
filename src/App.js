import React, { Component } from 'react';
import { Container, Grid, Typography, Card } from '@material-ui/core';

import { fetchCardData, fetchGlobalData } from './api';

import Cards from './components/Cards';
import LineChart from './components/LineChart';
// import DeathChart from './components/DeathChart';
// import InfectedChart from './components/InfectedChart';

import './App.css';

class App extends Component {
    state = {
        data: {},
        globalData: {},
    };

    async componentDidMount() {
        const fetchedCardData = await fetchCardData();
        const fetchedGlobalData = await fetchGlobalData();

        this.setState({ data: fetchedCardData });
        this.setState({ globalData: fetchedGlobalData });
    }

    render() {
        const dateFormatted = new Date(
            this.state.data.lastUpdate
        ).toDateString();

        return (
            <Container className="App">
                <div className="headline">
                    <Typography color="textPrimary" variant="h2">
                        Covid-19
                    </Typography>
                    <Typography color="textPrimary" variant="h5">
                        Global Watch
                    </Typography>
                    <Typography color="textPrimary" paragraph="true">
                        As of {dateFormatted}
                    </Typography>
                    <Typography color="textSecondary">
                        Johns Hopkins University
                    </Typography>
                </div>
                <Grid container>
                    <Cards data={this.state.data} />
                </Grid>
                <div style={styles.chartContainer}>
                    <LineChart
                        globalData={this.state.globalData}
                        type={'infected'}
                    />
                    <LineChart
                        globalData={this.state.globalData}
                        type={'deaths'}
                    />
                </div>
            </Container>
        );
    }
}

const styles = {
    chartContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        margin: '50px 0',
    },
};

export default App;
