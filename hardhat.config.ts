import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${
        process.env.ALCHEMY_API_KEY as string
      }`,
      accounts: [process.env.GOERLI_PRIVATE_KEY as string],
    },
  },
};

export default config;
