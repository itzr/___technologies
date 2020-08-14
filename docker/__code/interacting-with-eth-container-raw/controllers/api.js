const axios = require('axios');

/**
 * GET /api/infura
 * Infura API example.
 */
exports.getInfura = async (req, res, next) => {
    const apiKey = process.env.INFURA_PROJECT_ID;
    axios.post(`https://mainnet.infura.io/v3/${apiKey}`,
        {
            "jsonrpc": "2.0",
            "id": 1,
            "method": "eth_blockNumber"
        },
        {
        headers: {
            "Content-Type": "application/json",
        },
        params: []
    })
        .then((response) => {
            console.log(response.data);
            res.send('done.')
        })
        .catch((err) => {
            next(new Error(JSON.stringify(err)))
        });
};
