import { ethers } from "ethers";
import contrWithSigner from "./connectProvider/contrWithSigner";
import mainContr from "./mainContr";


export default async function useLoadItems() {
  let items: Array<{ name: string; desc: string; img: string; seller:string; price: number; }> = [];

  for (let i = 0; ; i++) {
    let name: string, desc: string, img: string, price: number, seller:string;
    try {
      const [desc_, img_, seller_, price_] = await mainContr.items(i);
      desc = desc_;
      img = img_;
      seller = seller_
      price = price_.toNumber();
      name = await mainContr.names(i);
    } catch (error) {
      break;
    }

    const item = {
      name,
      desc,
      img,
      seller,
      price,
    };
    items = [...items, item];
  }

  return items;
}