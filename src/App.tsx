import React, { useState, Dispatch, SetStateAction, useEffect } from 'react';
import './App.css';
import WalletSpecifier from './components/wallet';
import Navbar from './components/navbar';
import ImageDisplay from './components/imagedisplay';
import Textarea from './components/textae';
import Aptos from './components/aptosnftcreator';
import Form from './components/form';
import ParticlesApp from './components/partciles';
import ProfileUpdate from "../src/components/Profile/profileUpdate"
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
  const [myimage, setmyimage] = useState<string>("");
  const [royaltAddress,setroyaltAddress] = useState<string>('');
  const [collectionName,setcollectionName] = useState<string>("");
  const [text, setText] = useState<any>("Enter prompt here!");
  const [myuuid, setmyUuid] = useState<Number>(0);
  const [address, setAddress] = useState<string>("0x2845d80774ccf3ae0b02e39a149aff6a4f7b5a69fa59e2aa33d1d195d92693c3");
  const [urlimages, setUrlimages] = useState<string[]>(["https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp","https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp","https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp","https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp","https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp","https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"]);
  
  useEffect(() => {
    const storeuuid = localStorage.getItem('myuuid');
    if(storeuuid) {
      setmyUuid(Number(storeuuid));
    }
  })

  // const handleUuidChange = (uuid:Number) => {
  //   setmyUuid(uuid);
  //   localStorage.setItem('myuuid',uuid);
  // };

  useEffect(() => {
    const storeImage = localStorage.getItem('myImage');
    if(storeImage) {
      setmyimage(storeImage);
    }
  })

  const handleImageChange =  (imgUrl:string) =>{
    setmyimage(imgUrl);
    localStorage.setItem('myImage',imgUrl);
  }
  
  
  const collectionMint = async () => {
    //Create a new Collection
    console.log("Entering to create a new Collection")
    const txnHash = await (window as any).martian.createCollection(collectionName, text, "https://aptos.dev")
    console.log("Printing the hash",txnHash);
    for (let i = 0; i < urlimages.length; i++) {
      const txnHashtoken = await (window as any).martian.createToken(collectionName,  `${text}${i}`, "keep it simple", 1, urlimages[i], maxsupply)
      console.log("Printing the hash token",txnHashtoken);
    }
  };

 
  
  

  return (
    <>
    
      <Router>
        <Link to="/"></Link>
        <Link to="/mint" ></Link>
        <Link to="/profile" ></Link>
        <Routes>
          <Route path="/" element={
            <div id="container">
              <ParticlesApp />
              <div id="mydiv">
              <WalletSpecifier setAddress={setAddress} setdiscounnect={setdiscounnect} text={text} urlimage={urlimages} handleImageChange={handleImageChange}  />
              </div>
            </div>
          }/>
          <Route path="/mint" element={
        <div id="container">
        <ParticlesApp />
        <div id="mydiv">
          <Navbar address={address} setdiscounnect={setdiscounnect} myimage={myimage} />
          <div className='flex justify-center items-center' >
          <Form  setcollectionName={setcollectionName} collectionName={collectionName} setmaxsupply={setmaxsupply} maxsupply={maxsupply} royaltAddress={royaltAddress} setroyaltAddress={setroyaltAddress}/>
          <ImageDisplay urlimages={urlimages}/> 
        </div>
        <Textarea setText={setText} text={text} setUrlimages={setUrlimages} urlimages={urlimages} collectionMint={collectionMint}/>
        </div>
        
      </div>}

      />
      <Route path="/profile" element={
        <div id="container">
        <ParticlesApp />
        <div id="mydiv">
          <Navbar address={address} setdiscounnect={setdiscounnect} myimage={myimage} />
          <div className='flex justify-center items-center' >
          <ProfileUpdate myimage={myimage} handleImageChange={handleImageChange}/>
        </div>
        </div>
        
      </div>}

      />
      </Routes> 
      
      </Router>
      
      

    </>
  );
}

export default App;
