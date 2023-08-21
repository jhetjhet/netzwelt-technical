const { default: axios } = require('axios');
const cors = require('cors')

const express = require('express');
const { arrangeTerritoriesByParent } = require('./util');

const app = express();

const PORT = 8080

app.use(cors()); // default allow all
app.use(express.json());

app.post('/signIn/', async (req, res) => {
    try {
        const resp = await axios.post('https://netzwelt-devtest.azurewebsites.net/Account/SignIn/', req.body);
        return res.send(resp.data);
    } catch (error) {
        return res.status(401).json(error.response.data);
    }
});

app.get('/territories/', async (req, res, next) => {
    try {
        const resp = await axios.get('https://netzwelt-devtest.azurewebsites.net/Territories/All/');
        
        let arrangedTerritories = [];
        arrangeTerritoriesByParent(resp.data.data, arrangedTerritories);
        return res.json(arrangedTerritories);
    } catch (error) {
        next(error);
    }
});

app.listen(PORT, () => {
    console.log(`Server running at port:${PORT}`);
});