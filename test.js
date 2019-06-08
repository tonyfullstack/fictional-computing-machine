const Blockchain = require("./blockchain");

let chainBoy = new Blockchain();
let block = chainBoy.createNewBlock();
console.log(block);
