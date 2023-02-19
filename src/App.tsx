import React, {useState,Dispatch, SetStateAction} from 'react';
import './App.css';
import WalletSpecifier from './components/wallet';
import Navbar from './components/navbar';
import ImageDisplay from './components/imagedisplay';
import Textarea from './components/textae';
import Aptos from './components/aptosnftcreator';




function App() {
  
  const [address,setAddress] = useState<string>("0x2845d80774ccf3ae0b02e39a149aff6a4f7b5a69fa59e2aa33d1d195d92693c3");
  
  return (
    <>
  
      {/* <WalletSpecifier setAddress={setAddress} /> */}
      <Navbar address={address} />
      {/* <ImageDisplay />
      <Textarea />  */}
      {/* <Aptos /> */}

    </>
  );
}

export default App;
