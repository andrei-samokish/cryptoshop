import { useContext, useEffect, useState } from "react";
import ItemsRender from "../components/ItemsRender";
import Layout from "../components/Layout";
import { LoadType } from "../components/LoadType";
import useLoadItems from "../components/useLoadItems";

export default function Search() {
  const [numberOfLoadingCycles, setNumberOfLoadingCycles] = useState(0); // for LOAD MORE button
  const [items, setItems] = useState<Items>([]);

  useEffect(() => {
    (async () => {
      const searchRequest = localStorage.getItem("req");
      setItems(
        (
          await useLoadItems(numberOfLoadingCycles, LoadType.searched, searchRequest?.toLowerCase())
        )[0]
      );
    })();
  }, []);

  console.log(items);

  return (
    <Layout>
      <ItemsRender items={items} />
    </Layout>
  );
}
