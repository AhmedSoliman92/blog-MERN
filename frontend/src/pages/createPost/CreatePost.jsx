import './createPost.css'
import { useContext, useState,useRef } from "react";
import {Context} from '../../contextAPI/Context'
import axios from 'axios'
const CreatePost = () => {
    const [files, setFiles]= useState([]);
    const handlePreview = (e)=>{
        setFiles(e.target.files);
    }
    const handleCheckBox = (e)=>{
        setCategory([e.target.value, ...category])
    }
    const {user}= useContext(Context)
    const title= useRef()
    const desc= useRef()
    const [category,setCategory]=useState([])
const handleCreateBlog = async(e)=>{
    e.preventDefault();
    const form = new FormData();
    const fileName=Date.now()+ files[0].name;
    const myFileName = fileName.replaceAll(/\s/g,'')
    form.append("name",myFileName);
    form.append("file",files[0])
        console.log(category)
    const newBlog = {
        username:user.username,
        title:title.current.value,
        desc:desc.current.value,
        category:category,
        blogImg:myFileName
    }
    try {
        await axios.post('/upload',form)
        const res= await axios.post('/blogs/create',newBlog)
        console.log(res.data)
        res.data && window.location.replace(`${res.data._id}`)
    } catch (err) {
        console.log(err)
    }
}
    return (
        <div className="create-post-container">
            
            {files.length===1 && <img src={URL.createObjectURL(files[0])} alt="" className="uploaded-img" />}
            <form className="post-form" onSubmit={handleCreateBlog}>
                <div className="top-form">
                <button className="submit-btn" type="submit">Publish</button>
                <label htmlFor="file" className="file-label">
                    <i className="file-icon fa-solid fa-plus"></i>
                </label>
                <input id="file" type="file" style={{display:'none'}} onChange={handlePreview} />
                
                <input type="text" className="post-title" placeholder="Title..." autoFocus={true} ref={title}/>
                </div>
                <div className="checkbox-container">
                
                <label className="chekbox">
                    <input type="checkbox" className="checkbox-icon" value="Life" onChange={handleCheckBox}/>
                    Life
                </label>
                <label className="chekbox">
                    <input  type="checkbox" className="checkbox-icon" value="Fashion" onChange={handleCheckBox} />
                    Fashion
                </label>
                <label className="chekbox">
                    <input  type="checkbox" className="checkbox-icon" value="Sport" onChange={handleCheckBox}/>
                    Sport
                </label>
               
                </div>
                <textarea name="" id="" cols="30" rows="15" className="desc-post" placeholder="Write your description..." ref={desc}></textarea>
                
            </form>
            
        </div>
    );
}

export default CreatePost;
