import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AssistantIcon from '@material-ui/icons/Assistant';
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
      background: 'linear-gradient(45deg, #3CB371 20%, 	#20B2AA 90%)',
    // background: 'white',
      color: 'black',
    },
  }));


const Header = () => {
    const classes = useStyles();
    return (
    <>
        <AppBar className={classes.root} position="static">
            <Toolbar>
                <Grid justify="space-between" alignItems="center" container>
                    
                    <Grid>
                        {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                        </IconButton> */}
                    </Grid>

                    <Grid>
                        <Link to="/">
                            <IconButton size="medium" color="inherit" aria-label="home">
                                <AssistantIcon />
                                <Typography variant="h4">
                                    <Box fontWeight="fontWeightBold">
                                        Bekʌɳ
                                    </Box>
                                </Typography>
                            </IconButton>
                        </Link>
                    </Grid>
                    
                    <Grid 
                          p={1}>
                        <Link to="/createNewPost">
                            <Button
                                variant="contained"
                                color="primary"
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