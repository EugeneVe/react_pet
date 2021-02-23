import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import { NavLink } from "react-router-dom";
import { useStylestitle } from "../components/usesstyles";

const Header = () => {
  const classes = useStylestitle();
  return (
    <div className="App">
      <div className="header">
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <NavLink to="/" className="navList">
                <HomeRoundedIcon />
              </NavLink>
              <Typography variant="h6" className={classes.title}>
                New App
              </Typography>
              <Button className="alterBtnStyle" component={NavLink} to="/login" activeClassName="loginSignUpActive">
                Log in
              </Button>
              <Button className="alterBtnStyle" component={NavLink} to="/signup" activeClassName="loginSignUpActive">
                Sign Up
              </Button>
            </Toolbar>
          </AppBar>
        </div>
      </div>
    </div>
  );
};

export default Header;
