import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";






function Navbar(props:any){
    const [visibility, setVisibility] = useState<boolean>(true)
    const navigate = useNavigate();
    let AAddress = props.address;
    let addressvalue = AAddress.slice(0,4) +".."+ AAddress.slice(64,66);
    console.log(addressvalue);
    const myimage = props.myimage;
    console.log(myimage);
    var menu = document.getElementById("user-dropdown");
    
    const updateProfile = () =>{
        navigate("/profile");
    }

    const signout = async () => {
        props.setdiscounnect(true);
        await (window as any).martian.disconnect();
        navigate("/")
    }

    const handleVisibility = () => {

    }

    const promptPage = () => {
        navigate("/mint")
    }



    return (
        <>
        
            <nav className="flex justify-between items-center bg-opacity-0 bg-white border-gray-200 px-2 w-screen   rounded  " >
                <span className="text-xl font-semibold dark:text-black ">NFT MINT</span>
                <div className=" w-full md:w-auto md:order-1 bg-opacity-0" >

                    <ul className="flex flex-col p-4 mt-4  rounded-lg   md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  ">
                        <li>
                        <a href="#" className="block py-2 pl-3 pr-4 bg-opacity-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" onClick={promptPage} aria-current="page">Prompt</a>
                        </li>
                        <li>
                        <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Story</a>
                        </li>
                        <li>
                        <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Team</a>
                        </li>
                    </ul>
                </div>
                <div className=" relative dropdown-toggle md:order-2 "  onMouseLeave={()=>{setVisibility(true)}} >
                            <button type="button" onClick={()=>{setVisibility(!visibility)}} className={`flex mr-3 text-sm bg-gray-800 rounded-full  ${visibility ===false ? "focus:ring-4":""} ${visibility ===true ? "focus:ring-gray-300":""} ${visibility ===true ? "dark:focus:ring-gray-600":""}`} id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                                <span className="sr-only">Open user menu</span>
                                <img className="w-10 h-10 rounded-full" src={props.myimage} alt="user photo" />
                            </button>
                            <div className={`absolute right-0 top-6 ${visibility === true ? "hidden" : ""} my-4 mr-3 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`} id="user-dropdown">
                                <div className="px-4 py-3">
                                <span className="block text-sm text-gray-900 dark:text-white">Address</span>
                                <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">{addressvalue}</span>
                            </div>
                                <ul className="py-2" aria-labelledby="user-menu-button">
                                        <li>
                                            <button><a href="" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" onClick={updateProfile}>Update Profile</a></button>
                                        </li>
                                        <li>
                                            <button><a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" onClick={signout}>Sign out</a></button>
                                        </li>
                                </ul>
                            </div>

                </div>
            </nav>

        
        </>
    )

}

export default Navbar;