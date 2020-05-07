import React, { Component } from 'react';

import { fetchCardData } from './api';

import GlobalChart from './components/GlobalChart';
import Cards from './components/Cards';

import './App.css';

class App extends Component {
    state = {
        data: {},
    };

    async componentDidMount() {
        const fetchedCardData = await fetchCardData();
        this.setState({ data: fetchedCardData });

        console.log(this.state.data);
    }

    render() {
        return (
            <div className="App">
                <h1>Covid 19 Dashboard</h1>
                <Cards data={this.state.data} />
                <GlobalChart />
            </div>
        );
    }
}

export default App;
