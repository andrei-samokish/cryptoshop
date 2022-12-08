import Layout from "../components/Layout";
import "semantic-ui-css/semantic.min.css";
import ItemsRender from "../components/ItemsRender";
import { useEffect, useState } from "react";
import useLoadItems from "../components/useLoadItems";
import { LoadType } from "../components/LoadType";

export default function Main() {
  const [items, setItems] = useState<Item[]>([]);
  const [numberOfLoadingCycles, setNumberOfLoadingCycles] = useState(0); // for LOAD MORE button

  useEffect(() => {
    (async () => {
      setItems((await useLoadItems(numberOfLoadingCycles, LoadType.general))[0]); // LoadType - enum for useLoadItems hook
      setNumberOfLoadingCycles((prev) => prev + 8);
    })();
  }, []);

  async function handleShowMoreClick() {
    const newItems = (await useLoadItems(numberOfLoadingCycles, LoadType.general))[0];
    setItems([...items, ...newItems]);
    setNumberOfLoadingCycles((prev) => prev + 8);
  }

  return (
    <div>
      <Layout>
        <ItemsRender items={items} />
        {items.length ? (
          <button className="ui button mt-5" onClick={handleShowMoreClick}>
            Load more
          </button>
        ) : null}
      </Layout>
    </div>
  );
}
