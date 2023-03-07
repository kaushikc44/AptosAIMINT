import React,{useState,useEffect} from 'react';
import Navbar from '../navbar';
import ParticlesApp from '../partciles';



function ProfileUpdate(props:any){
    const myimage = props.myimage;
    const [previewImage, setPreviewImage] = useState<string>(props.myimage);

    // const changeProfilePicture = () => {

    // }

    

    const previewPicture =(e:any) => {
        console.log(e.target.files);
        setPreviewImage(URL.createObjectURL(e.target.files[0]))
        

    };
    return(
        
        <>
        <form className="flex-row items-center  justify-items-center bg-[#ffffff] w-[80rem] h-[55rem] ">
        <div className="continer  flex h-[25rem]">
            <img className='w-[20rem] h-[20rem] ml-[20rem] mt-[2.5rem] rounded-full' src={myimage} alt="ProfilePicture" />
            <form> 
                <label className="block ml-[5rem] mt-[11rem]">
                <span className="sr-only">Choose File</span>
                <input type="file" className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                </label>
            </form> 
            <button className='mr-[5rem] pl-[20px] pr-[20px] text-gray-900 mt-[10rem] max-w-[8rem] max-h-[4rem] justify-items-start  hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm  text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800' >
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