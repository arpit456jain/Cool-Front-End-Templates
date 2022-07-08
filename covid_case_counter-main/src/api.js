import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';


const datafetching = async (country) => {
    let countryurl = url;

    if (country) {
        countryurl = `${url}/countries/${country}`
    }

    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(countryurl);

        return { confirmed, recovered, deaths, lastUpdate }
    } catch (error) {
        return error;
    }
};


export const fetchCountries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`);

        return countries.map((country) => country.name);
    } catch (error) {
        return error;
    }
};

export default datafetching;