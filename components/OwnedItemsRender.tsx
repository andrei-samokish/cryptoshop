import { useEffect, useState } from "react";
import useLoadPersonalItems from "./useLoadPersonalItems";
import { Button, Card, Grid, Image, Input, Popup } from "semantic-ui-react";
import { ethers } from "ethers";
import contrWithSigner from "./connectProvider/contrWithSigner";

export default function OwnedItemsRender() {
  const [items, setItems] = useState<
    Array<{
      id: number;
      name: string;
      desc: string;
      img: string;
      price: number;
      amount: number;
    }>
  >([]);

  const [fillAmount, setFillAmount] = useState(0);

  useEffect(() => {
    (async () => {
      setItems(await useLoadPersonalItems());
    })();
  }, []);

  async function handleFillClick(id: number) {
    try {
      await (await contrWithSigner()).fillStock(id, fillAmount);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleWithdrawClick(id: number) {
    try {
      await (await contrWithSigner()).withdrawFromSale(id);
    } catch (error) {
      console.error(error);
    }
  }

  function displayItems() {
    return items.map((item, index) => {
      return (
        <Card key={index}>
          <Image src={`data:image/svg+xml;base64,${item.img}`} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{item.name}</Card.Header>
            <Card.Meta>{ethers.utils.formatEther(item.price) + "Ξ"}</Card.Meta>
            <Card.Description>You have {item.amount} of those!</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Grid columns={2}>
              <Grid.Column stretched>
                <Popup
                  trigger={<Button content="Withdraw from sale" basic />}
                  content={
                    <Button
                      color="red"
                      content="Sure?"
                      onClick={() => handleWithdrawClick(item.id)}
                    />
                  }
                  on="click"
                  position="top right"
                />
              </Grid.Column>
              <Grid.Column stretched>
                <Popup
                  trigger={<Button content="Fill stock" basic />}
                  content={
                    <Input
                      placeholder="amount"
                      type="text"
                      action
                      onChange={(e) => setFillAmount(parseInt(e.target.value))}>
                      <input />
                      <Button onClick={() => handleFillClick(item.id)}>Fill</Button>
                    </Input>
                  }
                  on="click"
                  position="top right"
                />
              </Grid.Column>
            </Grid>
          </Card.Content>
        </Card>
      );
    });
  }

  return (
    <Grid columns={2} doubling>
      {displayItems()}
    </Grid>
  );
}
