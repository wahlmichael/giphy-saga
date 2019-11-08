const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/:search', (req, res) => {
    axios({
        method: 'GET',
        params: {
            api_key: process.env.GIPHY_API_KEY,
            limit: 10,
            q: req.params.search,

        },
        url: 'api.giphy.com/v1/gifs/search'
    }) .then((response) => {
        res.send(response.data.data)
    })
})

module.exports = router;