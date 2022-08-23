import React, { useState } from "react";
import { TextField, Container, Button, Box } from "@material-ui/core/";

const FantasyMoviePage = () => {
  
  const [title, setTitle] = useState();
  const [synopsis, setSynopsis] = useState();

  return (
    <>
      <br/>
      <br/>
      <br/>
      <form>
        <Container maxWidth="xs">
          <h1>My Fantasy Movie</h1>
          <Box mb={1}>
              <TextField variant="outlined" label="Title" fullWidth autoComplete="`Title" onChange={e => setTitle(e.target.value)}/>
          </Box>
          <Box mb={2}>
              <TextField variant="outlined" label="Synopsis" fullWidth autoComplete="Synopsis" onChange={e => setSynopsis(e.target.value)}/>
          </Box>
          <Box mb={2}>
              <TextField variant="outlined" label="Actors" fullWidth select onChange={e => setSynopsis(e.target.value)}/>
          </Box>
          <Button variant="contained" color="primary" fullWidth type="submit">Submit Movie</Button>
        </Container>
      </form>
    </>
    )
};

export default FantasyMoviePage;
