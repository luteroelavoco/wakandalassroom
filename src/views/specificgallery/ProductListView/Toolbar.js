import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ImageIcon from '@material-ui/icons/Image';

const useStyles = makeStyles(theme => ({
  root: {},
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  }
}));

const Div = styled.div`
  display: grid;
`;
const Button = styled.button`
  padding: 6px 16px;
  font-size: 0.875rem;
  background: #B8B8B8;
  min-width: 64px;
  max-width: 200px;
  justify-self: right;
  border: none;
  cursor: pointer;
  box-sizing: border-box;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 500;
  line-height: 1.75;
  border-radius: 4px;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  margin-bottom: 10px;
  outline: none;
  &:hover{
    background-color: rgba(100, 100, 100,0.8);
  }
`;

export default function IconTabs({ className,setSeletedAba ,...rest }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setSeletedAba(newValue);
  };

  return (
    <Div>
      <Button> Adicionar nova mídia</Button>
      <Paper square className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
          aria-label="icon tabs gallery"
        >
          <Tab icon={<ImageIcon />} aria-label="image" />
          <Tab icon={<VideoLibraryIcon />} aria-label="video" />
        </Tabs>
      </Paper>
    </Div>
  );
}
