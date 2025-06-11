require('@nomicfoundation/hardhat-network-helpers');
require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.27",
    settings: {
      evmVersion: "prague"
    }
  },
  networks: {
    baklava: {
      url: "https://baklava-forno.celo-testnet.org",
      chainId: 62320,
    },
    alfajores: {
      url: "https://alfajores-forno.celo-testnet.org",
      chainId: 44787,
    },
    celo: {
      url: "https://forno.celo.org",
      chainId: 42220,
    },
  },
};
