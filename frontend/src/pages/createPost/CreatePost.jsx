import './createPost.css'
import { useState } from "react";

const CreatePost = () => {
    const [files, setFiles]= useState([]);
    const handlePreview = (e)=>{
        setFiles(e.target.files);
    }
    
    return (
        <div className="create-post-container">
            
            {files.length===1 && <img src={URL.createObjectURL(files[0])} alt="" className="uploaded-img" />}
            <form className="post-form">
                <div className="top-form">
                <button className="submit-btn" type="submit">Publish</button>
                <label htmlFor="file" className="file-label">
                    <i className="file-icon fa-solid fa-plus"></i>
                </label>
                <input id="file" type="file" style={{display:'none'}} onChange={handlePreview} />
                
                <input type="text" className="post-title" placeholder="Title..." autoFocus={true} />
                </div>
                <div className="checkbox-container">
                
                <lable className="chekbox">
                    <input type="checkbox" className="checkbox-icon" />
                    Life
                </lable>
                <lable className="chekbox">
                    <input type="checkbox" className="checkbox-icon" />
                    Fashion
                </lable>
                <lable className="chekbox">
                    <input type="checkbox" className="checkbox-icon" />
                    Sport
                </lable>
               
                </div>
                <textarea name="" id="" cols="30" rows="15" className="desc-post" placeholder="Write your description..." ></textarea>
                
            </form>
            
        </div>
    );
}

export default CreatePost;
