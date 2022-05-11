import './home.css'
import Header from '../../components/header/Header'
import Body from '../../components/body/Body'
import SideBar from '../../components/sideBar/SideBar'
export default function Home() {
  return (
    
    <>
    <Header/>
      <div className="home">  
        <Body/>
        <SideBar/>
      </div>
    </>
  )
}
