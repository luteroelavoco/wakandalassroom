import React, { useState } from 'react';
import clsx from 'clsx';
import {  useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/database';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {}
}));

const CompanyInfo = ({ className, ...rest }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: '',
    name: ''
  });
  async function onSubmit(){
    if(values.name.length < 4) {
      window.alert("Nome  muito curto");
      return;
    }
    if(values.email.length < 4) {
      window.alert("Email muito curto");
      return;
    }
    await firebase.database().ref("name").set(values.name);
    await firebase.database().ref("email").set(values.email);
    navigate('/app/alunos', { replace: true });
  }
  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form
      autoComplete="off"
      noValidate
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Card>
        <CardHeader subheader="Informações para contacto" title="Definições" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Nome"
                name="name"
                onChange={handleChange}
                type="text"
                value={values.name}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="E-mail"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box display="flex" justifyContent="flex-end" p={2}>
          <Button onClick={onSubmit} style={{ color: '#000' }} variant="contained">
            Salvar mudanças
          </Button>
        </Box>
      </Card>
    </form>
  );
};

CompanyInfo.propTypes = {
  className: PropTypes.string
};

export default CompanyInfo;
