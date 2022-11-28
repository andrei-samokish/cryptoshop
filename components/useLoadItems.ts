import { ethers } from "ethers";
import mainContr from "./mainContr";

export default async function useLoadItems() {
  let items: Array<{ name: string; desc: string; img: string; price: number }> =
    [];

  for (let i = 0; i < 6; i++) {
    const [desc_, img, , price] = await mainContr.items(i);
    if (!img) break;
    const name = await mainContr.names(i);
    const item = {
      name,
      desc: desc_,
      img,
      price: parseInt(ethers.utils.formatEther(price)),
    };
    items = [...items, item];
  }

  return items;
}
