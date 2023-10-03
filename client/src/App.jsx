/* eslint-disable no-unused-vars */
import { 
   useState,
  useEffect } from 'react'
import {ethers} from "ethers"
import './App.css'
import storage from './artifacts/contracts/web3storage.sol/web3strorage.json'
import { FileUpload } from './components/FileUpload'

function App() {
   const [account, setAccount] = useState('')
  const [contract, setContract] = useState('')
   const [provider, setProvider] = useState('')
  // const [modal, setModal] = useState(false)

  useEffect(()=>{
    const provider = new ethers.providers.Web3Provider(window.ethereum)

    const wallet = async()=>{
      if(provider){
        await provider.send("eth_requestAccounts",[])//to open metamask automatically 
        const signer =await provider.getSigner() 
        const address = await signer.getAddress() // address of connected account
        console.log('address',address)
        setAccount(address)
        const contractAddresss = '0x5FbDB2315678afecb367f032d93F642f64180aa3' // from upload.sol
        const contract = new ethers.Contract(
          contractAddresss,
          storage.abi,//from the artifacts  
          signer
        )
        console.log(contract)
        setContract(contract)
        setProvider(signer)
      }else{
        alert("metamask is not installed")
      }
    }
   provider && wallet()
  },[])
  return (
   <div>
    <h1>Hello</h1>
    <FileUpload contract={contract} account={account}/>
   </div>
  )
}

export default App
