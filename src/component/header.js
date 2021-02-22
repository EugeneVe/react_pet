import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  // btn: {
  //   border: "none",
  //   boxShadow: "none",
  // },
}));

const Header = () => {
  const classes = useStyles();
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

              <Button
                className="alterBtnStyle"
                component={NavLink}
                to="/login"
                activeClassName="active"
                activeStyle={{
                  background: "linear-gradient(45deg, #fd4970 30%, #f57631 90%)",
                  boxShadow: "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
                }}
              >
                Log in
              </Button>
              <Button
                className="alterBtnStyle"
                component={NavLink}
                to="/signup"
                activeClassName="active"
                activeStyle={{
                  background: "linear-gradient(45deg, #fd4970 30%, #f57631 90%)",
                  boxShadow: "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
                }}
              >
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
