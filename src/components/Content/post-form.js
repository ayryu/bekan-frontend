import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import PostService from '../services/postService';

const useStyles = makeStyles(theme => ({
    form: {
      width: '100%',
    },
    paper: {
      marginTop: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    postButton: {
      margin: theme.spacing(1, 0, 6),
    }
  }));

const PostForm = () => {
    const classes = useStyles();
    const [ newPost, setNewPost ] = useState({
        title: '',
        content: '',
        id: ''
    })

    const fillNewPostInfo = param => {      //To render the updated values
        return (event) => {
          setNewPost({...newPost, [param]: event.target.value})
          console.log(event.target.value)
        }
      }
    
      const createNewPost = (e) => {
        e.preventDefault();
        const createdPost = {
          title: newPost.title,
          content: newPost.content
        }

        PostService.create(createdPost)
        console.log("A post has been created!");
      }

    return (
          <div>
              <Container maxWidth="sm">
              <CssBaseline />
                <div className={classes.paper}>
                  <form action="/"
                    className={classes.form}
                    onSubmit={createNewPost}>
                    <TextField
                      
                      required
                      fullWidth
                      label="Title"
                      variant="filled"
                      value={newPost.title} 
                      onChange={fillNewPostInfo('title')}
                    />
                    <>
                    <TextField
                      required
                      fullWidth
                      label="Post"
                      multiline
                      rows={10}
                      placeholder="What topic would you like to explore?"
                      variant="filled"
                      value={newPost.content} 
                      onChange={fillNewPostInfo('content')}/>

                      <div>
                      <Button className={classes.postButton} type="submit" variant="contained" color="secondary">
                        Submit Post
                      </Button>
                      </div>

                    </>
                  </form>
                </div>
              </Container>
            
          </div>
            
    )
}

export default PostForm;