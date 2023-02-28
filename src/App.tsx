import React, { useState, Dispatch, SetStateAction, useEffect } from 'react';
import './App.css';
import WalletSpecifier from './components/wallet';
import Navbar from './components/navbar';
import ImageDisplay from './components/imagedisplay';
import Textarea from './components/textae';
import Aptos from './components/aptosnftcreator';
import Form from './components/form';
import ParticlesApp from './components/partciles';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate
} from 'react-router-dom';


function App() {
  
  const [discounnect, setdiscounnect] = useState<boolean>(false);
  const [maxsupply, setmaxsupply] = useState<Number>(1);
  const [royaltAddress,setroyaltAddress] = useState<string>('');
  const [collectionName,setcollectionName] = useState<string>("");
  const [text, setText] = useState<any>("Enter prompt here!");
  const [address, setAddress] = useState<string>("0x2845d80774ccf3ae0b02e39a149aff6a4f7b5a69fa59e2aa33d1d195d92693c3");
  const [urlimages, setUrlimages] = useState<string[]>([""])
  console.log(discounnect);
  
  
  const collectionMint = async () => {
    //Create a new Collection
    console.log("Entering to create a new Collection")
    const txnHash = await (window as any).martian.createCollection(collectionName, text, "https://aptos.dev")
    console.log("Printing the hash",txnHash);
    for (let i = 0; i < urlimages.length; i++) {
      const txnHashtoken = await (window as any).martian.createToken(text,  `${text}${i}`, "keep it simple", 1, urlimages[i], maxsupply)
      console.log("Printing the hash token",txnHashtoken);
    }
  };

 
  
  

  return (
    <>
    
      <Router>
        <Link to="/"></Link>
        <Link to="/mint" ></Link>
        <Routes>
          <Route path="/" element={
            <div id="container">
              <ParticlesApp />
              <div id="mydiv">
              <WalletSpecifier setAddress={setAddress} setdiscounnect={setdiscounnect} text={text} urlimage={urlimages}  />
              </div>
            </div>
          }/>
          <Route path="/mint" element={
        <div id="container">
        <ParticlesApp />
        <div id="mydiv">
          <Navbar address={address} setdiscounnect={setdiscounnect}/>
          <div className='flex justify-center items-center' >
          <Form  setcollectionName={setcollectionName} collectionName={collectionName} setmaxsupply={setmaxsupply} maxsupply={maxsupply} royaltAddress={royaltAddress} setroyaltAddress={setroyaltAddress}/>
          <ImageDisplay urlimage={urlimages}/> 
        </div>
        <Textarea setText={setText} text={text} setUrlimages={setUrlimages} urlimages={urlimages} collectionMint={collectionMint}/>
        </div>
        
      </div>}

      />
      </Routes> 
      </Router>
      
      

    </>
  );
}

export default App;
