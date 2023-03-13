import React,{useState} from 'react';
import { text } from 'stream/consumers';

// interface promptext{
//     setText:(text:any) => void;
//     text:any;
//     setUrlimages:(urlimages:string[]) => void;
//     urlimages:string[];
// }

function Textarea(props:any){
    
    const  updateThetext = (event:any) => {
        props.setText(event.target.value);
    }

    const obj = {
        "propmt":props.text
    }

    const mintImages = async () =>{
        props.collectionMint();
    }

    const value:any = []

    const getImages = async () =>{
        console.log(props.text);
        const texting = props.text;
        
        props.setUrlimages([])
        console.log(props.urlimages)
        // console.log(typeof(texting))
        
        console.log("Printing the object",obj["propmt"])
        if (props.text.length !== 0){
            const req = await fetch("https://us-central1-leviosa-backend.cloudfunctions.net/api/api/v0/propmt",{
                method: "POST",
                mode:"cors",
                body: JSON.stringify(obj),
                headers:{"Content-Type": "application/json"}
            });
            const ans = await req.json();
            console.log(ans.result);
            props.setUrlimages(ans.result)
            

        }
        console.log(props.urlimages);
        
    }

    return(
        <>
        <div className="container flex-rows ml-[200px]">
        <div className="container flex justify-center ml-[100px] pt-5">
            <textarea rows={2}  value={props.text} className="block text-center resize-none indent-8 p-1.5 w-[900px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder="Write your thoughts here..." onChange={updateThetext}></textarea>

        </div>

        <div className="container  flex items-center justify-center   mt-[10px]  pt-2">
        <button type="button"  className="text-gray-900 w-[400px] mx-40 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800" onClick={getImages}>Generate</button>
        <button type="button"  className="text-gray-900 w-[400px] mx-40 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"onClick={mintImages}>Mint</button>
        </div>

        </div>
       
            
        </>
    )
}

export default Textarea;