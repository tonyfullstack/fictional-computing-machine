function Blockchain() { 
 this.chain = [];

}


Block.prototype.CreateNewBlock = function (Nonce, PreviousBlockHash , Hash) 
Const. Newblock = {
	Index: this.chain.length +1
	timestamp: Date.now();
	transactions: this.newTransactions,
	nonce: nonce
	Hash: Hash,
	PreviousBlockHash: PreviousBlockHash
};

this.newTransactions = {}
this.chain.push(Newblock);

return Newblock;

Module.exports = Blockchain;
