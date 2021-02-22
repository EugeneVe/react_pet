import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className="App">
      <div className="header">
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Link to="/" className="navList">
                <HomeRoundedIcon />
              </Link>
              <Typography variant="h6" className={classes.title}>
                New App
              </Typography>
              <Link to="/login" className="navList">
                <Button>Log in</Button>
              </Link>
              <Link to="/signup" className="navList">
                <Button variant="contained" color="primary">
                  Sign Up
                </Button>
              </Link>
            </Toolbar>
          </AppBar>
        </div>
      </div>
    </div>
  );
};

export default Header;
