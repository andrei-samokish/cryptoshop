import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { Card, Grid, Popup, Button, Input, Image } from "semantic-ui-react";
import { v4 as uuidv4 } from "uuid";
import { CardProps } from "../global-types";
import contrWithSigner from "./connectProvider/contrWithSigner";

export default function OwnedCard({ item, amount }: CardProps) {
  const [fillAmount, setFillAmount] = useState(0);
  const [isSeller, setIsSeller] = useState(false);

  useEffect(() => {
    (async () => {
      const addr = await (await contrWithSigner()).signer.getAddress();
      if (item.seller === addr) setIsSeller(true);
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
  return (
    <div className="w-1/3">
      <Card key={uuidv4()}>
        <Image src={`data:image/svg+xml;base64,${item.img}`} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{item.name}</Card.Header>
          <Card.Meta>{ethers.utils.formatEther(item.price) + "Ξ"}</Card.Meta>
          <Card.Description>You have {amount} of those!</Card.Description>
        </Card.Content>
        {isSeller && (
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
        )}
      </Card>
    </div>
  );
}
