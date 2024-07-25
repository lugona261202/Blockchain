require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/5-mB2s2Bc2H38HIqiJeF0V-T9SVLfTx1',
      accounts: ['7203fa247747bbd3b013b3ac385127a4449f8ccbb4f803817452692686f08b6f'],
    },
    hardhat: {
      // // If you want to do some forking, uncomment this
      // forking: {
      //   url: MAINNET_RPC_URL
      // }
      chainId: 31337,
    },
  },
};