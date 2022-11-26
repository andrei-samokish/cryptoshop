import { ethers } from "ethers";
import { useEffect, useState } from "react";
import mainContr from "./mainContr";

export default async function useLoadItems() {
  // const [names, setNames] = useState<Array<string>>([""]);
  // const [imgs, setImgs] = useState<Array<string>>([""]);
  // const [descs, setDescs] = useState<Array<string>>([""]);
  // const [prices, setPrices] = useState<Array<string>>([]);

  let items: Array<{ name: string; desc: string; img: string; price: string }> =
    [];

  for (let i = 0; i < 6; i++) {
    const [desc_, img, , price] = await mainContr.items(i);

    // const _desc = Buffer.from(desc_, "base64"); // для декода из base64 на SSR
    // const desc = _desc.toString()
    const name = await mainContr.names(i);
    const item = {
      name,
      desc: desc_,
      img,
      price: ethers.utils.formatEther(price),
    };
    items = [...items, item];
  }

  return items;
}
