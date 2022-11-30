import { useState } from "react";
import contrWithSigner from "./connectProvider/contrWithSigner";

export default function WithdrawFromSaleButton() {
  const [id, setId] = useState(0);

  async function handleWithdrawClick() {
    (await contrWithSigner()).withdrawFromSale(id);
  }

  return (
    <>
      <div
        onClick={handleWithdrawClick}
        className="w-[450px] h-[150px] m-4 border-black border-solid border flex items-center justify-center hover:cursor-pointer text-3xl flex-col">
        <h2 className="my-2">Withdraw item from sale</h2>
      </div>
      <input
        className="border-black border border-solid m-4"
        placeholder="your nickname"
        value={id}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setId(parseInt(e.target.value))
        }></input>
    </>
  );
}
