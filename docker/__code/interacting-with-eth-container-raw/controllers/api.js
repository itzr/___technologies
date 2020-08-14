const axios = require('axios');
const Web3 = require('web3');
const config = require('../config.json');

const fs = require('fs');

// const walletPrivateKey = process.env.walletPrivateKey;
const apiKey = process.env.INFURA_PROJECT_ID;

const web3 = new Web3(`https://mainnet.infura.io/v3/${apiKey}`);

// web3.eth.accounts.wallet.add(walletPrivateKey);
// const myWalletAddress = web3.eth.accounts.wallet[0].address;

const cGovernance = config.cGovernance;
const cGovernanceAbi = config.cGovernanceAbi;
const cGovContract = new web3.eth.Contract(cGovernanceAbi, cGovernance);

// console.log(JSON.stringify(cGovernanceAbi.options.jsonInterface,null, 2));
// console.log('options above.')

// Do this based on a timer / look for changes first..
// fs.writeFileSync('./abi/compound-governance.json', JSON.stringify(cGovernanceAbi, null, 2))

const cEthAddress = config.cEthAddress;
const cEthAbi = config.cEthAbi;
const cEthContract = new web3.eth.Contract(cEthAbi, cEthAddress);

// fs.writeFileSync('./abi/compound-ethereum.json', JSON.stringify(cEthContract, null, 2))

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

/**
 * GET /api/infura/compound
 * Compound API example.
 */

/**
 * Target: event ProposalCreated(uint id, address proposer, address[] targets, uint[] values, string[] signatures, bytes[] calldatas, uint startBlock, uint endBlock, string description);
 * Tool: https://web3js.readthedocs.io/en/v1.2.0/web3-eth-contract.html#events-allevents
 */

exports.getCompound = (req, res, next) => {
    // cGovContract.getPastEvents('allEvents')
    cGovContract.events.allEvents()
        .then(function(events){
            console.log(events) // same results as the optional callback above
            res.send(events)
        }).catch((err) => {
            next(new Error(JSON.stringify(err)))
        }

    );
};
