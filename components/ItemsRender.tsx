import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { defaultProvider } from "./connectProvider/defaultProvider";
import mainContr from "./mainContr";
import useLoadItems from "./useLoadItems";

export default function ItemsRender() {
  const [items, setItems] = useState<
    Array<{ name: string; desc: string; img: string; price: number }>
  >([]);

  useEffect(() => {
    (async () => {
      setItems(await useLoadItems());
      // const a = await mainContr.userNames(
      //   "0x312eb79e724e117538aAfd3a6324EB577Bb80DeC"
      // );
      // const b = await defaultProvider.getCode(
      //   "0x89d546Dd87eFFfF1E41cBFa57D6077b2c01c3Cd4"
      // );
      // const [desc_, img, , price] = await mainContr.items(0);
      // console.log(img);
    })();
  }, []);

  console.log(items);

  function displayItems() {
    return items.map((item) => {
      return (
        <div className="w-[75px] h-[150px] border border-solid border-black">
          <h2>{item.name}</h2>
          <img src={`data:image/svg+xml;base64,${item.img}`} />
          <h3>{item.price}</h3>
        </div>
      );
    });
  }

  return (
    <div className="w-40 h-40 flex border border-solid border-black">
      {displayItems()}
    </div>
  );
}
