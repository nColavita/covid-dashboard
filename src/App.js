import React, { Component } from 'react';
import { Container, Grid, Typography, Card } from '@material-ui/core';

import { fetchCardData } from './api';

import Cards from './components/Cards';
import DeathChart from './components/DeathChart';
import InfectedChart from './components/InfectedChart';

import './App.css';

class App extends Component {
    state = {
        data: {},
    };

    async componentDidMount() {
        const fetchedCardData = await fetchCardData();
        this.setState({ data: fetchedCardData });
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
                    <InfectedChart />
                    <DeathChart />
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
