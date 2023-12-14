import { ethers} from "ethers"
const provider = new ethers.providers.Web3Provider(window.ethereum)
export const Navbar = () => {

  const handleClick =async () => {
 
    console.log('clcik',provider)
    if(provider){
      await provider.send("eth_requestAccounts")
      const signer =await provider.getSigner() 
      const address = await signer.getAddress() // address of connected account
      console.log('Signer',signer)
      console.log('address',address)
      // setAccount(address)
      // const contractAddresss = '0x5FbDB2315678afecb367f032d93F642f64180aa3' // from upload.sol
      // const contract = new ethers.Contract(
      //   contractAddresss,
      //   storage.abi,//from the artifacts  
      //   signer
      // )
     
      // setContract(contract)
      // setProvider(signer)
    }else{
      alert("metamask is not installed")
    }
  }
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
       <div className="flex h-14 items-center justify-between border-b border-zinc-200">
       <a href="#">
          <span className="sr-only">Workflow</span>
          <img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt=""/>
        </a>

        <div className="hiddden items-center space-x-4 sm:flex">
         
          <div className="flex  lg:w-0 lg:flex-1 justify-end  ">
            <button onClick={handleClick} className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"> Get started </button>
          </div>
            
          </div>
      </div>
    </nav>

  )
}
