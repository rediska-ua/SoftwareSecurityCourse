const axios = require("axios");

const initHeaders = {
    'content-type': 'application/x-www-form-urlencoded',
};

const options = {
    client_id: 'JIvCO5c2IBHlAe2patn6l6q5H35qxti0',
    client_secret: 'ZRF8Op0tWM36p1_hxXTU-B0K_Gq_-eAVtlrQpY24CasYiDmcXBhNS6IJMNcz1EgB',
    audience: 'https://kpi.eu.auth0.com/api/v2/',
    grant_type: 'client_credentials'
}

const getToken = async () => {
    const { data } = await axios.post('https://kpi.eu.auth0.com/oauth/token', options, { initHeaders })
        .catch((err) => { console.log(err); });

    return data.access_token;
}

const createUser = async () => {
    const headers = {
        'content-type': 'application/json',
        'Authorization': `Bearer ${await getToken()}`,
    }
    console.log(headers);
    const body = {
        'email': 'maxsheyko201@gmail.com',
        'password': 'MyVeryGoodPassword2023',
        'connection': 'Username-Password-Authentication'
    }

    const { data } = await axios.post('https://kpi.eu.auth0.com/api/v2/users', body, { headers })
        .catch((err) => { console.log(err); });
    return data;
}

createUser().then(r => console.log(r));


