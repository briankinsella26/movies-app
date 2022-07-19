import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import MovieList from "../movieList"

const useStyles = makeStyles((theme) => ({
  heading: {
    color: "#3f51b5",
    fontWeight: "bold",
    paddingTop: "30px"
  }
}));

const ActorDetails = ({ actor, credits }) => {
  const classes = useStyles();

  return (
    <>
     <Grid container spacing={5} style={{ padding: "15px" }}>
        <Grid item xs={11}>
          <Typography variant="h5" component="h3" className={classes.heading}>
            Bio
          </Typography> 
          <Typography variant="h6" component="p">
            {actor.biography}
          </Typography>
          <Typography variant="h5" component="h3" className={classes.heading}>
            Place of Birth
          </Typography>
          <Typography variant="h6" component="p">
            {actor.place_of_birth}
          </Typography>
          <Typography variant="h5" component="h3" className={classes.heading}>
            Birthday
          </Typography>
          <Typography variant="h6" component="p">
            {actor.birthday}
          </Typography>
          <Typography variant="h5" component="h3" className={classes.heading}>
            Known For
          </Typography> 
          <Grid container>
            <Grid item container spacing={5} style={{ paddingTop: "30px" }}>
              <MovieList movies={credits.cast} action={() => null} style={{ width: "100%" }}/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default ActorDetails ;