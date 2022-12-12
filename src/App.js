// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeComponent from './components/Home';
import PaymentComponent from './components/Payment';
import BillComponent from './components/bill';
import TableComponent from './components/Table';
import MenuComponent from './components/Menu';
import OrderComponent from './components/Order';
import NavbarComponent from './components/Navbar';
import LoginReg from "./LoginInterface/LoginReg";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<LoginReg />}>
          <Route path="/login/register" element={<LoginReg />}/>
          </Route>
          <Route path="/dashboard" element={<NavbarComponent />} />
          <Route path='/home' element={<HomeComponent />}></Route>
          <Route path='/payment' element={<PaymentComponent />}></Route>
          <Route path='/bill' element={<BillComponent />}></Route>
          <Route path='/table' element={<TableComponent />}></Route>
          <Route path='/menu' element={<MenuComponent />}></Route>
          <Route path='/order' element={<OrderComponent />}></Route>
          <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
      </Routes>
      </BrowserRouter>
      
      </div>
  );
}

export default App;
