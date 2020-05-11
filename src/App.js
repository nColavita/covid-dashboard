import React, { Component } from 'react';
import { Grid, Typography } from '@material-ui/core';

import { fetchCardData } from './api';

import InfectedChart from './components/InfectedChart';
import DeathChart from './components/DeathChart';
import Cards from './components/Cards';

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
        return (
            <div className="App">
                <div className="headline">
                    <Typography color="textPrimary" variant="h2">
                        Covid-19
                    </Typography>
                    <Typography color="textPrimary" variant="h5">
                        Global Watch
                    </Typography>
                    <Typography color="textSecondary">
                        Johns Hopkins University
                    </Typography>
                </div>
                <Grid
                    container
                    justify="center"
                    style={{ marginBottom: '50px', marginTop: '50px' }}
                >
                    <Cards data={this.state.data} />
                </Grid>
                <Grid container justify="center">
                    <InfectedChart />
                    <DeathChart />
                </Grid>
            </div>
        );
    }
}

export default App;
