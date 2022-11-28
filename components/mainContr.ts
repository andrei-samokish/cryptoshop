import { CryptoShop, CryptoShop__factory } from "../typechain-types";
import { defaultProvider } from "./connectProvider/defaultProvider";
import { ethers } from "ethers";

const mainContr = new ethers.Contract(
  process.env.NEXT_PUBLIC_MAIN_CONTRACT_ADDRESS as string,
  CryptoShop__factory.abi,
  defaultProvider
);

export default mainContr as CryptoShop;
