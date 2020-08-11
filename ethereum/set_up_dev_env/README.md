# Objective

Run Docker container with Node and all the goodies necessary to query the Etherum blockchain.

For now, follow: https://medium.com/compound-finance/setting-up-an-ethereum-development-environment-7c387664c5fe

### Note for solc

`docker run ethereum/solc:stable --version`

* Currently, the docker image only contains the compiler executable, so you have to do some additional work to link in the source and output directoriess

