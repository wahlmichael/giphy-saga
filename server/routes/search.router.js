const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/:search', (req, res) => {
    console.log('in GET /search');
    axios({
        method: 'GET',
        params: {
            api_key: process.env.GIPHY_API_KEY,
            limit: 10,
            q: req.params.search,

        },
        url: 'http://api.giphy.com/v1/gifs/search'
    }) .then((response) => {
        res.send(response.data.data)
    }) .catch((error) => {
        console.log('error in get /search', error);
        res.sendStatus(500)
    })
})

module.exports = router;