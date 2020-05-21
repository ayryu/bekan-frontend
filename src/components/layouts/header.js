import React from 'react';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      background: 'linear-gradient(45deg, #20B2AA 30%, #00FA9A 90%)',
      color: 'white',
    },
    menuButton: {
        marginRight: theme.spacing(2),
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
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
                </IconButton>

                <Link to="/">
                    <IconButton size="medium" edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <HomeIcon />
                        <Typography variant="h6">
                        Resolver
                        </Typography>
                    </IconButton>
                </Link>
                
                <Link to="/createNewPost">
                    <Button
                        variant="contained"
                        color="primary"
                        // className={classes.button}
                        startIcon={<CreateIcon />} 
                    >
                        Create Post
                    </Button>
                </Link>
            </Toolbar>
        </AppBar>
    </>

    )
}

export default Header;