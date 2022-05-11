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
            <li className="category-item">Life</li>
            <li className="category-item">Style</li>
            <li className="category-item">Tech</li>
            <li className="category-item">Music</li>
            <li className="category-item">Sport</li>
            <li className="category-item">Cinema</li>
            <li className="category-item">Education</li>
            <li className="category-item">Faction</li>
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
