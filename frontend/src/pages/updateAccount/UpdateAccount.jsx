import './updateAccount.css'
import SideBar from "../../components/sideBar/SideBar";
export default function UpdateAccount() {
  return (
    <div className="account-conatiner">
        
        <div className="update-account">
            <div className="account-head">
                <span className="account-head-txt">Update your account</span>
                <span className="account-head-txt delete-account">Delete Account</span>
            </div>
            <div className="update-profile-img">
                <img src="/assets/images/ahmed.jpeg" alt="" className="profile-img" />
                <i class="update-icon fa-solid fa-camera"></i>
            </div>
            <div className="account-data">
                <input type="text" className="input-data" placeholder="Username" />
                <input type="email" className="input-data" placeholder="Email" />
                <input type="password" className="input-data" placeholder="Password" />
                <button className="update-btn" type="submit">update</button>
            </div>
        </div>
        <SideBar/>
    </div>
  )
}
