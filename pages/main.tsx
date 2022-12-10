import Layout from "../components/Layout";
import "semantic-ui-css/semantic.min.css";
import ItemsRender from "../components/ItemsRender";
import { useEffect, useState } from "react";
import useLoadItems from "../components/useLoadItems";
import { LoadType } from "../components/LoadType";

export default function Main() {
  const [items, setItems] = useState<Item[]>([]);
  const [numberOfLoadingCycles, setNumberOfLoadingCycles] = useState(0); // for LOAD MORE button
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setItems((await useLoadItems(numberOfLoadingCycles, LoadType.general))[0]); // LoadType - enum for useLoadItems hook
      setNumberOfLoadingCycles((prev) => prev + 8);
      setIsLoading(false);
    })();
  }, []);

  async function handleShowMoreClick() {
    setIsLoading(true);
    const newItems = (await useLoadItems(numberOfLoadingCycles, LoadType.general))[0];
    setItems([...items, ...newItems]);
    setNumberOfLoadingCycles((prev) => prev + 8);
    setIsLoading(false);
  }

  return (
    <div className="bg-gradient-to-b from-indigo-500 to-gray-300 h-screen">
      <Layout>
        <ItemsRender items={items} onMoreClick={handleShowMoreClick} isLoading={isLoading} />
      </Layout>
    </div>
  );
}
