import React, { useState } from 'react';



function ImageDisplay(props:any) {
    const [backupImage,setbackupImage] = useState("");
    return (
        <div className="grid grid-cols-3 p-4 gap-2">
                 {props.urlimages.map((url:string) => (
        <img
          alt="gallery"
          className="block object-cover object-center w-full h-full rounded-lg"
          src={url} onError={(err) => {setbackupImage("https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp")}}
        />))}

        </div>
    )
    
    
}

export default ImageDisplay;