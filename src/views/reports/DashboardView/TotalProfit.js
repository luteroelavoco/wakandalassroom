import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography,
  makeStyles,
  colors
} from '@material-ui/core';
import {primary as colorprimary} from "../../../theme/index";
import TimerIcon from '@material-ui/icons/Timer';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  },
  avatar: {
    backgroundColor: colorprimary,
    height: 56,
    width: 56
  }
}));

const TotalProfit = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
          spacing={3}
        >
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
              DURAÇÃO DE SESSÃO
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
            >
              3 min ,43 s 
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <TimerIcon />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

TotalProfit.propTypes = {
  className: PropTypes.string
};

export default TotalProfit;
