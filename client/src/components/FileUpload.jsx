import { useState } from "react";
import "./FileUpload.css";
export const FileUpload = ({contract,account}) => {
  const[file,setFile] = useState(null)
  const[fileName,setFileName] = useState(null)

  const retrieveFile = (e) =>{
    const data = e.target.files[0];
    const reader = new window.FileReader()
    reader.readAsArrayBuffer(data)
    reader.onloadend = () =>{
      setFile(e.target.files[0])
    }
    setFileName(e.target.files[0].name)
    e.preventDefault()
  }

 

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(file){
      try {
        const formData = new FormData();
        formData.append("file", file);
      } catch (e) {
        alert("Unable to upload image to Pinata");
      }
    }
  }
  return (

    <div>
        <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="file-upload" className="choose">
          Choose Image
        </label>
        <input
          disabled={!account}
          type="file"
          id="file-upload"
          name="data"
          onChange={retrieveFile}
        />
        <span className="textArea">Image: </span>
        <button type="submit" className="upload" >
          Upload File
        </button>
      </form>
    </div>
  )
}

