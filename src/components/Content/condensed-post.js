import React from 'react'
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import LaunchIcon from '@material-ui/icons/Launch';
import { makeStyles } from '@material-ui/core/styles';
import PostService from '../services/postService';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: "auto",
    },
    media: {
      height: 250,
    },
    content: {
        padding: 20, 
        margin:20,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
  }));

const CondensedPost = ({ content }) => {
    const classes = useStyles();
    return (
        <>
            <Link to={`/${content.id}`}>

            <Paper className={classes.paper}>
                <Card className={classes.root}>

                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={content.image}
                                title={content.imagetitle}
                            />
                            
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {content.titleofpost}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {content.summary}
                                </Typography>
                            </CardContent>
                        </CardActionArea>

                        <CardActions>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                            <IconButton aria-label="open to new tab">
                                <LaunchIcon />
                            </IconButton>
                        </CardActions>

                    </Card>
            </Paper>
            </Link>
        </>
    )
}

export default CondensedPost;