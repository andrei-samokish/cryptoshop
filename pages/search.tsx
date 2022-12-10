import { useContext, useEffect, useState } from "react";
import ItemsRender from "../components/ItemsRender";
import Layout from "../components/Layout";
import { LoadType } from "../components/LoadType";
import useLoadItems from "../components/useLoadItems";

export default function Search() {
  const [numberOfLoadingCycles, setNumberOfLoadingCycles] = useState(0); // for LOAD MORE button
  const [items, setItems] = useState<Items>([]);
  const [searchRequest, setSearchRequest] = useState("");
  const [isLoading, setIsLoading] = useState(true); // for LOAD MORE button (after we fetch)

  useEffect(() => {
    (async () => {
      const req = localStorage.getItem("req");
      setSearchRequest(req as string);
      setItems(
        (await useLoadItems(numberOfLoadingCycles, LoadType.searched, req?.toLowerCase()))[0]
      );
    })();
    setIsLoading(false);
    setNumberOfLoadingCycles((prev) => prev + 8);
  }, []);

  async function handleShowMoreClick() {
    setIsLoading(true);
    const newItems = (
      await useLoadItems(numberOfLoadingCycles, LoadType.searched, searchRequest?.toLowerCase())
    )[0];
    setItems([...items, ...newItems]);
    setNumberOfLoadingCycles((prev) => prev + 8);
    setIsLoading(false);
  }

  console.log(items);

  return (
    <div className="bg-gradient-to-b from-indigo-500 to-gray-300 h-screen">
      <Layout>
        <h1 className="text-white">
          All <strong>"{searchRequest}"</strong> items:
        </h1>
        <ItemsRender items={items} onMoreClick={handleShowMoreClick} isLoading={isLoading} />
      </Layout>
    </div>
  );
}
