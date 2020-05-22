import React, { useState, useEffect  } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import CondensedPost from './condensed-post';
import postService from '../services/postService';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  media: {
    position: "relative",
    height: 400,
    maxWidth: "auto",
    marginBottom: 30,
  },
  bannerText: {
    position: "absolute",
    top: 350,
    bottom: 0,
    right: 0,
    left: 330,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
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
        <div>
          <Card>
            <CardMedia
              className={classes.media}
              image={banner.image}
            />
            <Typography className={classes.bannerText} gutterBottom variant="h1" component="h1">
              <Box fontWeight="fontWeightMedium">
                {banner.category}
              </Box>
            </Typography>
          </Card>
          <Grid container className={classes.root} spacing={1}>
                  {posts.map(post =>
                    <Grid item xs={4}>
                      <CondensedPost key={post.id} content={post}/>
                    </Grid>
                  )}
          </Grid>

        </div>
    )
}

export default Content;