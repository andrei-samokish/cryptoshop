import { ethers } from "ethers";
import contrWithSigner from "./connectProvider/contrWithSigner";
import mainContr from "./mainContr";

export default async function useLoadItems() {
  let items: Array<{ name: string; desc: string; img: string; price: number }> =
    [];

  for (let i = 0; ; i++) {
    const [desc_, img, seller, price] = await mainContr.items(i);
    if (!img) break;
    const ownerBalance = await mainContr.balanceOf(seller, i);
    if (!ownerBalance.toNumber()) continue;

    const name = await mainContr.names(i);

    const item = {
      name,
      desc: desc_,
      img,
      price: price.toNumber(),
    };
    items = [...items, item];
  }

  return items;
}
