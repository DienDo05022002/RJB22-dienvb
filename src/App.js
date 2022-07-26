import './App.css';
import { BrowserRouter, Routes, Route, NavigationType, Link } from "react-router-dom";
import Home from './Project/Home';

import Customers from './Project/Customers/Customers';
import CustomerList from './Project/Customers/pages/CustomersList';
// import CustomerForm from './Project/Customers/pages/CustomerForm';
import CustomersForm from './Project/Customers/pages/CustomersForm';


import Products from './Project/Products/Products';
import ProductsList from './Project/Products/pages/ProductsList';
import ProductsForm from './Project/Products/pages/ProductsForm';
import Comp from './Project/Components/Comp.css'

 

function App() {
  return (
    <>
    <BrowserRouter>
      <div> 
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/customers/list">Customers List</Link>
          </li>
          <li>
            <Link to="/customers/form">Customers Form</Link>
          </li>
          <li>
            <Link to="/products/list">Products List</Link>
          </li>
          <li>
            <Link to="/products/form">Products Form</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='customers' element={<Customers/>}>
          <Route path='list' element={<CustomerList />}/>
          <Route path='edit/:id' element={<CustomersForm />}/>
          <Route path='form' element={<CustomersForm />}/>
        </Route>
        <Route path='products' element={<Products/>}>
          <Route path="list" element={<ProductsList/>}/>
          <Route path="edit/:id" element={<ProductsForm/>}/>
          <Route path="form" element={<ProductsForm/>}/>
        </Route>
      </Routes>
    </BrowserRouter>

    
      {/* <JSX></JSX> */}
      {/* <ES6></ES6> */}
    </>
  );
}

export default App;

