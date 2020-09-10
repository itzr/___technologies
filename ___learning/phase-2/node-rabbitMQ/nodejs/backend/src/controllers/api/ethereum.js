/**
 * Module dependencies.
 */
const Web3 = require('web3');

/**
 * Local dependencies.
 */
const contractConfig = require('./../../config/smart-contract-config.json');
const eventConfig = require('./../../config/events-config.json');
const { INFURA_PROJECT_ID } = require('./../../config/const.js');

const web3 = new Web3(`https://mainnet.infura.io/v3/${INFURA_PROJECT_ID}`);

const cGovernance = contractConfig.cGovernance;
const cGovernanceAbi = contractConfig.cGovernanceAbi;
const cGovContract = new web3.eth.Contract(cGovernanceAbi, cGovernance);

/*
*
* Todo: optional functionality
* console.log(JSON.stringify(cGovernanceAbi.options.jsonInterface,null, 2));
* fs.writeFileSync('./abi/compound-governance.json', JSON.stringify(cGovernanceAbi, null, 2))
*
* */

/**
 * POST /api/v1/test-infura-compound
 * Infura API Example
 * Target: event ProposalCreated(uint id, address proposer, address[] targets, uint[] values, string[] signatures, bytes[] calldatas, uint startBlock, uint endBlock, string description);
 * Tool: https://web3js.readthedocs.io/en/v1.2.0/web3-eth-contract.html#events-allevents
 */
exports.getCompoundTest = (req, res, next) => {
    cGovContract.getPastEvents(eventConfig.compoundProposalCreated, {
        // filter: {myIndexedParam: [20,23], myOtherIndexedParam: '0x123456789...'}, // Using an array means OR: e.g. 20 or 23
        fromBlock: 0,
        toBlock: 'latest'
    })
        .then(function(events){
            res.send(events)
        }).catch((err) => {
            next(new Error(JSON.stringify(err)))
        }
    );
};
