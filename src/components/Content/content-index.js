import React, { useState, useEffect  } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import CondensedPost from './condensed-post';
import postService from '../services/postService';
// import {
//   Route,
//   Switch
// } from "react-router-dom";
// import PostForm from './post-form';
// import FullPost from './full-post';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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

    //useEffect is here to receive post data and pass to the CondensedPost element
    const hook = () => {
        postService
          .getAll()
          .then(storedPosts => {
            setPosts(storedPosts)
          })
      }
      useEffect(hook, [])
      console.log('Posts are: ', posts)

    return (
        <div>
          <Grid container className={classes.root} spacing={1}>
                  {posts.map(post =>
                    <Grid item xs={4}>
                      <CondensedPost key={post.id} content={post}/>
                    </Grid>
                  )}
          </Grid>

          {/* <Switch>
            <Route exact path="/createNewPost"> <PostForm/> </Route>
            <Route component={FullPost} exact path="/:id"/>
          </Switch> */}
        </div>
    )
}

export default Content;