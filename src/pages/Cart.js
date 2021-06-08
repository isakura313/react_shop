import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { Provider } from 'react-redux';




function Сart(props) {
    const productNow = props.countOfProducts
    console.log(productNow)
    let CartList =  () => { 
        if (productNow == 0 ) {
        return "Корзина пуста! Идите и купите чего - нибудь!"
      } 
        return "Ваши товары"
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
                    <h3> Список товаров </h3>
                </Grid>
            </Grid>
        </div>
    )
    }
export default Сart