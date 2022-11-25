import axios from "axios";
import { useState } from "react"

function AddItem() {
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [uploading, setUploading] = useState(false);
    const [selectedFile, setSelectedFile] = useState<Blob | null>(null);
    const [selectedFileUrl, setSelectedFileUrl] = useState<string>('');

    async function handleUpload () {
        setUploading(true);
        try {
            if(!selectedFile) return;
            const formData = new FormData();
            formData.append("myImage", selectedFile);
            const {data} = await axios.post("/api/image", formData);
            console.log(data);
        } catch (error: any) {
            console.log(error.response?.data);
        }
        setUploading(false);
    }

    function handleFormSubmit() {
        handleUpload()
    }


    return(
        <div className = "ui-form">
            <form onSubmit={handleFormSubmit}>
                <div className="flex">
                    <input
                        className = "inputfile"
                        type = "file"
                        accept=".svg"
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
                    
                </div>
                <div className="metadata-input">
                    <input type="text" 
                        className = "border-[2px] border-black mx-[25px] my-[15px] text-center font-mono"
                        placeholder="enter product name"
                    />
                </div>
                <img src={selectedFileUrl}/> 
                <button
                    onClick={handleFormSubmit}
                    disabled = {uploading}
                    style = {{opacity: uploading ? ".5" : "1"}}
                    className = "bg-amber-600 w-[100px] h-[50px] text-center rounded text-black"
                >
                    {uploading ? "Uploading.." : "Upload"}
                </button>

            </form>
        </div>
    )
    



}

export {AddItem}