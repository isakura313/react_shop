import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SliderHome from '../components/SliderHome'
import Grid from '@material-ui/core/Grid';


function Home() {
    return (
        <div>
            <Grid container spacing={3} 
                direction="row"
                justify="center">
                <Grid item xs={12}>
                    <h1 style={{display: "flex", justifyContent: "center"}}> 
                    Магазин Домашняя Ягода
                    </h1>
                </Grid>
                <Grid item xs={8}>
                    <SliderHome />
                </Grid>
            </Grid>
        </div>
    )
}
export default Home