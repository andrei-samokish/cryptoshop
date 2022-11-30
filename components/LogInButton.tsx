import React, { useEffect, useState } from "react";
import contrWithSigner from "./connectProvider/contrWithSigner";

export default function LoginButton() {
  const [nickname, setNickname] = useState("");

  const [isSSR, setIsSSR] = useState(false);

  useEffect(() => {
    setIsSSR(true);
  }, []);

  async function handleLoginButtonClick() {
    try {
      await (await contrWithSigner()).register(nickname, { gasLimit: 50000 });
    } catch (error) {
      console.error(error);
    }
  }

  if (isSSR)
    return (
      <>
        <div
          onClick={handleLoginButtonClick}
          className="w-[450px] h-[150px] m-4 border-black border-solid border flex items-center justify-center hover:cursor-pointer text-3xl flex-col">
          <h2 className="my-2">Log in via metamask</h2>
        </div>
        <input
          className="border-black border border-solid m-4"
          placeholder="your nickname"
          value={nickname}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNickname(e.target.value)
          }></input>
      </>
    );
  else return <h1></h1>;
}
