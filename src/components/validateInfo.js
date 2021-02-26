// SIGN UP VALIDATION
export function validateSignUp(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = "Username required";
  }
  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password needs to be 6 characters or more";
  }
  // if (!values.password2) {
  //   errors.password2 = "Password is required";
  // } else if (values.password2 !== values.password) {
  //   errors.password2 = "Passwords do not match";
  // }
  return errors;
}

// SIGN IN VALIDATION
export function validateLogin(values) {
  let errors = {};

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password needs to be 6 characters or more";
  }

  return errors;
}

// PASSWORD RESET VALIDATION
export function validatePassReset(values) {
  let errors = {};

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  return errors;
}
