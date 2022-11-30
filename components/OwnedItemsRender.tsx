import { useEffect, useState } from "react";
import useLoadPersonalItems from "./useLoadPersonalItems";

export default function OwnedItemsRender() {
  const [items, setItems] = useState<
    Array<{
      name: string;
      desc: string;
      img: string;
      price: number;
      amount: number;
    }>
  >([]);

  useEffect(() => {
    (async () => {
      setItems(await useLoadPersonalItems());
    })();
  }, []);

  function displayItems() {
    return items.map((item, index) => {
      return (
        <div
          className="w-[75px] h-[150px] border border-solid border-black"
          key={index}>
          <h2>{item.name}</h2>
          <img src={`data:image/svg+xml;base64,${item.img}`} />
          <h3>{item.price}</h3>
          <h3>{item.amount}</h3>
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
