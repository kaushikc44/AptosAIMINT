import { TokenClient,AptosClient } from "aptos";

function Aptos() {
    const pressme = () =>{
    const aptos = new AptosClient("https://fullnode.devnet.aptoslabs.com/v1");
    console.log(aptos);
    const server = aptos.estimateGasPrice().then((response) => console.log(response["gas_estimate"]));
    // const value = aptos.signTransaction()
    }
    
    return (

        <>
        <button onClick={pressme}>Press me</button>

        <button onClick={pressme}>Sign Transaction</button>

        </>
    )

}
export default Aptos;