import {ethers, BigNumber}  from "ethers";
import { useEffect, useState } from "react";
import { Card, Image } from "semantic-ui-react";
import contrWithSigner from "./connectProvider/contrWithSigner";
import mainContr from "./mainContr";


export default function CardRender({item, index}: CardRenderProps) {
    const [quantity, setQuantuity] = useState(0);
    const [ownerBalance, setOwnerBalance] = useState(BigNumber.from("0"))

    useEffect(() => {
      (async () => {
        setOwnerBalance(await (await mainContr).balanceOf(item.seller, index))
      })()
    }, [])

    async function handleBuyItem(
    item: {name:string; desc: string; img:string; seller: string; price: number}, 
    index: number, 
    quantity: number){
        try{  
        (await contrWithSigner()).buy(index, quantity, {gasLimit: 3000000, value: item.price*quantity});
        console.log(item.price*quantity)
        } catch(error){
        console.error(error);
        }
    }

    function handleAddItem(){setQuantuity((prev) => prev+1)}
    function handleReduceItem(){if(quantity > 0) setQuantuity((prev) => prev-1)}

    if(!ownerBalance.toNumber()) return (<></>)
    else return(
      <div className="mt-[10px]">
      <Card key={index} >
        <Image src={`data:image/svg+xml;base64,${item.img}`} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{item.name}</Card.Header>
          <Card.Meta>{ethers.utils.formatEther(item.price) + "Ξ"}</Card.Meta>
          <Card.Description>
            {item.desc}
            <button
              className = " text-stone-600 ml-[15px] mr-[5px] bg-stone-300 p-[5px] h-[25px] w-[25px] rounded hover:bg-[#666666] hover:text-cyan-50 text-center"
              onClick = {handleReduceItem}
            >
              -
            </button>
            {quantity}
            <button
              className = " text-stone-600 ml-[5px] bg-stone-300 p-[5px] h-[25px] w-[25px] rounded hover:bg-[#666666] hover:text-cyan-50 text-center"
              onClick = {handleAddItem}
            >
              +
            </button>
            
            <button 
              className = " text-stone-600 bg-stone-300 mx-[10px] px-[0.7em] h-[30px] w-[70px] rounded hover:bg-[#666666] hover:text-cyan-50 " 
              onClick={async () => await handleBuyItem(item, index, quantity)}
            >Buy
            </button>
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
    )
  }