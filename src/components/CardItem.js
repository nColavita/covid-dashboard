import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

const CardItem = ({ cardColor, headline, value, date }) => {
    return (
        <Grid
            item
            component={Card}
            xs={12}
            md={3}
            style={styles.card}
            className={cardColor}
        >
            <CardContent>
                <Typography variant="h5">{headline}</Typography>
                <Typography variant="h6">{value}</Typography>
            </CardContent>
        </Grid>
    );
};

const styles = {
    card: {
        height: '130px',
    },
};

export default CardItem;
