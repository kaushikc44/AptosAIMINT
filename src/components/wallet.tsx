// import React,{useState} from 'react';
// import { blob } from 'stream/consumers';
import { useNavigate } from "react-router-dom";



// interface AddressProps{
//   setAddress: (address :string) => void;
//   setdiscounnect:(discounnect:boolean) => void;
//   text:string;
// }

function WalletSpecifier (props:any)  {
  const {text} = props;
  
  const isMartianWalletInstalled = (window as any).martian

  const navigate = useNavigate();
  const getProvider = async () => {
    const response = await (window as any).martian.connect();
    const data = response
    props.setAddress(data["address"]);
    if(data["method"] === "connected"){
      props.setdiscounnect(false);
      navigate("/mint")
     
    }
    console.log(data);
  }

  
  


    return (
      <>
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={getProvider}>
            Connect To Wallet
          </button>
      </>
    )
    
  
    
}

export default WalletSpecifier;