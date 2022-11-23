import { useEffect, useState } from "react";
import useLoadItems from "./useLoadItems";

export default function ItemsRender() {
  const [items, setItems] = useState<
    Array<{ name: string; desc: string; img: string; price: string }>
  >([]);

  useEffect(() => {
    (async () => {
      setItems(await useLoadItems());
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
