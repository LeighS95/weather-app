import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


/**Material-ui styles */
const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
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
        <div style={{minHeight: '70px', width: "100vw"}}>
            <AppBar>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Simple Weather App
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;