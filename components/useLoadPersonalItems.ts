import { ethers } from "ethers";
import contrWithSigner from "./connectProvider/contrWithSigner";
import mainContr from "./mainContr";

export default async function useLoadPersonalItems() {
  let items: Array<{
    name: string;
    desc: string;
    img: string;
    price: number;
    amount: number;
  }> = [];

  let i = 0;

  const contract = await contrWithSigner();

  let amount;
  let id;

  while (true) {
    try {
      amount = await contract.ownedItems(
        await contract.signer.getAddress(),
        i,
        1
      );

      id = await contract.ownedItems(await contract.signer.getAddress(), i, 0);
    } catch (error) {
      break;
    }

    const [desc_, img, , price] = await mainContr.items(id);
    const name = await mainContr.names(id);

    const item = {
      name,
      desc: desc_,
      img,
      price: price.toNumber(),
      amount: amount.toNumber(),
    };

    console.log(item);
    items = [...items, item];
    i++;
  }

  return items;
}
