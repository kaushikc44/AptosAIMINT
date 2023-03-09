import React,{useState,useEffect} from 'react';
import Navbar from '../navbar';
import ParticlesApp from '../partciles';
import supabase from '../../utils/supabaseClient';



function ProfileUpdate(props:any,e:any){
    const myimage = props.myimage;
    const [previewImageUrl, setPreviewImageUrl] = useState<string>("");
    const [imageNotUpload,setimageNotUpload] = useState<boolean>(true);

    // To confirm the change of profile image
    const changeProfilePicture = async (e:any) => {
        e.preventDefault();
        if(previewImageUrl !== "" || previewImageUrl.length === 0){
           
            //Update in DB(we need the address or the ID of the user)
            const {status} = await supabase.from("Profile").update({"ImageUrl":previewImageUrl}).match({'aptos_id':props.address});
            if(status === 204){
                props.handleImageChange(previewImageUrl)
            }
            else{
                setimageNotUpload(true);
                alert("Error has occurred. Please try again")
            }

            //Change profile picture and change local storage 
          
        }
        else{
            setimageNotUpload(true);
        }
    }

    //Will store it in the storage and create a url
    const uploadTostorage = async(path:string) => {
        const avatarFile = new File([path],'avatar.png',{type:'image/png'})
        const d = new Date();
        const time = d.getTime();
        const {data,error} = await supabase.storage.from('avatars').upload(`${time}`,avatarFile,{cacheControl:'3600',upsert: false})
        if (error === null) {
            const{data,error} = await  supabase.storage.from('avatars').createSignedUrl(`${time}`,31563000)
            if (error === null) {
                return data.signedUrl;
            }
            else{
                return null;
            }
        }
        else{
            return null;
        }
    };

    //This will only occur if the user uploads an image there for calling the above function 
    const previewPicture =  async (e:any) => {
        console.log(e.target.files);
        const urloftheimaeg = URL.createObjectURL(e.target.files[0])
        const value = await  uploadTostorage(e.target.files[0])
        setPreviewImageUrl(value !== null ? value : "")
        setimageNotUpload(false);

        

    };
    return(
        
        <>
        <form className="flex-row items-center  justify-items-center bg-[#ffffff] w-[80rem] h-[55rem] ">
        <div className="continer  flex h-[25rem]">
            <img className='w-[20rem] h-[20rem] ml-[20rem] mt-[2.5rem] rounded-full' src={myimage} alt="ProfilePicture" />
            <form> 
                <label className="block ml-[5rem] mt-[11rem]">
                <span className="sr-only">Choose File</span>
                <input type="file" className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" onChange={previewPicture} />
                </label>
            </form> 
            <button className='mr-[5rem] pl-[20px] pr-[20px] text-gray-900 mt-[10rem] max-w-[8rem] max-h-[4rem] justify-items-start  hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm  text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800' onClick={changeProfilePicture} >
                Upload
            </button>
        </div>
        <div className="container  h-[30rem] max-w-[80rem]">
        <div className="flex-row mt-[5rem]">
                <div className="w-full md:w-1/2 px-3 ml-[20rem] mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Change Name
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="CryptoPunks"   />
                    <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                </div>
            </div>
        </div>
        </form>
        </>
    )
}

export default  ProfileUpdate;