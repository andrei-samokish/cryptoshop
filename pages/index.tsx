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
  <div className = "wrapper">
    <Link href = "/main" >
      <Button className = "ui-button">browse items</Button>
    </Link>
    <Input
      placeholder="enter your nickname"
      type="text"
      action
      onChange={(e) => setNickname(e.target.value)}> 
    </Input>
    <Button onClick={register}>Register</Button>
  </div>

  

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
