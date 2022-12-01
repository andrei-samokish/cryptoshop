import contrWithSigner from "./connectProvider/contrWithSigner";
import mainContr from "./mainContr";

export default async function useLoadPersonalItems() {
  let items: Array<{
    id: number;
    name: string;
    desc: string;
    img: string;
    price: number;
    amount: number;
  }> = [];

  const contract = await contrWithSigner();

  let amount;
  let id;

  for (let i = 0; ; i++) {
    try {
      id = await contract.ownedItems(await contract.signer.getAddress(), i, 0);
      amount = await contract.ownedItems(await contract.signer.getAddress(), i, 1);
    } catch (error) {
      break;
    }

    const [desc_, img, , price] = await mainContr.items(id);
    const name = await mainContr.names(id);

    const item = {
      id: id.toNumber(),
      name,
      desc: desc_,
      img,
      price: price.toNumber(),
      amount: amount.toNumber(),
    };
    items = [...items, item];
  }

  return items;
}
