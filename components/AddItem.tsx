import axios from "axios";
import { Input } from "./Input";
import React, { FormEvent, useState } from "react";

import { SVGFormula } from "../pages/api/image";
import contrWithSigner from "./connectProvider/contrWithSigner"


function AddItem() {
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState<number>(0);
    const [stock, setStock] = useState<number>(0);
    const [valid, setValid] = useState("");
    const [uploading, setUploading] = useState(false);
    const [selectedFile, setSelectedFile] = useState<Blob | null>(null);
    const [selectedFileUrl, setSelectedFileUrl] = useState<string>('');
    async function handleUploadImage () {
        setUploading(true);
        try {
          if(!selectedFile) return;
          const formData = new FormData();
          formData.append("myImage", selectedFile);
          const {data} = await axios.post("/api/image", formData);
          console.log(data);
        } 
        catch (error: any) {
            console.log(error.response?.data);
        }
        setUploading(false);
    }

    function handleFormSubmit(event: FormEvent) {
      event.preventDefault();
  
      if(name && desc && selectedFile && price && stock){
        handleUploadImage();
        contrWithSigner().submitCommodity(name, desc, SVGFormula, price, stock);
      }
      else {
        setValid("it is nessesary to fill all the fields")
      }

    }

    return(
        <div className = "ui-form">
            <form onSubmit={handleFormSubmit}>
                <div className="flex">
                    
                    <input
                        className = "w-[0.1px] h-[0.1px] overflow-hidden absolute z-[-1]"
                        type = "file"
                        id = "file"
                        onChange={
                            ({target}) => {
                                if (target.files) {     
                                    const file = target.files[0]
                                    const fileUrl = URL.createObjectURL(file);
                                    setSelectedFileUrl(fileUrl);
                                    setSelectedFile(file);
                                }
                            }
                        }
                    />
                    <label htmlFor="file" className="text-center w-[150px] h-[50px] font-mono
                    font-medium mx-[25px] my-[15px] bg-slate-400 cursor-pointer 
                    border-black border-[2px] block
                    hover:bg-slate-600 hover:text-white hover:border-white">
                        <h1 className="pt-[10px]">Choose an image</h1>
                    </label>   
                    <img src={selectedFileUrl}/>                                      
                </div>
                <div className="metadata-input">
                    <Input placeholder="enter the name of the product" on_change={(e) => setName(e.target.value)}></Input>
                    <Input placeholder="enter the description" on_change={(e) => setDesc(e.target.value)}></Input>
                    <Input placeholder="enter the price" on_change={(e) => setPrice(Number(e.target.value))}></Input>
                    <Input placeholder="enter stock" on_change={(e) => setStock(Number(e.target.value))}></Input>
                </div>
                {valid === "" ? "" : <h1 className="m-[auto]">{valid}</h1>}
                <button
                    onClick={handleFormSubmit}
                    disabled = {uploading}
                    style = {{opacity: uploading ? ".5" : "1"}}
                    className = "block border-[2px] w-[100px] h-[50px] mx-[25px] my-[15px]"
                >
                    {uploading ? "Uploading.." : "Upload"}
                </button>
            </form>
        </div>
    )
    
}

export {AddItem}