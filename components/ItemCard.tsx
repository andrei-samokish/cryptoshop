import { ethers } from "ethers";
import { useState } from "react";
import { Card, Image } from "semantic-ui-react";
import contrWithSigner from "./connectProvider/contrWithSigner";
import { v4 as uuidv4 } from "uuid";

export default function ItemCard({ item }: CardProps) {
  const [quantity, setQuantuity] = useState(0);

  async function handleBuyItem(item: Item, quantity: number) {
    try {
      (await contrWithSigner()).buy(item.id, quantity, {
        gasLimit: 3000000,
        value: item.price * quantity,
      });
      console.log(item.price * quantity);
    } catch (error) {
      console.error(error);
    }
  }

  function handleAddItem() {
    setQuantuity((prev) => prev + 1);
  }
  function handleReduceItem() {
    if (quantity > 0) setQuantuity((prev) => prev - 1);
  }
  return (
    <div className="mt-[10px]">
      <Card key={uuidv4()}>
        <Image src={`data:image/svg+xml;base64,${item.img}`} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{item.name}</Card.Header>
          <Card.Meta>{ethers.utils.formatEther(item.price) + "Ξ"}</Card.Meta>
          <Card.Description>
            {item.desc}
            <button
              className=" text-stone-600 ml-[15px] mr-[5px] bg-stone-300 p-[5px] h-[25px] w-[25px] rounded hover:bg-[#666666] hover:text-cyan-50 text-center"
              onClick={handleReduceItem}>
              -
            </button>
            {quantity}
            <button
              className=" text-stone-600 ml-[5px] bg-stone-300 p-[5px] h-[25px] w-[25px] rounded hover:bg-[#666666] hover:text-cyan-50 text-center"
              onClick={handleAddItem}>
              +
            </button>

            <button
              className=" text-stone-600 bg-stone-300 mx-[10px] px-[0.7em] h-[30px] w-[70px] rounded hover:bg-[#666666] hover:text-cyan-50 "
              onClick={async () => await handleBuyItem(item, quantity)}>
              Buy
            </button>
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
}
