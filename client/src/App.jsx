/* eslint-disable no-unused-vars */
import { 
   useState,
  useEffect } from 'react'
import {ethers} from "ethers"
import './App.css'
import storage from './artifacts/contracts/web3storage.sol/web3strorage.json'
import { FileUpload } from './components/FileUpload'
import Display from './components/Display'

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
        window.ethereum.on('accountsChanged',()=>{
          window.location.reload()
        })
        const signer =await provider.getSigner() 
        const address = await signer.getAddress() // address of connected account
        
        setAccount(address)
        const contractAddresss = '0x5FbDB2315678afecb367f032d93F642f64180aa3' // from upload.sol
        const contract = new ethers.Contract(
          contractAddresss,
          storage.abi,//from the artifacts  
          signer
        )
       
        setContract(contract)
        setProvider(signer)
      }else{
        alert("metamask is not installed")
      }
    }
   provider && wallet()
  },[])
  return (
   <div className="App">
      <h1 style={{ color: "white" }}>Gdrive 3.0</h1>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <p style={{ color: "white" }}>
        Account : {account ? account : "Not connected"}
      </p>
      <FileUpload contract={contract} account={account} />
      <Display contract={contract} account={account}  />
   </div>
  )
}

export default App
