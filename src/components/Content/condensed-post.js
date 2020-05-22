import React, { useState } from 'react';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
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
    favoriteClicked: {
        color: 'red',
    },
    favoriteUnclicked: {
        color: 'white',
    },
    shareIcon: {
        marginRight: 140,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
  }));

const CondensedPost = ({ content }) => {
    const classes = useStyles();
    const [ iconClicked, setIconClicked ] = useState(false)
    return (
        <>


            {/* <Paper className={classes.paper}> */}
                <Card className={classes.root}>
            
            <Link to={`/${content.id}`}>

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
                                    {content.summary.substring(0, 35) + "..."}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
            </Link>
                        <CardActions>
                            <Grid justify="space-between" container>
                                <Grid>
                                    <IconButton className={clsx(classes.favoriteClicked, !iconClicked && classes.favoriteUnclicked)}
                                    onClick={() => {setIconClicked(!iconClicked)}} aria-label="add to favorites">
                                        <FavoriteIcon />
                                    </IconButton>
                                </Grid>
                                
                                <Grid>
                                    <IconButton className={classes.shareIcon} aria-label="share">
                                        <ShareIcon />
                                    </IconButton>
                                </Grid>

                                <Grid>
                                    <IconButton aria-label="open to new tab">
                                        <LaunchIcon />
                                    </IconButton>
                                </Grid>

                            </Grid>
                        </CardActions>

                    </Card>
            {/* </Paper> */}

        </>
    )
}

export default CondensedPost;