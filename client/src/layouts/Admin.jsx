import { useState,useEffect } from 'react';
import axios from 'axios';

function ImageUpload() {
  const [file, setFile] = useState(null);
  const [imageData,setImageData] = useState()

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = () => {
  
    const formData = new FormData();
    formData.append('image', file);
  axios.post('http://localhost:3000/upload', formData)
  .then(res=>{
    if(res.data.Status==="Success"){
      console.log('succeed')
    } else {
      console.log('fail')
    }
  })
  .catch(err=>{
    console.log(err)
  })
  };

  useEffect(()=>{
    axios.get('http://localhost:3000/')
    .then(res=>{
      setImageData(res.data)
    })
    .catch(err=>console.log(err))
  },[])

  return (
    <div>
      <input type="file" onChange={handleFileChange} accept="image/*" />
      <button onClick={handleSubmit}>Upload</button>
      <br/>
      {imageData.map((data,index)=>(
        <img key={index} src={'http://localhost:3000/images/'+data.imageFile}/>
      ))}
    </div>
  );
}

export default ImageUpload;