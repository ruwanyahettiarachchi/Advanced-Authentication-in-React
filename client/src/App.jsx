import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import Header from './components/Header';
import PrivateRoute from './components/privateRoute';

export default function App() {
  return (
    <BrowserRouter>

      <Header/>

      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='/about' element= {<About/>} />
        <Route path='/sign-in' element= {<SignIn/>} />
        <Route path='/sign-up' element= {<SignUp/>} />
        <Route element = {<PrivateRoute/>}>
        <Route path='/profile' element= {<Profile/>} />
        </Route>
      </Routes>
    
    </BrowserRouter>
  ) 
}
