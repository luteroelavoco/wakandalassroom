import React, { useState } from 'react';
import {
  Container,
  makeStyles
} from '@material-ui/core';
import {useParams} from 'react-router-dom';
import Page from 'src/components/Page';
import Toolbar from './Toolbar';
import Images from './Images';
import Videos from './Videos';


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
  const [selectedAba , setSeletedAba] = useState(0);
  const { type } = useParams();
  return (
    <Page
      className={classes.root}
      title={`Galeria de ${type}`}
    >
      <Container maxWidth={false}>
        <Toolbar setSeletedAba={setSeletedAba} /> 
        { selectedAba ?  <Videos /> : <Images /> }
      </Container>
    </Page>
  );
};

export default ProductList;
