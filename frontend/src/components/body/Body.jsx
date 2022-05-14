import  './body.css'
import {useEffect, useState} from 'react';
import axios from 'axios';
import {format} from 'timeago.js'
import { Link, useLocation } from 'react-router-dom';
export default function Body() {
    const [blogs, setBlogs] = useState([]);
    const pth= process.env.REACT_APP_PUBLIC_FOLDER
    const location = useLocation();
    const cat = location.search
    useEffect(() => {
        const fetchBlogs = async()=>{
            
            const res = await axios.get(cat.length>0? `blogs/cat${cat}`:'blogs');
            setBlogs(res.data)
            console.log(res.data)
        }
        fetchBlogs();
    }, [cat]);
  return (
    <div className="body">
                <div className="post-list">
                    {blogs.map(
                        (blog)=>(
                            
                            <div className="post" key={blog._id}>
                            <Link key={blog._id} to={`/${blog._id}`} style={{textDecoration:"none", color:"inherit"}}>
                                <img src={`${pth}${blog.blogImg}`} alt="" className="post-img" />
                                <div className="post-body">
                                    <span className="post-category"> {blog.category.join('  ')}</span>
                                    <span className="post-title">{blog.title}</span>
                                    <span className="post-date">{format(blog.createdAt)}</span>
                                    <span className="post-desc">{blog.desc.length< 50? blog.desc:blog.desc.substring(0,400)+'...'}</span>
                                </div>
                                </Link>
                            </div>
                            
                    )
                    )}

                </div>
        </div>
  )
}
