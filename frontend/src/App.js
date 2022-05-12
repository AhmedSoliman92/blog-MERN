import Bar from './components/bar/Bar'
import Home from './pages/home/Home'
import SinglePost from  './pages/singlePost/SinglePost'
import CreatePost  from "./pages/createPost/CreatePost";
import UpdateAccount from "./pages/updateAccount/UpdateAccount";
import Login from '../src/pages/login/Login'
import Register from '../src/pages/register/Register'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
function App() {
  return (
      <Router>
        <Bar/>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/update' element={<UpdateAccount/>}/>
            <Route path='/create' element={<CreatePost/>}/>
            <Route path='/:id' element={<SinglePost/>}/>
          </Routes>
        
      </Router>
    
      
  );
}

export default App;
