import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";
import contrWithSigner from "../components/connectProvider/contrWithSigner";
import ItemsRender from "../components/ItemsRender";
import Layout from "../components/Layout";
import { LoadType } from "../components/LoadType";
import SubmitForSalePortal from "../components/SubmitForSalePortal";
import useLoadItems from "../components/useLoadItems";

function Account() {
  const [open, setOpen] = useState(false);
  const [isSeller, setIsSeller] = useState<boolean>();
  const [items, setItems] = useState<Item[]>([]);
  const [amounts, setAmounts] = useState<number[]>([]);

  useEffect(() => {
    (async () => {
      const contr = await contrWithSigner();
      setIsSeller(
        await contr.hasRole(
          ethers.utils.solidityKeccak256(["string"], ["SELLER_ROLE"]),
          await contr.signer.getAddress()
        )
      );
      const [newItems, newAmounts] = await useLoadItems(0, LoadType.personal);
      setItems(newItems);
      setAmounts(newAmounts);
    })();
  }, []);

  async function becomeSellerClick() {
    try {
      await (await contrWithSigner()).becomeSeller({ gasLimit: 150000 });
    } catch (error) {
      console.error(error);
    }
  }

  function buttonDisplayHandler() {
    if (typeof isSeller == "undefined") return null;
    else if (isSeller === true)
      return <Button onClick={() => setOpen(true)}>Submit item for sale</Button>;
    else
      return (
        <Button primary onClick={async () => await becomeSellerClick()}>
          Become seller
        </Button>
      );
  }

  return (
    <Layout>
      {buttonDisplayHandler()}
      <SubmitForSalePortal open={open} setOpen={setOpen} />
      <h1>Your items:</h1>
      <ItemsRender items={items} amounts={amounts} />
    </Layout>
  );
}

export default Account;
