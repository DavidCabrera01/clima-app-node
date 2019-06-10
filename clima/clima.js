const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=0179176a492dd2e62bed546321988602&units=metric`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}