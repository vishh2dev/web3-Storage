import React, { useState } from 'react'
import './Display.css'
const Display = ({contract,account}) => {
  const[data,setData] = useState(null)
    const getData = async()=>{
        let dataArray
        const otherAddress = document.querySelector(".address").value
        try {
          if(otherAddress){
            dataArray = await contract.display(otherAddress)
          }else{
             // eslint-disable-next-line react/prop-types
          dataArray = await contract.display(account)
          console.log(dataArray);
          }
          
        } catch (error) {
          alert(error)
        }

        const isEmpty = Object.keys(dataArray).length = 0
        if(!isEmpty){
          const images = dataArray.map((item,i) => {
           return (
           <a href={item} key={`a${i}`}  target='_blank' rel='noopener noreferrer'>
            <img key={`img${i}`}
            src={item}
            alt='new'
            className='image-list'
            />
            </a>)
          })
          setData(images)
        } else{
          alert('No image to display')
        }
    }
  return (
    <>
    <div className='image-list'>{data} </div>
        <input 
        type='text'
        placeholder='Enter Address'
        className='address'
        />
        <button className='center button' onClick={getData}>
            Get Data
        </button>
    </>
  )
}

export default Display
