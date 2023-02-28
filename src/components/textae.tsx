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

    const testimages = async () =>{
        // const req = await fetch("https://us-central1-leviosa-backend.cloudfunctions.net/api/api/v0/",{
        //         method: "POST",
        //         mode:"cors",
        //         body: JSON.stringify(obj),
        //         headers:{"Content-Type": "application/json"}
        //     });
        //     // .then(response => console.log(response.json())).catch(err => console.log(err));
        // const ans = await req.json();
        // props.setUrlimages(ans.result)
        // console.log("Printing the result",ans.result);
        //     // for(let i  = 0 ; i < (res as any).result.length; i++){
        //     //     props.setUrlimages(res.result[i]);
        //     // }
            
        //     // looping();

         props.collectionMint();
    }


    const getImages = async () =>{
        console.log(props.text);
       
        const texting = props.text;
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
        <div className="container grid grid-rows-2">
        <div className="container grid grid-rows-2 grid-cols-1 content-center pt-5">
            <label htmlFor="message" className="mx-auto block row-1 mb-2 text-2lg font-medium text-gray-900 dark:text-dark">Enter prompt here!</label>
            <textarea rows={2} style={{ maxWidth: '900px' }} value={props.text} className="block  mx-auto resize-none indent-8 p-1.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder="Write your thoughts here..." onChange={updateThetext}></textarea>

        </div>

        <div className="container  grid grid-row-1 grid-cols-2   content-center    pt-2">
        <button type="button" style={{maxWidth:'400px'}} className="text-gray-900  mx-40 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800" onClick={getImages}>Generate</button>
        <button type="button"  style={{maxWidth:'400px'}} className="text-gray-900 mx-40 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"onClick={testimages}>Mint</button>
        </div>

        </div>
       
            
        </>
    )
}

export default Textarea;