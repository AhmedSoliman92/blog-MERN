import './header.css'
export default function Header() {
  return (
    <div className='header'>
        <div className="header-title">
            <span className="main-header">Blog</span>
            <span className="secondary-header">Developer Blog</span>
        </div>
        <img src="/assets/images/headerblog.jpg" alt="" className="img-header" />
    </div>
  )
}
