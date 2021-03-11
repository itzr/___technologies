#### Graph Node

https://github.com/graphprotocol/graph-node

1)  A decentralized application adds data to Ethereum through a transaction on a smart contract.
2)  The smart contract emits one or more events while processing the transaction.
3)  Graph Node continually scans Ethereum for new blocks and the data for your subgraph they may contain.
4) Graph Node finds Ethereum events for your subgraph in these blocks and runs the mapping handlers you provided. The mapping is a WASM module that creates or updates the data entities that Graph Node stores in response to Ethereum events.
5) The decentralized application queries the Graph Node for data indexed from the blockchain, using the node's GraphQL endpoint. The Graph Node in turn translates the GraphQL queries into queries for its underlying data store in order to fetch this data, making use of the store's indexing capabilities.
6) The decentralized application displays this data in a rich UI for end-users, which they use to issue new transactions on Ethereum.
7)  The cycle repeats.
