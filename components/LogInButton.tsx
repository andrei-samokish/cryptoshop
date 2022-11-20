import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import metamaskProvider from "./connectProvider/metamaskProvider";

interface ButtonProps {
  children: string;
}

export default function LoginButton(props: ButtonProps) {
  const { children } = props;

  const [isSSR, setIsSSR] = useState(false);

  useEffect(() => {
    setIsSSR(true);
  }, []);

  async function handleLoginButtonClick() {
    await metamaskProvider?.send("eth_requestAccounts", []);
    await metamaskProvider?.getSigner();
  }

  return (
    <>
      {isSSR && (
        <div
          onClick={handleLoginButtonClick}
          className="w-[450px] h-[150px] m-4 border-black border-solid border flex items-center justify-center hover:cursor-pointer text-3xl flex-col">
          {children}
        </div>
      )}
    </>
  );
}
