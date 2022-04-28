import axios from 'axios';

export const dolar = axios.create({
    baseURL: "https://economia.awesomeapi.com.br/json/last/",
});

export const getDolar = async () => {
    try {
        const response = await dolar.get('/USDT');
        return response.data;
    } catch (e) {
        console.log('Deu erro no dolar');
    }
}