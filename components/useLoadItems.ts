import { SetStateAction } from "react";
import { Items } from "../global-types";
import contrWithSigner from "./connectProvider/contrWithSigner";
import { LoadType } from "./LoadType";
import mainContr from "./mainContr";

export default async function useLoadItems(
  renderedAmount: number,
  setRenderedAmount: React.Dispatch<SetStateAction<number>>,
  type: LoadType,
  search?: string
): Promise<[Items, number[]]> {
  let items: Items = [];
  let amounts: number[] = [];
  const contract = await contrWithSigner();
  let i = renderedAmount;
  let rendered = 0;

  switch (type) {
    case "general":
      while (rendered < 6) {
        try {
          const itemInfo = await mainContr.items(i);
          if ((await mainContr.balanceOf(itemInfo[2], i)).isZero()) {
            i += 1;
            continue;
          } // check if still selling

          const name = await mainContr.names(i);
          const item = {
            id: i,
            name,
            desc: itemInfo[0],
            img: itemInfo[1],
            seller: itemInfo[2],
            price: itemInfo[3],
          };
          items.push(item);
          rendered += 1;
        } catch (err) {
          break;
        }
        i += 1;
      }
      break;
    case "personal":
      while (rendered < 6) {
        try {
          const id = await contract.ownedItems(await contract.signer.getAddress(), i, 0);
          const amount = await contract.ownedItems(await contract.signer.getAddress(), i, 1);

          const itemInfo = await mainContr.items(id);
          const name = await mainContr.names(id);
          amounts.push(amount.toNumber());

          const item = {
            id: id.toNumber(),
            name,
            desc: itemInfo[0],
            img: itemInfo[1],
            seller: itemInfo[2],
            price: itemInfo[3],
          };
          items.push(item);
          rendered += 1;
        } catch (err) {
          console.error(err);
          break;
        }
        i += 1;
      }
      break;
    case "searched":
      while (rendered < 6) {
        try {
          const name = await mainContr.names(i);
          if (!name.toLowerCase().includes(search as string)) {
            i += 1;
            continue;
          } //check if corresponds with a search request
          const itemInfo = await mainContr.items(i);
          if ((await mainContr.balanceOf(itemInfo[2], i)).isZero()) {
            i += 1;
            continue;
          } // check if still selling
          const item = {
            id: i,
            name,
            desc: itemInfo[0],
            img: itemInfo[1],
            seller: itemInfo[2],
            price: itemInfo[3],
          };
          items.push(item);
          rendered += 1;
        } catch (err) {
          break;
        }
        i += 1;
      }
  }

  setRenderedAmount(renderedAmount + rendered);

  return [items, amounts];
}
