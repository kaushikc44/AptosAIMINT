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
import supabase from '../src/utils/supabaseClient';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate
} from 'react-router-dom';
import axios from 'axios';

function App() {
  
  const [discounnect, setdiscounnect] = useState<boolean>(false);
  
  const [maxsupply, setmaxsupply] = useState<Number>(1);
  const [myimage, setmyimage] = useState<string>("");
  const [royaltAddress,setroyaltAddress] = useState<string>('');
  const [collectionName,setcollectionName] = useState<string>("");
  const [text, setText] = useState<any>("Enter prompt here!");
  const [myuuid, setmyUuid] = useState<Number>(0);
  const [address, setAddress] = useState<string>("");
  const [urlimages, setUrlimages] = useState<string[]>(["https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp","https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp","https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp","https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp","https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp","https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"]);
  const [storeCollection,setStoreCollection] = useState<string[]>();
  useEffect(() => {
    const storeaddress = localStorage.getItem('address');
    if(storeaddress) {
      setAddress(storeaddress);
    }
  })

  const handleAddressChange = (addressAptos:string) => {
    setAddress(addressAptos);
    localStorage.setItem('address',addressAptos);
  };

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
  
  //Might be deleted
  const storeInDb = async(arr:string[]) =>{
    for (let i = 0; i < arr.length; i++) {
      // const req  = await axios.get("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo2zi7aWGrKd8eTtROEbeG4noyYyEicLaqpMOmqXXN&s",{responseType:"arraybuffer"});
      const req = await fetch(arr[i])
      console.log(await req);
      // const imgBlob = new Blob([req.data],{"type": "image/jpeg"});
      const imgBlob = await req.blob();
      const imgUrl = URL.createObjectURL(imgBlob);
      const Imagefile = new File([imgUrl],"imageGenerator.png",{type:"image/png"});
      const d = new Date();
      const time = d.getTime();
      console.log(imgBlob);
      console.log(Imagefile);
      const {data,error} = await supabase.storage.from('avatars').upload(`${time}`,Imagefile,{cacheControl:'3600',upsert: false})
      if(error === null){
        const{data,error} = await  supabase.storage.from('avatars').createSignedUrl(`${time}`,31563000)
        console.log("Inner data of the signed url",data);
        if(error === null){
            const txnHashtoken = await (window as any).martian.createToken(collectionName,  `${text}`, "keep it simple", 1,data["signedUrl"], maxsupply)
            console.log("Printing the hash token",txnHashtoken);
        }
        else{
          console.log("Cannot create the signature URL ");
        }
      }
      else{
        console.log("Cannot upload the image");
      }
      
    }
  }
  
  const collectionMint = async () => {
    //Create a new Collection
    console.log("Entering to create a new Collection")
    const txnHash = await (window as any).martian.createCollection(collectionName, text, "https://aptos.dev")
    console.log("Printing the hash",txnHash);
    await storeInDb(urlimages);
    // if (urlimages.length !== 0){
      
    // }
    
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
              <WalletSpecifier handleAddressChange={handleAddressChange} setdiscounnect={setdiscounnect} text={text} urlimage={urlimages} handleImageChange={handleImageChange}  />
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
        <Textarea setText={setText} text={text} setUrlimages={setUrlimages} urlimages={urlimages} collectionMint={collectionMint} collectionName={collectionName}/>
        </div>
        
      </div>}

      />
      <Route  path="/profile" element={
        <div id="container">
        <ParticlesApp />
        <div id="mydiv">
          <Navbar address={address} setdiscounnect={setdiscounnect} myimage={myimage} />
          <div className='flex justify-center items-center' >
          <ProfileUpdate myimage={myimage} handleImageChange={handleImageChange} address={address} />
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
