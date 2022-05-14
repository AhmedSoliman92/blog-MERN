import Bar from './components/bar/Bar'
import Home from './pages/home/Home'
import SinglePost from  './pages/singlePost/SinglePost'
import CreatePost  from "./pages/createPost/CreatePost";
import UpdateAccount from "./pages/updateAccount/UpdateAccount";
import Login from '../src/pages/login/Login'
import Register from '../src/pages/register/Register'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { useContext } from 'react';
import { Context } from './contextAPI/Context';

function App() {
  const {user} = useContext(Context)
  return (
      <Router>
        <Bar/>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/register' element={user? <Home/>:<Register/>}/>
            <Route path='/login' element={user? <Home/>:<Login/>}/>
            <Route path='/update' element={!user? <Home/>:<UpdateAccount/>}/>
            <Route path='/create' element={!user? <SinglePost/>:<CreatePost/>}/>
            <Route path='/:id' element={<SinglePost/>}/>
          </Routes>
        
      </Router>
    
      
  );
}

export default App;
