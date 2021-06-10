import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { Provider } from 'react-redux';
import {cartList} from '../features/counter/counterSlice';




function Сart(props) {
    const cartData = useSelector(cartList);
    console.log(cartData)
    const productNow = props.countOfProducts
    
    const ProductList = cartData.map(product=>
       
          <div key={product.id}> 
          {product.title} {product.price}  </div>
        )
    let CartList =  () => { 
        if (productNow == 0 ) {
        return "Корзина пуста! Идите и купите чего - нибудь!"
      } 
        return  {ProductList}
      } 
    return (
        <div>
            <Grid container spacing={3} 
                direction="row"
                justify="center">
                <Grid item xs={12}>
                <h1 style={{display: "flex", justifyContent: "center"}}>
                    <CartList/>
                    </h1>;
                </Grid>
                <Grid item xs={8}>
                {ProductList}
                </Grid>
            </Grid>
        </div>
    )
    }
export default Сart