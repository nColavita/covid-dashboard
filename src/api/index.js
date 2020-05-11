import axios from 'axios';

let baseURL = 'https://covid19.mathdro.id/api';

export const fetchCardData = async () => {
    try {
        const {
            data: { confirmed, recovered, deaths, lastUpdate },
        } = await axios.get(baseURL);

        return { confirmed, recovered, deaths, lastUpdate };
    } catch (err) {
        console.log(err);
    }
};

export const fetchGlobalData = async () => {
    try {
        const { data } = await axios.get(`${baseURL}/daily`);
        // console.log(data);
        // return new object for linechart
        const modifiedData = data.map((daily) => ({
            confirmedChina: daily.confirmed.china,
            confirmedOutside: daily.confirmed.outsideChina,
            deathsChina: daily.deaths.china,
            deathsOutside: daily.deaths.outsideChina,
            date: daily.reportDate.slice(5, 10),
        }));
        console.log(modifiedData);
        return modifiedData;
    } catch (err) {
        console.log(err);
    }
};
