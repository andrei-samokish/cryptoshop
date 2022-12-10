import contrWithSigner from "./connectProvider/contrWithSigner";
import { LoadType } from "./LoadType";
import mainContr from "./mainContr";

export default async function useLoadItems(
  renderedAmount: number,
  type: LoadType,
  search?: string
): Promise<[Item[], number[]]> {
  let items: Item[] = [];
  let amounts: number[] = [];
  const contract = await contrWithSigner();

  switch (type) {
    case "general":
      for (let i = renderedAmount; i < renderedAmount + 8; i++) {
        try {
          const itemInfo = await mainContr.items(i);
          if (!(await mainContr.balanceOf(itemInfo[2], i)).toNumber()) continue; // check if still selling

          const name = await mainContr.names(i);
          const item = {
            id: i,
            name,
            desc: itemInfo[0],
            img: itemInfo[1],
            seller: itemInfo[2],
            price: itemInfo[3].toNumber(),
          };
          items.push(item);
        } catch (err) {
          break;
        }
      }
      break;
    case "personal":
      for (let i = renderedAmount; i < renderedAmount + 8; i++) {
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
            price: itemInfo[3].toNumber(),
          };
          items.push(item);
        } catch (err) {
          console.error(err);
          break;
        }
      }
      break;
    case "searched":
      for (let i = renderedAmount; i < renderedAmount + 8; i++) {
        try {
          const name = await mainContr.names(i);
          if (!name.toLowerCase().includes(search as string)) continue; //check if corresponds to a search request
          const itemInfo = await mainContr.items(i);
          if (!(await mainContr.balanceOf(itemInfo[2], i)).toNumber()) continue; // check if still selling
          const item = {
            id: i,
            name,
            desc: itemInfo[0],
            img: itemInfo[1],
            seller: itemInfo[2],
            price: itemInfo[3].toNumber(),
          };
          items.push(item);
        } catch (err) {
          break;
        }
      }
  }

  return [items, amounts];
}
