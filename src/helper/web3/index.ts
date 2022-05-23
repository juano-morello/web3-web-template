import Web3 from "web3"

const projectId = process.env.NEXT_PUBLIC_INFURA_PROJECT_ID
const network = process.env.NEXT_PUBLIC_NETWORK || 'mainnet'
const provider = `https://${network}.infura.io/v3/${projectId}`

const web3 = new Web3(provider)

export default web3