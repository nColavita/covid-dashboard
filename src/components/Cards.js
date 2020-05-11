import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

import CardItem from './CardItem';

const Cards = ({ data: { confirmed, deaths, recovered, lastUpdate } }) => {
    if (!confirmed) {
        return '...Loading';
    }

    const dateFormatted = new Date(lastUpdate).toDateString();

    const formattedConfirmed = confirmed.value
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    const formattedRecovered = deaths.value
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    const formattedDead = recovered.value
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return (
        <React.Fragment>
            <CardItem
                cardColor="infected"
                headline="Infected"
                value={formattedConfirmed}
            />
            <CardItem
                cardColor="recovered"
                headline="Recovered"
                value={formattedRecovered}
            />
            <CardItem cardColor="dead" headline="Dead" value={formattedDead} />
        </React.Fragment>
    );
};

const styles = {
    container: {
        marginTop: '100px',
    },
};

export default Cards;
