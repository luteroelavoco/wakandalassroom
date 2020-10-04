import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import CardVideo from './cardVideo';

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
  const [videos, setVideos] = useState([
    {
      src: "/static/videos/1.mp4",
    },
    {
      src: "/static/videos/2.mp4",
    },
    {
      src: "/static/videos/3.mp4",
    },
    {
      src: "/static/videos/4.mp4",
    },
    {
      src: "/static/videos/5.mp4",
    },
    {
      src: "/static/videos/6.mp4",
    },
    {
      src: "/static/videos/7.mp4",
    }
  ]);

  return (
    <Page
      className={classes.root}
    >
      <Container maxWidth={false}>
        <Box mt={3}>
          <Grid
            container
            spacing={3}
          >
            {videos.map((video) => (
              <Grid
                item
                key={video.id}
                lg={4}
                md={6}
                xs={12}
              >
                <CardVideo
                  className={classes.productCard}
                  video={video}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      
      </Container>
    </Page>
  );
};

export default ProductList;
