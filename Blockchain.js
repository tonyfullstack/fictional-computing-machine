class Blockchain {
    constructor() {}


    createNewBlock(nonce, previousBlockHash, hash) {
        const newblock = {
            index: 0,
            timestamp: Date.now(),
            transactions: {},
            nonce: nonce,
            hash: hash,
            previousBlockHash: previousBlockHash
        };
        return newblock;
    }
}

// Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, Hash) {
//     const newblock = {
//         index: this.chain.length + 1,
//         timestamp: Date.now(),
//         transactions: this.newTransactions,
//         nonce: nonce,
//         Hash: Hash,
//         previousBlockHash: previousBlockHash
//     };

//     // this.newTransactions = {};
//     // this.chain.push(newblock);

//     return newblock;
// };

module.exports = Blockchain;
