import Link from "next/link";
import { useEffect, useState } from "react";
import { Button, Grid, Input, SegmentInline } from "semantic-ui-react";
import contrWithSigner from "../components/connectProvider/contrWithSigner";
import ItemsRender from "../components/ItemsRender";
function HomePage(): JSX.Element {

  const [isReg, setIsReg] = useState(false);
  const [nickname, setNickname] = useState("");
  const [valid, setValid] = useState("");

  useEffect(() => {
    (async () => {
      if(await (await contrWithSigner()).userNames(await (await contrWithSigner()).signer.getAddress())){
        setIsReg(true);
      } else {
        setIsReg(false);
      }
    })()
  })

  async function register() {
    if(nickname !== ""){
      await (await contrWithSigner()).register(nickname);
      setIsReg(true)
    } else {
      setValid("you need to enter a nickname")
    }
  }

  const isNotRegisteredUser = 
  <Grid columns={3}>
    <Grid.Column>
      <Link href = "/main" className = "ui-button">
        <Button>browse items</Button>
      </Link>
    </Grid.Column>
    <Grid.Column> 
      <Input
        placeholder="enter your nickname"
        type="text"
        action
        onChange={(e) => setNickname(e.target.value)}>
        <input />
      </Input>
    </Grid.Column>
    <Grid.Column className="grid-column">
      <Button onClick={register}>Register</Button>
    </Grid.Column>
  </Grid>
  
  

  const isRegisteredUser =  <div className = "div-centering">
    <Link href = "/main" className = "ui-button">
      <button>browse items</button>
    </Link>
  </div>
  
  return (
    isReg ? isRegisteredUser : isNotRegisteredUser
  );
}

export default HomePage;
