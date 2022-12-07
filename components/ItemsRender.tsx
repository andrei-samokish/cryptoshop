import {ethers, BigNumber}  from "ethers";
import { MouseEventHandler, useEffect, useState } from "react";
import { Grid } from "semantic-ui-react";
import useLoadItems from "./useLoadItems";
import CardRender from "../components/CardRender"
import mainContr from "./mainContr";

export default function ItemsRender() {
  const [items, setItems] = useState<
    Array<{ 
      name: string; 
      desc: string; 
      img: string; 
      seller: string;
      price: number }>
  >([]);

  

  useEffect(() => {
    (async () => {
      setItems(await useLoadItems());
    })();
  }, []);

  return (
    <Grid doubling columns={3}>
      {items.map((item, index) => {
        return (<CardRender item ={item} index = {index} />)
        })}
    </Grid>
  );
}