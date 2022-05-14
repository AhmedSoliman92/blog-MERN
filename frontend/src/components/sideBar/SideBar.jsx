import { Link } from 'react-router-dom';
import './sideBar.css';

export default function SideBar() {
  return (
    <div className="side-bar-container">
      <div className="side-bar-item">
        <hr className="hr-side-bar" />
        <h3 className="side-bar-title">ABOUT ME</h3>
        <hr className="hr-side-bar" />
        <div className="item-content">
        <img src="assets/images/ahmed.jpeg" alt="" className="about-img" />
        <span className="side-bar-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem atque harum eos vel obcaecati totam quisquam accusamus repudiandae eaque commodi doloribus beatae, architecto dignissimos deleniti!</span>
        </div>
      </div>
      <div className="side-bar-item">
        <hr className="hr-side-bar" />
        <h3 className="side-bar-title">CATEGORY</h3>
        <hr className="hr-side-bar" />
        <div className="item-content">
          <ul className="category-list">
            <Link className='cat-link category-item' to='/?cat=Life'>
              <li className="category-item">Life</li>
            </Link>

            <Link className='cat-link category-item' to='/?cat=Style'>
              <li className="category-item">Style</li>
            </Link>
            <Link className='cat-link category-item' to='/?cat=Tech'>
              <li className="category-item">Tech</li>
            </Link>
            <Link className='cat-link category-item' to='/?cat=Music'>
              <li className="category-item">Music</li>
            </Link>
            <Link className='cat-link category-item' to='/?cat=Sport'>
              <li className="category-item">Sport</li>
            </Link>
            <Link className='cat-link category-item' to='/?cat=Cinema'>
              <li className="category-item">Cinema</li>
            </Link>
            <Link className='cat-link category-item' to='/?cat=Education'>
              <li className="category-item">Education</li>
            </Link>
            <Link className='cat-link category-item' to='/?cat=Fashion'>
              <li className="category-item">Fashion</li>
            </Link>

            <li className="category-item"></li>
            <li className="category-item"></li>
            <li className="category-item"></li>
            <li className="category-item"></li>
            <li className="category-item"></li>
            <li className="category-item"></li>
            <li className="category-item"></li>
          </ul>
        </div>
      </div>
      <div className="side-bar-item">
        <hr className="hr-side-bar" />
        <h3 className="side-bar-title">FOLLOW US</h3>
        <hr className="hr-side-bar" />
        <div className="item-content">
          <ul className="follow-list">
            <i className="follow-icon fa-brands fa-facebook-square"></i>
            <i className="follow-icon fa-brands fa-instagram"></i>
            <i className="follow-icon fa-brands fa-linkedin"></i>
          </ul>
        </div>
      </div>

    </div>
  )
}
