import React, { useState, useEffect } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/core/styles';
import PostService from '../services/postService';


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: "auto",
      textAlign: "center",
      height: "100%",
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

const FullPost = (props) => {
    const [ individualPost, setPost ] = useState('')
    const classes = useStyles();

    console.log(props)
    const hook = () => {
        PostService
            .getPostByID(props.match.params.id)
            .then(retrievedPost => {
            setPost(retrievedPost)
          })
      }
    useEffect(hook, [])

    return(
        <>
            <CssBaseline />
                    {/* <Paper className={classes.paper}> */}
                        <Card className={classes.root}>

                            {/* <CardActionArea> */}
                                {individualPost.image && <CardMedia 
                                    className={classes.media}
                                    image={individualPost.image}
                                    title={individualPost.imagetitle}
                                />}

                                
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {individualPost.titleofpost}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {individualPost.summary}
                                    </Typography>
                                </CardContent>
                            {/* </CardActionArea> */}

                        </Card>
                    {/* </Paper> */}
        </>

    )
}

export default FullPost;