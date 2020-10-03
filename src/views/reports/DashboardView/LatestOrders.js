import React, { useState } from 'react';
import clsx from 'clsx';
import moment from 'moment';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
  makeStyles
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const data = [
  {
    id: uuid(),
    ref: '/',
    status: '1131 vezes'
  },
  {
    id: uuid(),
    ref: '/serviços',
    status: '250 vezes'
  },
  {
    id: uuid(),
    ref: '/imagens',
    status: '100 vezes'
  },
  {
    id: uuid(),
    ref: '/videos',
    status: '1262 vezes'
  },
  {
    id: uuid(),
    ref: '/contacto',
    status: '4500 vezes'
  },
];

const useStyles = makeStyles(() => ({
  root: {},
  actions: {
    justifyContent: 'flex-end'
  }
}));

const LatestOrders = ({ className, ...rest }) => {
  const classes = useStyles();
  const [orders] = useState(data);

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader title="Páginas mais visitadas" />
      <Divider />
      <PerfectScrollbar>
        <Box minWidth={200}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Página
                </TableCell>
                <TableCell>
                  Visitas
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow
                  hover
                  key={order.id}
                >
                  <TableCell>
                    {order.ref}
                  </TableCell>
                  <TableCell>
                    {order.status}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <Box
        display="flex"
        justifyContent="flex-end"
        p={2}
      >
       
      </Box>
    </Card>
  );
};

LatestOrders.propTypes = {
  className: PropTypes.string
};

export default LatestOrders;
