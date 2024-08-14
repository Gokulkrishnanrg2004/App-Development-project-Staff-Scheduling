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
import Schedule from './pages/schedule/Schedule';
import Landing from './pages/landing/Landing';
import StaffSchedule from './pages/staffschedule/StaffSchedule';
import AddUser from './pages/adduser/AddUser';
import Pricing from './pages/pricing/Pricing';
import About from './pages/about/About';
import ScheduleUser from './pages/scheduleuser/ScheduleUser';
import Payment from './pages/pricing/Payment';
import Employee from './pages/employee/Employee';
import ViewSchedule from './pages/employee/ViewSchedule';
import Notifications from './pages/notifications/Notifications';
import ViewQuery from './pages/employee/ViewQuery';

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
        <Route path='/login' element={<Login onLogin={handleLogin}/>}/>
        <Route path='/staff' element={<StaffSchedule/>}/>
        <Route path='/adduser' element={<AddUser/>}/>
        <Route path='/' element={<Landing/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/collab' element={<Collabpage isLoggedIn={isLoggedIn} onLogout={handleLogout}/>}/>
        <Route path='/footer' element={<Footer/>}/>
        {/* <Route path='/sidebar' element={<Sidebar/>}/> */}
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/side' element={<Sidebar/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/sch' element={<Schedule/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/sch2' element={<ScheduleUser/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path = '/employee' element={<Employee/>}/>
        <Route path = '/view' element={<ViewSchedule/>}/>
        <Route path='/noti' element={<Notifications/>}/>
        <Route path='/viewq' element={<ViewQuery/>}/>
      </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default App
