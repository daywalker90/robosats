#!/bin/sh

# Run initialization commands
bitcoin-cli --regtest --rpcuser=test --rpcpassword=test createwallet default
bitcoin-cli --regtest --rpcuser=test --rpcpassword=test generatetoaddress 1 $(bitcoin-cli --regtest --rpcuser=test --rpcpassword=test getnewaddress)
