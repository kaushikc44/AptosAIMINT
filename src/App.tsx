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
  const [urlimages, setUrlimages] = useState<string[]>(["https://oaidalleapiprodscus.blob.core.windows.net/private/org-ly5GphjXTO7U5GawU4ToSrUu/user-el5TfuXeAaNqiu9Z477Xlx3Q/img-jPmMs8a2ZX4O4WRou1A3FMmh.png?st=2023-02-23T09%3A23%3A26Z&se=2023-02-23T11%3A23%3A26Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-02-23T02%3A53%3A38Z&ske=2023-02-24T02%3A53%3A38Z&sks=b&skv=2021-08-06&sig=d5vShDp91k7By6WjeiWXAS5n7bvmVhGrRdoPOPdEETM%3D","https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp","https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp","https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp","https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp","https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(78).webp"])
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
