import './singlePost.css'
import SideBar from '../../components/sideBar/SideBar'
import {Context} from '../../contextAPI/Context'
import { useContext,useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {format} from 'timeago.js'
const SinglePost = () => {
    const {user} = useContext(Context)
    const [blog, setBlog] = useState(null)
    const param= useParams().id
    console.log(param)
    const pth= process.env.REACT_APP_PUBLIC_FOLDER

    useEffect(() => {
            const handleSinglePage=async()=>{
                const res = await axios.get(`/blogs/${param}`);
                console.log(res.data)
                setBlog(res.data)
            } 
            handleSinglePage();

    }, [param]);
    return (
        <div className="single-post-page">
            <div className="single-post-container">
                <div className="single-post">
                    <img src={blog?`${pth}${blog.blogImg}`:''} alt="" className="single-post-img" />
                    <div className="post-body">
                        <div className="single-post-header">
                            <span className="left-header"> Author: {blog?blog.username:''}</span>
                            <span className="center-header">{blog?blog.title:''}</span>
                            <div className="right-header">
                                
                                <div className="single-post-icon">
                                    <i className="edit-icons fa-solid fa-pen-to-square"></i>
                                    <i className="trash-icons fa-solid fa-trash-can"></i>
                                </div>
                                
                            </div>
                            
                        </div>
                        <span className="single-post-date">{blog?format(blog.createdAt):''}</span>
                        <span className="single-post-desc"> <b className="first-letter">
                        {blog?blog.desc.substring(0,1):''}
                        </b>{blog?blog.desc.substring(1):''}
                        </span>
                    </div>
                    
                </div>
            </div>
            <SideBar/>
        </div>
    );
}

export default SinglePost;
