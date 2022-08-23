import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../header";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(7),
  },
  imageContainer: { maxWidth: 345 },
  media: { height: 400 },
}));

const TemplateActorPage = ({ actor, children, title }) => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid container spacing={5} style={{ padding: "15px" } }>
        <Grid item xs={3}>
          <div className={classes.imageContainer}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                  : `${process.env.PUBLIC_URL}/assets/film-poster-placeholder.png`
              }
              alt={actor.name} className={classes.imageContainer}
              />
            </div>
        </Grid>
        <Grid item>
          {children}
        </Grid>
      </Grid>
  </div>
  )
}

export default TemplateActorPage