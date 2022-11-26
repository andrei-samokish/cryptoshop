import metamaskProvider from "./metamaskProvider";
import mainContr from "../mainContr";

const contrWithSigner = () => {
  const signer = metamaskProvider!.getSigner();
  return mainContr.connect(signer);
};

export default contrWithSigner;
