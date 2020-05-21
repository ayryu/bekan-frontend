import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import PostService from '../services/postService';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    media: {
      height: 250,
    },
    content: {
        padding: 20, 
        margin:20,
        height: "100%",
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
  }));

const PostForm = () => {
    const classes = useStyles();
    const [ newPost, setNewPost ] = useState({
        title: '',
        content: '',
        id: ''
    })
    const [ buttonStatus, setButtonStatus ] = useState(false)

    const fillNewPostInfo = param => {      //To render the updated values
        return (event) => {
          setNewPost({...newPost, [param]: event.target.value})
          console.log(event.target.value)
        }
      }
    
      const createNewPost = (event) => {
        if(newPost.title.length === 0 || newPost.content.length === 0) {
          event.preventDefault();
          alert('Oh no why is you doing that, there needs to be something :(');
        } 

        const createdPost = {
          title: newPost.title,
          content: newPost.content,
          id: "500"
        }

        PostService.create(createdPost)
        console.log("A post has been created!");
      }



    return (
            <form action="/"
            onSubmit={createNewPost}>
                <div>
                    <input className={classes.root}
                    value={newPost.title} 
                    onChange={fillNewPostInfo('title')}
                    placeholder="Title"/>
                    <textarea className={classes.root}
                    rows="20"
                    cols="40"
                    value={newPost.content} 
                    onChange={fillNewPostInfo('content')}
                    placeholder="What topic would you like to explore?"></textarea>
                    </div>
                    <div>
                        <button id="submit" type="submit">Submit Post</button>
                </div>
            </form>
    )
}

export default PostForm;