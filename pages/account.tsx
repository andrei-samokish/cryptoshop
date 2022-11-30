import BecomeSellerButton from "../components/becomeSellerButton";
import ItemsRender from "../components/ItemsRender";
import LoginButton from "../components/LogInButton";
import OwnedItemsRender from "../components/ownedItemsRender";
import WithdrawFromSaleButton from "../components/WithdrawFromSaleButton";

function Account() {
  return (
    <>
      <ItemsRender />
      <BecomeSellerButton />
      <LoginButton />
      <OwnedItemsRender />
      <WithdrawFromSaleButton />
    </>
  );
}

export default Account;
