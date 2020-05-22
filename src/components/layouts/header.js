import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AssistantIcon from '@material-ui/icons/Assistant';
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
      background: 'linear-gradient(45deg, #3CB371 20%, 	#20B2AA 90%)',
    // background: '#20B2AA',
      color: 'white',
    },
    postButton: {
        marginTop: 9,
    },
    siteIcon: {
        marginLeft: 100,
    },
    title: {
        flexGrow: 1,
      },
  }));


const Header = () => {
    const classes = useStyles();
    return (
    <>
        <AppBar className={classes.root} position="static">
            <Toolbar>
                <Grid justify="space-between" container>
                    
                    <Grid>
                        {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                        </IconButton> */}
                    </Grid>

                    <Grid>
                        <Link to="/">
                            <IconButton className={classes.siteIcon} size="medium" edge="start" color="inherit" aria-label="menu">
                                <AssistantIcon />
                                <Typography variant="h6">
                                Resolver
                                </Typography>
                            </IconButton>
                        </Link>
                    </Grid>
                    
                    <Grid>
                        <Link to="/createNewPost">
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.postButton}
                                startIcon={<CreateIcon />} 
                            >
                                Create Post
                            </Button>
                        </Link>
                    </Grid>

                </Grid>
                
            </Toolbar>
        </AppBar>
    </>

    )
}

export default Header;