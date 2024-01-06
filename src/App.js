import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Master from './components/Master';
import Sale from './components/Sale';
import ReturnPolicy from './components/ReturnPolicy';
import Payment from './components/Payment';
import Report from './components/Report';
import Purchase from './components/Purchase';
import Backup from './components/Backup';
import Setting from './components/Setting';
import UploadExcel from './components/UploadExcel';
import Customer from './components/Customer';
import UpdateCustomer from './components/UpdateCustomer';
import Item from './components/Item';
import UpdateItem from './components/UpdateItem';
import Vendor from './components/Vendor';
import Dash from './components/Dash';
import Invoice from './components/Invoice';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route  path="/login"  element={<Login/>} />
          <Route  path="/master"  element={<Master/>} />
          <Route  path="/sale"  element={<Sale/>} />
          <Route  path="/returnpolicy"  element={<ReturnPolicy/>} />
          <Route  path="/payment"  element={<Payment/>} />
          <Route  path="/report"  element={<Report/>} />
          <Route  path="/purchase"  element={<Purchase/>} />
          <Route  path="/backup"  element={<Backup/>} />
          <Route  path="/dash"  element={<Dashboard/>} />
          <Route  path="/"  element={<Home/>} />
          <Route  path="/setting"  element={<Setting/>} />
          <Route  path="/uploadexcel"  element={<UploadExcel/>} />
          <Route  path="/customer"  element={<Customer/>} />
          <Route  path="/update"  element={<UpdateCustomer/>} />
          <Route  path="/item"  element={<Item/>} />
          <Route  path="/updateItem"  element={<UpdateItem/>} />
          <Route  path="/vendor"  element={<Vendor/>} />
          <Route  path="/dashh"  element={<Dash/>} />
          <Route  path="/invoice"  element={<Invoice/>} />
      
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
