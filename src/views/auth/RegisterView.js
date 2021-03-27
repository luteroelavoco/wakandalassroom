import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
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

const RegisterView = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  function onSubmit(values, { setFieldError, setSubmitting }) {
    var db = firebase.firestore();
    db.collection('alunos')
      .add({
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        presenca: 0
      })
      .then(docRef => {
        navigate('/app/alunos', { replace: true });
      })
      .catch(error => {
        window.alert("Infelizmente ocorreu um erro não foi possicvel salvar esse aluno")
        setSubmitting(false)
      });
  }
  return (
    <Page className={classes.root} title="Registar aluno">
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        style={{ marginTop: '10px' }}
        justifyContent="center"
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              email: '',
              firstName: '',
              lastName: '',
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email('O Email deve ser válido')
                .max(255)
                .required('Email é necessário'),
              firstName: Yup.string()
                .max(255)
                .required('Primeiro nome é obrigatório'),
              lastName: Yup.string()
                .max(255)
                .required('Último nome é obrigatório')
            })}
            onSubmit={onSubmit}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values
            }) => (
              <form onSubmit={handleSubmit}>
                <Box mb={3}>
                  <Typography color="textPrimary" variant="h2">
                    Adicionar novo aluno
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.firstName && errors.firstName)}
                  fullWidth
                  helperText={touched.firstName && errors.firstName}
                  label="Primeiro nome"
                  margin="normal"
                  name="firstName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstName}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.lastName && errors.lastName)}
                  fullWidth
                  helperText={touched.lastName && errors.lastName}
                  label="Último nome"
                  margin="normal"
                  name="lastName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
                  variant="outlined"
                />
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
                <Box alignItems="center" display="flex" ml={-1}></Box>
                {Boolean(touched.policy && errors.policy) && (
                  <FormHelperText error>{errors.policy}</FormHelperText>
                )}
                <Box my={2}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Salvar
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

export default RegisterView;
