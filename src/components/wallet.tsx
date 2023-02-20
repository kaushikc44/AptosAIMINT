import React,{useState} from 'react';



// interface AddressProps{
//   setAddress: (address :string) => void;
//   setdiscounnect:(discounnect:boolean) => void;
//   text:string;
// }

function WalletSpecifier (props:any)  {
  const {text} = props;
  
  const isMartianWalletInstalled = (window as any).martian
  
  const getProvider = async () => {
    const response = await (window as any).martian.connect();
    const data = response
    props.setAddress(data["address"]);
    if(data["method"] === "connected"){
      props.setdiscounnect(false);
    }
    console.log(data);
    //Create a new Collection
    const txnHash = await (window as any).martian.createCollection("Colname1111", {text}, "https://aptos.dev")
    console.log(txnHash);
  };


    return (
      <>
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={getProvider}>
            Button
          </button>
      </>
    )
    
  
    
}

export default WalletSpecifier;