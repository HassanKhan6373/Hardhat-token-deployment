/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: "0.8.27",
  networks: {
    hardhat: {
      chainId: 80002, // Default Hardhat local network chain ID
    },
    polygon: {
      url: "https://rpc.ankr.com/polygon_amoy	", // Mainnet RPC URL for Polygon
      chainId: 80002, // Chain ID for Polygon mainnet
      accounts: [`0x${process.env.PRIVATE_KEY}`], // Your wallet's private key
    },
  },
};
