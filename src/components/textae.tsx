import React,{useState} from 'react';


function Textarea(){
    return(
        <>
        <div className="container grid grid-rows-2">
        <div className="container grid grid-rows-2 grid-cols-1 content-center pt-5">
            <label htmlFor="message" className="mx-auto block row-1 mb-2 text-2lg font-medium text-gray-900 dark:text-dark">Enter prompt here!</label>
            <textarea id="message" rows={2} style={{ maxWidth: '900px' }}  className="block  mx-auto resize-none indent-8 p-1.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder="Write your thoughts here..."></textarea>

        </div>

        <div className="container  grid grid-row-1 grid-cols-2   content-center    pt-2">
        <button type="button" style={{maxWidth:'400px'}} className="text-gray-900  mx-40 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Generate</button>
        <button type="button"  style={{maxWidth:'400px'}} className="text-gray-900 mx-40 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Mint</button>
        </div>

        </div>
       
            
        </>
    )
}

export default Textarea;