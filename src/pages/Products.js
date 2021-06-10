import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductCart from '../components/ProductCard';
import products from '../products.json'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

console.log(products.products)

 function Products() {
     
    const ProductList = products.products.map(product=>
        <Grid item lg={4} >
            <ProductCart 
                img = {product.img} 
                title = {product.title} 
                price = {product.price} 
            />
        </Grid>
        )
    return (
        <div>
            <h1> This is products Page</h1>
            <Container maxWidth="lg">
            <Grid container spacing={3}>
              {ProductList}
            </Grid>
            </Container>
        </div>
    )
}
export default Products