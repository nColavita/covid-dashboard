import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

const Cards = ({ data: { confirmed, deaths, recovered, lastUpdate } }) => {
    if (!confirmed) {
        return '...Loading';
    }
    const dateFormatted = new Date(lastUpdate).toDateString();
    return (
        <React.Fragment>
            <Grid
                item
                component={Card}
                xs={12}
                md={3}
                style={styles.card}
                className="infected"
            >
                <CardContent>
                    <Typography variant="h5">Infected</Typography>
                    <Typography variant="h6">{confirmed.value}</Typography>
                    <Typography color="textSecondary">{`As of ${dateFormatted}`}</Typography>
                </CardContent>
            </Grid>
            <Grid
                item
                component={Card}
                xs={12}
                md={3}
                style={styles.card}
                className="recovered"
            >
                <CardContent>
                    <Typography variant="h5">Recovered</Typography>
                    <Typography variant="h6">{recovered.value}</Typography>
                    <Typography color="textSecondary">{`As of ${dateFormatted}`}</Typography>
                </CardContent>
            </Grid>
            <Grid
                item
                component={Card}
                xs={12}
                md={3}
                style={styles.card}
                className="dead"
            >
                <CardContent>
                    <Typography variant="h5">Dead</Typography>
                    <Typography variant="h6">{deaths.value}</Typography>
                    <Typography color="textSecondary">{`As of ${dateFormatted}`}</Typography>
                </CardContent>
            </Grid>
        </React.Fragment>
    );
};

const styles = {
    container: {
        marginTop: '100px',
    },
    card: {
        margin: '0 2%',
        height: '185px',
    },
};

export default Cards;
