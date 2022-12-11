import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeComponent from './components/Home';
import PaymentComponent from './components/Payment';
import BillComponent from './components/bill';
import TableComponent from './components/Table';
import MenuComponent from './components/Menu';
import OrderComponent from './components/Order';
import NavbarComponent from './components/Navbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavbarComponent></NavbarComponent>
      <Routes>
        <Route path='/' element={<HomeComponent />} ></Route>
          <Route path='/home' element={<HomeComponent />}></Route>
          <Route path='/payment' element={<PaymentComponent />}></Route>
          <Route path='/bill' element={<BillComponent />}></Route>
          <Route path='/table' element={<TableComponent />}></Route>
          <Route path='/menu' element={<MenuComponent />}></Route>
          <Route path='/order' element={<OrderComponent />}></Route>
      </Routes>
      </BrowserRouter>
      
      </div>
  );
}

export default App;
