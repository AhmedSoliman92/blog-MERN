import Bar from './components/bar/Bar'
import Home from './pages/home/Home'
import SinglePost from  './pages/singlePost/SinglePost'
import CreatePost  from "./pages/createPost/CreatePost";
import UpdateAccount from "./pages/updateAccount/UpdateAccount";
import Login from '../src/pages/login/Login'
import Register from '../src/pages/register/Register'
function App() {
  return (
    <>
      <Bar/>
      <Register/>
    </>
  );
}

export default App;
