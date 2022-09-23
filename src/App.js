import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CartDetails from './components/CartDetails';
import DemoBodyComponent from './components/DemoBodyComponent';
import DrinkItemList from './components/DrinkItemList';
import NonVegItemList from './components/NonVegItemList';
import ParentOne from './components/ParentOne';
import RestroNavigation from './components/RestroNavigation';
import VegItemList from './components/VegItemList';
import img3 from '../src/pic3.jpg'
import LoginComponent from './components/medicalProject/LoginComponent';
import LoginRestrorent from './components/LoginRestrorent';
import RestroFooter from './components/RestroFooter';

import ChildComp from './components/ChildComp';
import UserProvider, { ButtonContext } from './components/BasicConstant';

import BodyComponent from './components/BodyComponent';
import FeedbackComponent from './components/FeedbackComponent';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import background from "./restroImage.jpg";
import AllOrders from './components/AllOrders';
import LoginErrorPage from './components/LoginErrorPage';
import Register from './components/Register';
import HeaderComponent from './HeaderComponent';

function App() {
  const myStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  };
  return (
    <div style={myStyle}>


      <UserProvider>
        {/* <BodyComponent></BodyComponent> */}
        <Gallery></Gallery>

        <Router>
          <HeaderComponent />
          <Routes>


            <Route path="/parnt" element={<ParentOne />} />
            <Route path="/RestrNav" element={<RestroNavigation />} />
            <Route path="/vegItemsList" element={<VegItemList />} />
            <Route path="/nonVegItemsList" element={<NonVegItemList />} />
            <Route path="/drinkItemsList" element={<DrinkItemList />} />
            <Route path="/cart" element={<CartDetails />} />
            <Route path="/dashboard" element={<BodyComponent />} />
            <Route path="/login" element={<LoginRestrorent />} />
            <Route path="/feedback" element={<FeedbackComponent />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path='/child' element={<ChildComp />} />
            <Route path='/allOrders' element={<AllOrders />} />
            <Route path='/loginError' element={<LoginErrorPage />} />
            <Route path='/register' element={<Register />} />
          </Routes>
          <RestroFooter />
        </Router>
      </UserProvider>
    </div>
  );
}
export default App;
