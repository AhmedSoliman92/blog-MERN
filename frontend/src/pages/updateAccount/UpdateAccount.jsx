import './updateAccount.css'
import SideBar from "../../components/sideBar/SideBar";
import { useContext,useRef,useState } from 'react';
import { Context } from '../../contextAPI/Context'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function UpdateAccount() {
    const {user} = useContext(Context)
    const usernameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate= useNavigate()
    const pth= process.env.REACT_APP_PUBLIC_FOLDER
    const [files,setFile]= useState()

    const handleDelete =async(e)=>{
        e.preventDefault()
        try {
            await axios.delete(`/users/${user._id}`,{user})
            localStorage.removeItem("user");
            window.location.reload(true)
            window.location.replace('/register');
            
        } catch (err) {
            console.log(err)
        }
    }
    const handleUpdateUser= async(e)=>{
        e.preventDefault()
        const updateUser={
            username:usernameRef.current.value,
            email:emailRef.current.value,
            
        }
        if(passwordRef.current.value.length>6){
            updateUser.password= passwordRef.current.value
        }
        if(files){
            const form = new FormData();
            const fileName=Date.now()+ files[0].name;
            const myFileName = fileName.replaceAll(/\s/g,'')
            form.append("name",myFileName);
            form.append("file",files[0])
            updateUser.profileImg=myFileName
            try {
                await axios.post('upload/',form)
            } catch (err) {
                console.log(err)
            }
        }
        try {
            const res= await axios.put(`users/${user._id}`,updateUser)
            
            res.data && localStorage.setItem("user",JSON.stringify(res.data));
            window.location.reload(true);
            
        } catch (err) {
            console.log(err)
        }
    }
  return (
    <div className="account-conatiner">
        
        <form className="update-account" onSubmit={handleUpdateUser}>
            <div className="account-head">
                <span className="account-head-txt">Update your account</span>
                <span className="account-head-txt delete-account" onClick={handleDelete}>Delete Account</span>
            </div>
            <div className="update-profile-img">
                <img src={user.profileImg?pth+user.profileImg: pth+'unknown.jpg'} alt="" className="profile-img" />
                
                <label htmlFor="file">
                    <i className="update-icon fa-solid fa-camera"></i>
                <input id="file" type="file" style={{display:"none"}} onChange={e=>setFile(e.target.files)} accept=".jpg, .jpeg, .png"/>
            </label>
            </div>
            
            <div className="account-data">
                <input type="text" className="input-data" placeholder="Username" defaultValue={user.username} ref={usernameRef} required/>
                <input type="email" className="input-data" placeholder="Email" defaultValue={user.email} ref={emailRef} required/>
                <input type="password" className="input-data" placeholder="Password" ref={passwordRef} />
                <button className="update-btn" type="submit">update</button>
            </div>
        </form>
        <SideBar/>
    </div>
  )
}
