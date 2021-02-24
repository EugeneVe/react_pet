import React from "react";
import { Avatar, CssBaseline, Grid, Box, Container, Typography } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Link } from "react-router-dom";
import { useStyles } from "../components/usesstyles";
import EmailAndPassword from "../components/emailPassForm";

const Login = () => {
  const classes = useStyles();

  return (
    <div className="login">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <div className={classes.form}>
            <EmailAndPassword />
            <Grid container>
              <Grid item xs>
                <Link to="/password-recovery" className="linkAlterColor" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/signup" className="linkAlterColor" variant="body2">
                  Don't have an account?
                </Link>
              </Grid>
            </Grid>
          </div>
        </div>
        <Box mt={8}></Box>
      </Container>
    </div>
  );
};

export default Login;
