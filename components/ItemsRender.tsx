import { Button, Container, Loader } from "semantic-ui-react";
import { Items } from "../global-types";
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
    <div className={isLoading && !items.length ? "h-screen" : ""}>
      <div className="flex flex-row w-full h-auto flex-wrap justify-start">
        {items.map((item, index) => {
          if (amounts) return <OwnedCard item={item} amount={amounts[index]} />;
          else return <ItemCard item={item} key={index} />;
        })}
        {items.length ? (
          <div className="w-1/3 flex justify-center items-center h-[395px]">
            <Button size="big" onClick={async () => await onMoreClick()} loading={isLoading}>
              Load More
            </Button>
          </div>
        ) : isLoading ? (
          <Loader size="big" active>
            Loading
          </Loader>
        ) : null}
      </div>
    </div>
  );
}
