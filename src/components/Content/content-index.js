import React, { useState, useEffect  } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import CondensedPost from './condensed-post';
import postService from '../services/postService';

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: 40,
  },
  media: {
    height: "84vh",
    position: 'relative',
    // paddingTop: '56.25%',
  },
  bannerText: {
    position: 'absolute',
    textAlign: 'center',
    bottom: "0vh", 
  },
}));

//Holds all the posts
const Content = () => {
    const classes = useStyles();
    const [ posts, setPosts ] = useState([]);
    const [ banner, setBanner ] = useState('');

    //useEffect is here to receive post data and pass to the CondensedPost element
    const hook = () => {
        postService
          .getAll()
          .then(entirePage => {
            setPosts(entirePage.posts)
            setBanner(entirePage.banner)
            console.log(entirePage);
          })
      }
      useEffect(hook, [])
      console.log('Posts are: ', posts)

    return (
      <>
          <Card className={classes.card}>
                <div style={ {position: 'relative'}}>
                <CardMedia
                  className={classes.media}
                  image={banner.image}
                />
                  <div className={classes.bannerText}>
                  <Typography variant="h1">
                    <Box fontWeight="fontWeightMedium">
                      {banner.category}
                    </Box>
                  </Typography>
                  </div>
                </div>
          </Card>
          <Grid container className={classes.grid} spacing={1}>
                  {posts.map(post =>
                    <Grid item sm={4} xs={12}>
                      <CondensedPost key={post.id} content={post}/>
                    </Grid>
                  )}
          </Grid>
      </>
    )
}

export default Content;