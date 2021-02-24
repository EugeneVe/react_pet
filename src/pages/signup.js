import React from "react";
import { Avatar, CssBaseline, Grid, Box, Container, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useStyles } from "../components/usesstyles";
import PermIdentitySharpIcon from "@material-ui/icons/PermIdentitySharp";
import SignUpForm from "../components/sginupForm";

const SignUp = () => {
  const classes = useStyles();

  return (
    <div className="signUp">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <PermIdentitySharpIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <div className={classes.form}>
            <SignUpForm />
            <Grid container justify="flex-end">
              <Grid item>
                <Link to="/login" className="linkAlterColor" variant="body2">
                  Already have an account?
                </Link>
              </Grid>
            </Grid>
          </div>
        </div>
        <Box mt={5}></Box>
      </Container>
    </div>
  );
};

export default SignUp;
