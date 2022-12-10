import { ethers } from "ethers";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";
import contrWithSigner from "../components/connectProvider/contrWithSigner";
import ItemsRender from "../components/ItemsRender";
import Layout from "../components/Layout";
import { LoadType } from "../components/LoadType";
import SubmitForSalePortal from "../components/SubmitForSalePortal";
import useLoadItems from "../components/useLoadItems";

function Account() {
  const [open, setOpen] = useState(false); // for submit portal
  const [isSeller, setIsSeller] = useState<boolean>();
  const [items, setItems] = useState<Item[]>([]);
  const [amounts, setAmounts] = useState<number[]>([]); // amounts of each loaded item
  const [hasAnyItem, setHasAnyItem] = useState(true); // does user have any items (after we fetch it)
  const [isLoading, setIsLoading] = useState(true); // for LOAD MORE button loading state

  const [renderedAmount, setRenderedAmount] = useState(0); // for LOAD MORE button

  useEffect(() => {
    (async () => {
      const contr = await contrWithSigner();
      setIsSeller(
        await contr.hasRole(
          ethers.utils.solidityKeccak256(["string"], ["SELLER_ROLE"]),
          await contr.signer.getAddress()
        )
      );
      const [newItems, newAmounts] = await useLoadItems(
        renderedAmount,
        setRenderedAmount,
        LoadType.personal
      );
      setItems(newItems);
      setAmounts(newAmounts);
      setIsLoading(false);
      if (!newAmounts.length) {
        setHasAnyItem(false);
      } else setHasAnyItem(true);
    })();
  }, []);

  async function handleShowMoreClick() {
    setIsLoading(true);
    const [newItems, newAmounts] = await useLoadItems(
      renderedAmount,
      setRenderedAmount,
      LoadType.general
    );
    setItems([...items, ...newItems]);
    setAmounts([...amounts, ...newAmounts]);
    setIsLoading(false);
  }

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
        <Button onClick={async () => await becomeSellerClick()} loading={isLoading}>
          Become seller
        </Button>
      );
  }

  return (
    <div className="bg-gradient-to-b from-indigo-500 to-gray-300 h-screen">
      <Layout>
        {buttonDisplayHandler()}
        <SubmitForSalePortal open={open} setOpen={setOpen} />
        {hasAnyItem ? (
          <>
            <h1 className="text-white">Your items:</h1>
            <ItemsRender
              items={items}
              amounts={amounts}
              onMoreClick={handleShowMoreClick}
              isLoading={isLoading}
            />
          </>
        ) : (
          <h1 className="text-white">
            Seems like you dont have any items yet...{" "}
            <Link href="/main">
              {" "}
              <span className="text-gray-300 hover:underline">Buy one!</span>{" "}
            </Link>
          </h1>
        )}
      </Layout>
    </div>
  );
}

export default Account;
