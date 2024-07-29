import { useState } from 'react'
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Collabpage from './pages/homepage/Collabpage';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Footer from './pages/homepage/Footer';
import Sidebar from './pages/components/Sidebar';
import { Provider } from 'react-redux';
import store from './pages/redux/store';
import Admin from './pages/admin/Admin';
import User from './pages/user/Userpanel';
import Addstaff from './pages/addstaff/Addstaff';
// import Privateroute from './pages/privateroute/Privateroute';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login onLogin={handleLogin}/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/collab' element={<Collabpage isLoggedIn={isLoggedIn} onLogout={handleLogout}/>}/>
        <Route path='/footer' element={<Footer/>}/>
        {/* <Route path='/sidebar' element={<Sidebar/>}/> */}
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/side' element={<Sidebar/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/add' element={<Addstaff/>}/>
      </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default App
