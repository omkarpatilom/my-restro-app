import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CartDetails from './components/CartDetails';
import DemoBodyComponent from './components/DemoBodyComponent';
import DrinkItemList from './components/DrinkItemList';
import NonVegItemList from './components/NonVegItemList';
import ParentOne from './components/ParentOne';
import RestroNavigation from './components/RestroNavigation';
import VegItemList from './components/VegItemList';


function App() {
  return (
    <div style={{ "backgroundColor": "yellow" }}>
      <Router>
        {/* <HeaderComponent /> */}

        <Routes>
          {/* <Route path="/dashboard" element={<DashBoard/>} />
                    <Route path="/login" element={<LoginComponent/>} />
                    <Route path="/create" element={<CreateComponent/>} />
                    <Route path="/getAll" element={<GetAllComponent/>} />
                    <Route path="/update" element={<UpdateComponent/>} />
                    <Route path="/contactUs" element={<ContactUs/>} />
                    <Route path="/aboutUs" element={<AboutUs/>} />
                    <Route path="/feedback" element={<FeedbackComponent/>} />
                    <Route path="/billing" element={<BillingComponent/>} />
                    <Route path="/menu" element={<MenuComponent/>} />
                    <Route path="/order" element={<OrderDetailsCoomponent/>} />
                    <Route path="/table" element={<ShowTable/>} /> */}
          <Route path="/" element={<ParentOne />} />
          <Route path="/RestrNav" element={<RestroNavigation />} />
          <Route path="/vegItemsList" element={<VegItemList />} />
          <Route path="/nonVegItemsList" element={<NonVegItemList />} />
          <Route path="/drinkItemsList" element={<DrinkItemList />} />
          <Route path="/cart" element={<CartDetails />} />
          <Route path="/demo" element={<DemoBodyComponent />} />


        </Routes>

        {/* <FooterComponent /> */}
      </Router>




    </div>

  );
}
export default App;