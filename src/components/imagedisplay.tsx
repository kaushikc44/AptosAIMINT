import React, { useState } from 'react';

interface ImageDisplay{
    urlimage : string[];
}

function ImageDisplay(props:ImageDisplay) {
    const [backupImage,setbackupImage] = useState("");
    return (
        <div className="grid grid-cols-3 p-4 gap-2">
                 {props.urlimage.map((url:string) => (
        <img
          alt="gallery"
          className="block object-cover object-center w-full h-full rounded-lg"
          src={url} onError={(err) => {setbackupImage("https://oaidalleapiprodscus.blob.core.windows.net/private/org-ly5GphjXTO7U5GawU4ToSrUu/user-el5TfuXeAaNqiu9Z477Xlx3Q/img-jPmMs8a2ZX4O4WRou1A3FMmh.png?st=2023-02-23T09%3A23%3A26Z&se=2023-02-23T11%3A23%3A26Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-02-23T02%3A53%3A38Z&ske=2023-02-24T02%3A53%3A38Z&sks=b&skv=2021-08-06&sig=d5vShDp91k7By6WjeiWXAS5n7bvmVhGrRdoPOPdEETM%3D")}}
        />))};

        </div>
    )
    
    
}

export default ImageDisplay;