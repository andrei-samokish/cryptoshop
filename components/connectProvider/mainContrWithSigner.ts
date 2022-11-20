import metamaskProvider from "./metamaskProvider";
import { CryptoShop__factory } from "../../typechain-types";
import { ethers } from "ethers";
import defaultProvider from "./defaultProvider";

const mainContrWithSigner = () => {
  const mainContr = new ethers.Contract(
    process.env.NEXT_PUBLIC_MAIN_CONTRACT_ADDRESS as string,
    CryptoShop__factory.abi,
    defaultProvider
  );
  const signer = metamaskProvider!.getSigner();
  return mainContr.connect(signer);
};

export default mainContrWithSigner;
