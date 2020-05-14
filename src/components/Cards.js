import React from 'react';

import CardItem from './CardItem';

const Cards = ({ data: { confirmed, deaths, recovered, lastUpdate } }) => {
    if (!confirmed) {
        return '...Loading';
    }

    const valueFormatted = (data) => {
        return data.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    return (
        <React.Fragment>
            <CardItem
                cardColor="infected"
                headline="Infected"
                value={valueFormatted(confirmed)}
            />
            <CardItem
                cardColor="recovered"
                headline="Recovered"
                value={valueFormatted(recovered)}
            />
            <CardItem
                cardColor="dead"
                headline="Deaths"
                value={valueFormatted(deaths)}
            />
        </React.Fragment>
    );
};

export default Cards;
