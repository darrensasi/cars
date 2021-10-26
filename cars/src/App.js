import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css' ;
import Home from './Home';
import Cart from "./Cart";
import { cartProvider } from "react-use-cart";


function App() {
  return (
    <>
    <cartProvider>
       <Home />
       <Cart />
    </cartProvider>
    </>
  );
}

export default App;
