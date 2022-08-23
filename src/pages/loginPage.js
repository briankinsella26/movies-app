import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/authContext";
import { TextField, Container, Button, Box } from "@material-ui/core/";

const LoginPage = () => {
  const { authenticate } = useContext(AuthContext);

  const login = (event) => {
    event.preventDefault();
    authenticate(username, password);
  };

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  return (
    <>
      <br/>
      <br/>
      <br/>
      <form onSubmit={login}>
        <Container maxWidth="xs">
          <h1>Login</h1>
          <Box mb={1}>
              <TextField variant="outlined" label="email" fullWidth autoComplete="email" onChange={e => setUserName(e.target.value)}/>
          </Box>
          <Box mb={2}>
              <TextField variant="outlined" label="password" fullWidth autoComplete="password" onChange={e => setPassword(e.target.value)}/>
          </Box>
          <Button variant="contained" color="primary" fullWidth type="submit">Log in</Button>
        </Container>
      </form>
    </>
    )
};

export default LoginPage;
