import { SetStateAction, useState } from "react";
import { Button, Dimmer, Grid, Loader } from "semantic-ui-react";
import ItemCard from "./ItemCard";
import OwnedCard from "./OwnedCard";

type ItemsRenderProps = {
  items: Items;
  onMoreClick: () => Promise<void>;
  amounts?: number[];
  isLoading: boolean;
};

export default function ItemsRender({ items, amounts, onMoreClick, isLoading }: ItemsRenderProps) {
  return (
    <>
      <div className="flex flex-row w-full h-auto flex-wrap justify-start">
        {items.map((item, index) => {
          if (amounts) return <OwnedCard item={item} amount={amounts[index]} />;
          else return <ItemCard item={item} key={index} />;
        })}
        {items.length ? (
          <div className="w-1/3 flex justify-center items-center">
            <Button size="big" onClick={async () => await onMoreClick()} loading={isLoading}>
              Load More
            </Button>
          </div>
        ) : (
          <Loader size="big" active>
            Loading
          </Loader>
        )}
      </div>
    </>
  );
}
