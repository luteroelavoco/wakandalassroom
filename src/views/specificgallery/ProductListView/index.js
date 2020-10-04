import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import {useParams} from 'react-router-dom';
import Page from 'src/components/Page';
import Toolbar from './Toolbar';
import data from './data';
import Images from './Images';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  productCard: {
    height: '100%'
  }
}));

const ProductList = () => {
  const classes = useStyles();
  const [products] = useState(data);
  const { type } = useParams();
  return (
    <Page
      className={classes.root}
      title={`Galeria de ${type}`}
    >
      <Container maxWidth={false}>
        <Toolbar/>
        <Images />   
      
      </Container>
    </Page>
  );
};

export default ProductList;
