# Degenarcade


<br />
<p align="center">
  <img src="https://duckduckgo.com/i/ddebb07e.png" alt="Corda" width="90">
</p>

### Building the project

```
yarn
yarn hardhat clean
yarn hardhat compile
```

### Running tests
```
yarn hardhat test
```

### Running deploy scripts
```
yarn hardhat run scripts/deploy.js
```

### Running contract verification

```
yarn hardhat verify 
--network goerli 
--constructor-args ./arguments.js 
--show-stack-traces 
<contract_address>
```

yarn hardhat verify --network mainnet --constructor-args ./arguments.ts --show-stack-traces 0x2A70151eCCdBe52a4e9a48288497Ad72f8a11670

### Running test coverage
```
yarn hardhat coverage --testfiles "test/*.js" 
```

### Run Slither

docker pull trailofbits/eth-security-toolbox
docker run -it -v $pwd:/share trailofbits/eth-security-toolbox
docker run -it --rm -v $PWD:/code trailofbits/eth-security-toolbox

docker run -it -v /Users/kevinkons/Documents/git/limitless-contracts:/share trailofbits/eth-security-toolbox

slither ./contracts/LimitlessStudios.sol --solc-remaps '@openzeppelin=node_modules/@openzeppelin'
