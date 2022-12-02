import { ethers } from "ethers";
import contrWithSigner from "./connectProvider/contrWithSigner";
import mainContr from "./mainContr";

export default async function useLoadItems() {
  let items: Array<{ name: string; desc: string; img: string; price: number }> = [];

  for (let i = 0; ; i++) {
    let name: string, desc: string, img: string, price: number;
    try {
      const [desc_, img_, seller_, price_] = await mainContr.items(i);
      desc = desc_;
      img = img_;
      price = price_.toNumber();

      if (seller_ !== ethers.constants.AddressZero) {
        const ownerBalance = await mainContr.balanceOf(seller_, i);
        if (!ownerBalance.toNumber()) continue;
      }

      name = await mainContr.names(i);
    } catch (error) {
      break;
    }

    const item = {
      name,
      desc,
      img,
      price,
    };
    items = [...items, item];
  }

  return items;
}
