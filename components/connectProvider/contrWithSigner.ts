import metamaskProvider from "./metamaskProvider";
import mainContr from "../mainContr";
import { CryptoShop } from "../../typechain-types";

const contrWithSigner = async () => {
  await metamaskProvider!.send("eth_requestAccounts", []);
  const signer = metamaskProvider!.getSigner();
  return mainContr.connect(signer);
};

export default contrWithSigner;
