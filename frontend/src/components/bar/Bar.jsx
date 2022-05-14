import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../contextAPI/Context';
import './bar.css'

export default function Bar() {
    const {user} = useContext(Context);
    const handleLogout =()=>{
        localStorage.removeItem('user');
        window.location.replace('/login')
    }
  return (
    <div className="bar">
        <div className="left-bar">
            <i className="top-icon fa-brands fa-facebook-square"></i>
            <i className="top-icon fa-brands fa-instagram"></i>
            <i className="top-icon fa-brands fa-linkedin"></i>
        </div>
        <div className="center-bar">
            <ul className='top-list'>
                <Link className='bar-link' to='/'>
                    <li className='list-item'>HOME</li>
                </Link>
                <li className='list-item'>ABOUT</li>
                <li className='list-item'>CONTACT</li>
                {user?<Link className='bar-link' to='/create'>
                    <li className='list-item'>WRITE</li>
                </Link>
                :
                <Link className='bar-link' to='/login'>
                    <li className='list-item'>LOGIN</li>
                </Link>}
                
                
                {user?<li className='list-item' onClick={handleLogout}>LOGOUT</li>
                :
                <Link className='bar-link' to='/register'>
                    <li className='list-item'>REGISTER</li>
                </Link>}
                
            </ul>
        </div>
        <div className="right-bar">
        {user?<img className='bar-img' src="/assets/images/ahmed.jpeg" alt="" />:''}
            <i className="search fa-solid fa-magnifying-glass"></i>

        </div>
    </div>
  )
}
