import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CartDetails from './components/CartDetails';

import DrinkItemList from './components/DrinkItemList';
import NonVegItemList from './components/NonVegItemList';
import ParentOne from './components/ParentOne';
import RestroNavigation from './components/RestroNavigation';
import ReviewPage from './components/ReviewPage';
import LoginRestrorent from './components/LoginRestrorent';


import UserProvider, { ButtonContext } from './components/BasicConstant';

import FeedbackComponent from './components/FeedbackComponent';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import background from "./restroImage.jpg";
import AllOrders from './components/AllOrders';
import LoginErrorPage from './components/LoginErrorPage';
import Register from './components/Register';
import HeaderComponent from './HeaderComponent';
import VegItemList from './components/VegItemList';
import Dashboard from './components/Dashboard';
import CreateItem from './components/CreateItem';
import AdminDashboard from './components/AdminDashboard';
import RegisterAdmin from './components/RegisterAdmin';

function App() {
  const flag = false;
  const myStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  };
  return (
    <div style={myStyle}>



      <UserProvider>




        <HeaderComponent />



        <Router>

          <Routes>

            <Route path="/reviews" element={<ReviewPage />} />
            <Route path="/parnt" element={<ParentOne />} />
            <Route path="/RestrNav" element={<RestroNavigation />} />
            <Route path="/vegItemsList" element={<VegItemList />} />
            <Route path="/nonVegItemsList" element={<NonVegItemList />} />
            <Route path="/drinkItemsList" element={<DrinkItemList />} />
            <Route path="/cart" element={<CartDetails />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<LoginRestrorent />} />
            <Route path="/feedback" element={<FeedbackComponent />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/contactUs" element={<ContactUs />} />
          
            <Route path='/allOrders' element={<AllOrders />} />
            <Route path='/loginError' element={<LoginErrorPage />} />
            <Route path='/register' element={<Register />} />
            <Route path='/registerAdmin' element={<RegisterAdmin />} />
            <Route path='/createItem' element={<CreateItem />} />
            <Route path="/adminDashboard" element={<AdminDashboard/>} />
          </Routes>

        </Router>
      </UserProvider>
    </div>
  );
}
export default App;
