const Web3 = require('web3')

const provider = new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/59fc666657f44cb29eea1d377b09b697')
const web3 = new Web3(provider)

web3.eth.getBalance('0x90e0d485d161c2ad97516249435480980318fe2b').then(balance => { //address
    const ether = web3.utils.fromWei(balance, 'ether') //convert from wei
    console.log(ether)
})