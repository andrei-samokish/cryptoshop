import { Grid } from "semantic-ui-react";
import ItemCard from "./ItemCard";
import OwnedCard from "./OwnedCard";

type ItemsRenderProps = {
  items: Items;
  amounts?: number[];
};

export default function ItemsRender({ items, amounts }: ItemsRenderProps) {
  return (
    <>
      <Grid doubling columns={3}>
        {items.map((item, index) => {
          if (amounts) return <OwnedCard item={item} amount={amounts[index]} />;
          else return <ItemCard item={item} key={index} />;
        })}
      </Grid>
    </>
  );
}
