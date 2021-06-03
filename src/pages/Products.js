import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductCart from '../components/ProductCard';

 function Products() {
    return (
        <div>
            <h1> This is products Page</h1>
            <ProductCart />
        </div>
    )
}
export default Products