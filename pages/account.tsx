import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";
import contrWithSigner from "../components/connectProvider/contrWithSigner";
import Layout from "../components/Layout";
import mainContr from "../components/mainContr";
import OwnedItemsRender from "../components/OwnedItemsRender";
import SubmitForSalePortal from "../components/SubmitForSalePortal";

function Account() {
  const [open, setOpen] = useState(false);
  const [isSeller, setIsSeller] = useState<boolean>();

  useEffect(() => {
    (async () => {
      const contr = await contrWithSigner();
      setIsSeller(
        await contr.hasRole(
          ethers.utils.solidityKeccak256(["string"], ["SELLER_ROLE"]),
          await contr.signer.getAddress()
        )
      );
    })();
  }, []);

  async function becomeSellerClick() {
    try {
      await (await contrWithSigner()).becomeSeller({ gasLimit: 50000 });
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
        <Button primary onClick={becomeSellerClick}>
          Become seller
        </Button>
      );
  }

  return (
    <Layout>
      {buttonDisplayHandler()}
      <SubmitForSalePortal open={open} setOpen={setOpen} />
      <h1>Your items:</h1>
      <OwnedItemsRender />
    </Layout>
  );
}

export default Account;
