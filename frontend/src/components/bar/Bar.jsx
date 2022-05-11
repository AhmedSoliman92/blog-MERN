import './bar.css'

export default function Bar() {
  return (
    <div className="bar">
        <div className="left-bar">
            <i className="top-icon fa-brands fa-facebook-square"></i>
            <i className="top-icon fa-brands fa-instagram"></i>
            <i className="top-icon fa-brands fa-linkedin"></i>
        </div>
        <div className="center-bar">
            <ul className='top-list'>
                <li className='list-item'>HOME</li>
                <li className='list-item'>ABOUT</li>
                <li className='list-item'>WRITE</li>
                <li className='list-item'>CONTACT</li>
                <li className='list-item'>LOGOUT</li>
            </ul>
        </div>
        <div className="right-bar">
            <img className='bar-img' src="/assets/images/ahmed.jpeg" alt="" />
            <i className="search fa-solid fa-magnifying-glass"></i>

        </div>
    </div>
  )
}
