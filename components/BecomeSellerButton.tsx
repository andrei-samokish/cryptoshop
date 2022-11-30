import { useEffect, useState } from "react";
import contrWithSigner from "./connectProvider/contrWithSigner";

export default function BecomeSellerButton() {
  const [isSSR, setIsSSR] = useState(false);

  useEffect(() => {
    setIsSSR(true);
  }, []);

  async function becomeSellerHandler() {
    try {
      await (await contrWithSigner()).becomeSeller({ gasLimit: 50000 });
    } catch (error) {
      console.error(error);
    }
  }

  if (isSSR)
    return (
      <button
        className="border border-solid border-black w-20 h-10"
        onClick={becomeSellerHandler}>
        Become seller
      </button>
    );
  else return null;
}
