import React from 'react'

function form(props:any) {
    
    const updateCollectionName = (event : any) => {
     props.setcollectionName(event.target.value);
    }
    const changetomaxsupply = (event:any) =>{
        props.setmaxsupply(event.target.value);
    }
    const changestoroyalt = (event:any) =>{
        props.setroyaltAddress(event.target.value);
    }

    return (
        <form className="w-full max-w-lg p-2">
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Collection Name
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="CryptoPunks" onChange={updateCollectionName} value={props.collectionName} />
                    <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Royalty Pay Address
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="0x2845d80774ccf3ae0b02e39a149aff6a4f7b5a69fa59e2aa33d1d195d92693c3" value={props.royaltAddress} onChange={changestoroyalt} />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Max Supply
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="number" placeholder="10" value={props.maxsupply} onChange={changetomaxsupply} />
                    <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                </div>
            </div>
        </form>
    )
}

export default form