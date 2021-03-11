wTo interact with smart contracts, you need an access point to the network.

#### Concepts/Requirements
- Solidity
- Web3.js (Smart contracts executed using JSON RPC)
- Infura.io: API for simple Ethereum network access through HTTP and WebSockets.
	* Without a service like Infura (or CloudFlare), you would have to host your own Ethereum network node
- Ethereum Networks: 
	* Main Network (Homestead) considered to be the production environment
- Cloudflare's Ethereum Gateway: Free API for accessing the main net. Gateway can be used with an account or API. 
- Truffle: Ethereum dev tools (Truffle, Ganache, Drizzle).  
- Open Zeppelin: Ethereum dev tools. Smart contract libraries and CLI
- Ganache CLI: CLI for running a locally hosted instance of Ethereum (blank or fork)
- Solc: Solidity compilier
- MetaMask: Web browser extension. Facilitates invocation of Eth smart contracts. Uses web3.js.
- ABI: Application Binary Interface. A JSON object that maps to your bytecode (Solc compiles Solidity to ByteCode & an ABI). Web3.js can do JSON RPC using the ABI and smart contract address.

### Steps

1. Install solc

Npm / Docker / Brew: https://solidity.readthedocs.io/en/v0.5.3/installing-solidity.html

#### Resource

https://medium.com/compound-finance/setting-up-an-ethereum-development-environment-7c387664c5fe
