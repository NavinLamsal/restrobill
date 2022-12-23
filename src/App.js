import './App.css';
import './Sidebar.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeComponent from './pages/Home';
import PaymentComponent from './pages/Payment';
import BillComponent from './pages/bill';
import TableComponent from './pages/Table';
import MenuComponent from './pages/Menu';
import OrderComponent from './pages/Order';
import NavbarComponent from './components/Navbar';
import LoginReg from "./LoginInterface/LoginReg";
import Sidebar from "./components/Sidebar";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Sidebar>
        <Routes>
      {/* <Route path="/" element={<LoginReg />}>
          <Route path="/login/register" element={<LoginReg />}/>
          </Route> */}
          
            <Route path="/dashboard" element={<NavbarComponent/>} />
            <Route path='/home' element={<HomeComponent />}></Route>
            <Route path='/payment' element={<PaymentComponent />}></Route>
            <Route path='/bill' element={<BillComponent />}></Route>
            <Route path='/table' element={<TableComponent />}></Route>
            <Route path='/menu' element={<MenuComponent />}></Route>
            <Route path='/order' element={<OrderComponent />}></Route>
          
          {/* <Route path="*" element={<h1>Error 404 Page not found !!</h1>} /> */}
          </Routes>
      </Sidebar>
      </BrowserRouter>
      
      </div>
  );
}

export default App;
