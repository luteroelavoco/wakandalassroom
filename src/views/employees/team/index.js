import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Results from './Results';
import Toolbar from './Toolbar';
import data from './data';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const CustomerListView = () => {
  const classes = useStyles();

  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    var db = firebase.firestore();
    db.collection("alunos").orderBy("firstName").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setCustomers( oldArray => [...oldArray, doc.data()]);
      });
  });
  },[])
  return (
    <Page
      className={classes.root}
      title="Alunos"
    >
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <Results customers={customers} />
        </Box>
      </Container>
    </Page>
  );
};

export default CustomerListView;
