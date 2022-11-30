import { ethers } from "ethers";
import contrWithSigner from "./connectProvider/contrWithSigner";
import mainContr from "./mainContr";

export default async function useLoadItems() {
  let items: Array<{ name: string; desc: string; img: string; price: number }> =
    [];

  let i = 0;

  while (true) {
    const [desc_, img, , price] = await mainContr.items(i);
    if (!img) break;
    const name = await mainContr.names(i);

    const item = {
      name,
      desc: desc_,
      img,
      price: price.toNumber(),
    };
    items = [...items, item];
    i++;
  }

  return items;
}
