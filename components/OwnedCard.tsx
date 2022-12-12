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

  async function handleFillClick(e: React.KeyboardEvent<HTMLInputElement>, id: number) {
    if (e.key == "Enter")
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
    <div className="w-1/3 mb-10">
      <Card key={uuidv4()} centered>
        <Image src={`data:image/svg+xml;base64,${item.img}`} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{item.name}</Card.Header>
          <Card.Meta>{ethers.utils.formatEther(item.price) + "Ξ"}</Card.Meta>
          <Card.Description>You have {amount} of those!</Card.Description>
        </Card.Content>
        {isSeller ? (
          <Card.Content extra key="c">
            <Grid columns={2}>
              <Grid.Column stretched>
                <Popup
                  trigger={<Button content="Withdraw from sale" basic />}
                  hideOnScroll
                  children={
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
              <Grid.Column stretched key="a">
                <label className="block mb-2 text-sm font-medium text-gray-900">Fill stock</label>
                <input
                  className="bg-white border border-gray-400 text-gray-900 text-sm font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 shadow"
                  placeholder="amount"
                  type="number"
                  autoFocus={!!fillAmount}
                  onKeyDown={async (e) => await handleFillClick(e, item.id)}
                  onChange={(e) => setFillAmount(parseInt(e.target.value))}
                  value={fillAmount}
                />
              </Grid.Column>
            </Grid>
          </Card.Content>
        ) : (
          <Card.Content extra>
            <Grid columns={1}>
              <Grid.Column stretched>
                <Button basic>
                  Coming <br></br>soon...
                </Button>
              </Grid.Column>
            </Grid>
          </Card.Content>
        )}
      </Card>
    </div>
  );
}
