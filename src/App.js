import 'react-perfect-scrollbar/dist/css/styles.css';
import React, {useEffect} from 'react';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from 'src/components/GlobalStyles';
import 'src/mixins/chartjs';
import theme from 'src/theme';
import routes from 'src/routes';
import firebase from "firebase/app";

import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDdc-aY26wcvf9HaquMbLd99ttAQR8LbMU",
  authDomain: "wakanda-classroom.firebaseapp.com",
  projectId: "wakanda-classroom",
  storageBucket: "wakanda-classroom.appspot.com",
  messagingSenderId: "543167916239",
  appId: "1:543167916239:web:7795c4d437d7aadd142fba",
  measurementId: "G-ZYRQRJQG50"

};

firebase.initializeApp(firebaseConfig);

const App = () => {

  const routing = useRoutes(routes);
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {routing}
    </ThemeProvider>
  );
};

export default App;
