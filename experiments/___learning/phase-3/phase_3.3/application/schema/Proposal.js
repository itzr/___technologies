// SEND TO FRONTEND
// {id:id, proposer:proposer, description:description}

// FULL RAW FROM COMPOUND
// (uint id, address proposer, address[] targets, uint[] values, string[] signatures,
// bytes[] calldatas, uint startBlock, uint endBlock, string description)
const mongoose = require('mongoose');

const proposalSchema = new mongoose.Schema({
    proposalId: Number, // uint
    proposer: Number, // address
    targets: Array, // of addresses
    values: Array, // of unit,
    signatures: Array, // of strings
    calldatas: Array, // of bytes
    startBlock: Number, // uint
    endBlock: Number, // uint
    description: String
});

// proposalSchema.methods.speak = function () {
//     const greeting = this.name
//         ? "Meow name is " + this.name
//         : "I don't have a name";
//     console.log(greeting);
// };

module.exports = mongoose.models.Proposal || mongoose.model('Proposal', proposalSchema);
