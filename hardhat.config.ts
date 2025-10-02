import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-ethers";

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    moca-testnet: {
      url: "https://rpc.mocachain-testnet.org",
      accounts: ["PRIVATE_KEY"], 
    },
  },
};

export default config;