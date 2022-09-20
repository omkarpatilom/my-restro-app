import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import ChildOne from './components/DemoComponents/ChildOne';
import ChildTwo from './components/DemoComponents/ChildTwo';
import ParentOne from './components/RestaurentProject/ParentOne';
import RestroNavigation from './components/RestaurentProject/RestroNavigation';


    function App() {
      return (
        <div style={{"backgroundColor": "yellow"}}>
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
                    <Route path="/" element={<ParentOne/>} />
                    <Route path="/RestrNav" element={<RestroNavigation/>} />
                    <Route path="/vegItemsList" element={<VegItemList></VegItemList>}/>
                    <Route path="/nonVegItemsList" element={<ChildTwo/>} />
                    <Route path="/two" element={<ChildTwo/>} />
                    <Route path="/two" element={<ChildTwo/>} />

                    </Routes>
                
              {/* <FooterComponent /> */}
        </Router>
   
        
        
        
    </div>

      );
    }
    export default App;