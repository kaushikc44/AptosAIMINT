import React,{useState} from 'react';
import myimage from "./../assets/images/mushroom.png";

interface addressprops{
    address:string;
}




function Navbar(props:addressprops){

    let AAddress = props.address;
    let addressvalue = AAddress.slice(0,4) +".."+ AAddress.slice(64,66);
    var menu = document.getElementById("user-dropdown");

        // open/close the menu when the user clicks on the button
    function toggleMenu() {
        if ((menu as any).classList.contains('hidden')) {
            (menu as any).classList.remove('hidden');
        } else {
            (menu as any).classList.add('hidden');
        }
        
    }

    const list = document.getElementById("navbar-search");
    function closerMenu(event:any){
        (menu as any).classList.add('hidden');
        
    }




    return (
        <>
        
            <nav className="bg-white grid grid-cols-2 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 " >
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white ">NFT MINT</span>
                
                    <div className="items-start justify-items-center  w-full md:flex md:w-auto md:order-1" id="navbar-items" >

                        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700" onMouseOver={closerMenu}>
                            <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">MINT</a>
                            </li>
                            <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">VISION</a>
                            </li>
                            <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Team</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex relative dropdown-toggle items-center justify-end md:order-2 "  datat-toggle={"dropdown"}>
                            <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom" onClick={toggleMenu}>
                                <span className="sr-only">Open user menu</span>
                                <img className="w-10 h-10 rounded-full" src={myimage} alt="user photo" />
                            </button>
                            <div className=" absolute right-0 top-10 hidden  my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 " id="user-dropdown">
                                <div className="px-4 py-3">
                                <span className="block text-sm text-gray-900 dark:text-white">Address</span>
                                <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">{addressvalue}</span>
                            </div>
                                <ul className="py-2" aria-labelledby="user-menu-button">
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                                        </li>
                                </ul>
                            </div>

                </div>
        </nav>

        
        </>
    )

}

export default Navbar;