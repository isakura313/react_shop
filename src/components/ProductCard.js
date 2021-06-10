import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    decrement,
    increment,
    selectCount,
} from '../features/counter/counterSlice';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      maxWidth: 445,
    },
  });

function ProductCard(props) {
    const img = props.img;
    const title = props.title;
    const price = props.price
    const classes = useStyles();
    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    return (
        <div>
            {/* <img src='https://upload.wikimedia.org/wikipedia/commons/e/e5/Crystal_Project_cookie.png'
                onClick={() => dispatch(increment())}
                alt="logo" /> */}
       <Card className={classes.root} width="300">
      <CardActionArea>
        <CardMedia
          component="img"
          alt={title}
          height="500"
          image={img}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button color="secondary"  onClick={() => dispatch(increment({id: id, title: title, price: price}))}>
          в Корзину
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        </div>
    );
}

export default ProductCard;