import axios from 'axios';

const api = "https://restcountries.eu/rest";

export default {
    search(type, value) {
        // https://restcountries.eu/rest/v2/name/denmark
        // https://restcountries.eu/rest/v2/capital/paris
        // https://restcountries.eu/rest/v2/lang/en
        // https://restcountries.eu/rest/v2/currency/dkk

        const url = {
            country: `${api}/v2/name/${value}`,
            capital: `${api}/v2/capital/${value}`,
            language: `${api}/v2/lang/${value}`,
            currency: `${api}/v2/currency/${value}` 
        };

        return axios.get(url[type]).then(response => response.data);
    }
}
