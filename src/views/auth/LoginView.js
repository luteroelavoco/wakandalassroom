import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import firebase from 'firebase/app';
import 'firebase/database';

import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const LoginView = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [values, setValues] = useState({});
  
  const handleChange = event => {
    setValues(({
      [event.target.name]: event.target.value
    }));
  };

  function onSubmit(values, { setFieldError, setSubmitting }) {
    var email = firebase.database().ref("email");
    email.on('value', (snapshot) => {
      const data = snapshot.val();
      if(data == values.email){
        var senha = firebase.database().ref("senha");
        senha.on('value', (snapshot) => {
          const dataSenha = snapshot.val();
          if(dataSenha == values.password){
            navigate('/app/alunos', { replace: true });
          }
          else{
            setFieldError('password', 'senha digitada está errada');
            setSubmitting(false);
          }
        });
      }
      else{
        setFieldError('email', 'este não é o email do admnistrador');
        setSubmitting(false);
      }
    });
  }

  return (
    <Page className={classes.root} title="Iniciar Sessão">
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              email: '',
              password: ''
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email('O emaail precisa ser válido')
                .max(255)
                .required('Email é obrigatorio'),
              password: Yup.string()
                .max(255)
                .required('Insira uma password válida')
            })}
            onSubmit={onSubmit}
          >
            {({ errors, handleBlur, handleSubmit, isSubmitting, touched, handleChange: handleChange , values:values }) => (
              <form onSubmit={handleSubmit}>
                <Box mb={3}>
                  <Typography color="textPrimary" variant="h2">
                    Iniciar sessão
                  </Typography>
                </Box>

                <Box mt={3} mb={1}></Box>
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="E-mail"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  value={values.email}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Senha"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.password}
                  ccc
                  variant="outlined"
                />
                <Box my={2}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Entrar
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </Page>
  );
};

export default LoginView;
