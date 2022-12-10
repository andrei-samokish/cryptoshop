import { useEffect, useState } from "react";
import ItemsRender from "../components/ItemsRender";
import Layout from "../components/Layout";
import { LoadType } from "../components/LoadType";
import useLoadItems from "../components/useLoadItems";
import { Items } from "../global-types";

export default function Search() {
  const [renderedAmount, setRenderedAmount] = useState(0); // for LOAD MORE button
  const [items, setItems] = useState<Items>([]);
  const [searchRequest, setSearchRequest] = useState("");
  const [isAnyItem, setIsAnyItem] = useState(true);
  const [lastCheckedItem, setLastCheckedItem] = useState(0); // last item fetched from blockchain
  const [isLoading, setIsLoading] = useState(true); // for LOAD MORE button (after we fetch)

  useEffect(() => {
    (async () => {
      const req = localStorage.getItem("req");
      setSearchRequest(req as string);
      const newItems = (
        await useLoadItems(
          renderedAmount,
          setRenderedAmount,
          lastCheckedItem,
          setLastCheckedItem,
          LoadType.searched,
          req?.toLowerCase()
        )
      )[0];
      setItems(newItems);
      setIsLoading(false);
      if (newItems.length) setIsAnyItem(true);
      else setIsAnyItem(false);
    })();
  }, []);

  async function handleShowMoreClick() {
    setIsLoading(true);
    const newItems = (
      await useLoadItems(
        renderedAmount,
        setRenderedAmount,
        lastCheckedItem,
        setLastCheckedItem,
        LoadType.searched,
        searchRequest?.toLowerCase()
      )
    )[0];
    setItems([...items, ...newItems]);
    setIsLoading(false);
  }
  return (
    <div className="bg-gradient-to-b from-indigo-500 to-gray-300 h-full">
      <Layout>
        {isAnyItem ? (
          <h1 className="text-white">
            All <strong>"{searchRequest}"</strong> items:
          </h1>
        ) : (
          <h1 className="text-white h-screen">
            Seems like there a no <strong>"{searchRequest}"</strong> items on sale
          </h1>
        )}
        <ItemsRender items={items} onMoreClick={handleShowMoreClick} isLoading={isLoading} />
      </Layout>
    </div>
  );
}
