const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/:search', (req, res) => {
    console.log('hit search');
    console.log(req.params.search);
    axios({
        method: 'GET',
        params: {
            api_key: process.env.GIPHY_API_KEY,
            q: req.params.search,
            limit: 10,
        },
        url: 'http://api.giphy.com/v1/gifs/search'
    }) .then((response) => {
        res.send(response.data)
    }).catch((error)=>{
        console.log(`error on get giphy ${error}`);
    })
})

module.exports = router;