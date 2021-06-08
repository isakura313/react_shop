import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../pages/Home'
import Products from '../pages/Products'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import { MicNone } from "@material-ui/icons";
import Cart from '../pages/Cart';


export default function BasicExample() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"> */}
          {/* <MenuIcon /> */}
          {/* </IconButton> */}
          <Button variant="contained" color="secondary">
            <Link to="/"
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "20px"
              }}>    Home
                 </Link>
          </Button>
          <Button variant="contained" color="secondary">
            <Link to="/products"
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "20px"
              }} >Products</Link>
          </Button>
          <Button variant="contained" color="secondary">
            <Link to="/cart" style={{
              color: "white",
              textDecoration: "none",
              fontSize: "20px"
            }} >Cart</Link>
          </Button>

          <hr />

          {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
        </Toolbar>
      </AppBar>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/cart">
          <Cart  countOfProducts = {10} />
        </Route>
      </Switch>
    </Router>

  );
}