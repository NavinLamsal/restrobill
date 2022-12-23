import './App.css';
import './Sidebar.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeComponent from './pages/Home';
import PaymentComponent from './pages/Payment';
import BillComponent from './pages/Bill';
import TableComponent from './pages/Table';
import MenuComponent from './pages/Menu';
import OrderComponent from './pages/Order';
import NavbarComponent from './components/Navbar';
import ProfileComponent from './pages/Profile'
import LoginReg from "./LoginInterface/LoginReg";
import Sidebar from "./components/Sidebar";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
    {/* {logged ? ( */}
      <>
      <NavbarComponent/>
        <div className="screens-container">
          <Routes>
            <Route path='/profile' element={<profileComponent />}></Route>
          </Routes>
          <Sidebar />
            <div className='screens-section-container'>
              <Routes>
                <Route path='/home' element={<HomeComponent />}></Route>
                <Route path='/payment' element={<PaymentComponent />}></Route>
                <Route path='/bill' element={<BillComponent />}></Route>
                <Route path='/table' element={<TableComponent />}></Route>
                <Route path='/menu' element={<MenuComponent />}></Route>
                <Route path='/order' element={<OrderComponent />}></Route>
              </Routes>              
            </div>
        </div>
      </>
    {/* ): (
      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>
    )} */}
     </BrowserRouter>
  </div>
);



  //     <BrowserRouter>
  //     <NavbarComponent/>
  //     <div className="screens-container">
  //       <Sidebar />
  //       <div className='screens-section-container'></div>
  //       <Routes>
  //     {/* <Route path="/" element={<LoginReg />}>
  //         <Route path="/login/register" element={<LoginReg />}/>
  //         </Route> */}
  
            
          
  //         {/* <Route path="*" element={<h1>Error 404 Page not found !!</h1>} /> */}
  //         </Routes>
  //     </Sidebar>
  //     </BrowserRouter>
      
  //     </div>
  // );
}

export default App;
