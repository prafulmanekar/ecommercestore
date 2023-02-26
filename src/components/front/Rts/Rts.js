import React from 'react';
import Products from '../Products/Products';
import Signup from '../Signup/Signup';
import Cart from '../Cart/Cart';
import { Routes , Route } from 'react-router-dom';

const Rts = ({productItems , cartItems , handleAddProduct , handleRemoveProduct , handleCartClearance}) => {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Products productItems={productItems} 
        handleAddProduct={handleAddProduct} 
        handleRemoveProduct={handleRemoveProduct}
        handleCartClearance={handleCartClearance}
        />}></Route>


        <Route exact path='/signup' element={< Signup/>}></Route>


        <Route exact path='/cart' element={< Cart cartItems={cartItems} 
        handleAddProduct={handleAddProduct} 
        handleRemoveProduct={handleRemoveProduct} 
        handleCartClearance={handleCartClearance}
        />} ></Route>

      </Routes>
    </div>
  )
}

export default Rts
