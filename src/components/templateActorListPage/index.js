import React, { useState } from "react";
import Header from "../headerList";
import FilterActorsCard from "../filterActorsCard";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import ActorList from "../actorList";

const useStyles = makeStyles((theme) =>  ({
  root: {
    backgroundColor: "#bfbfbf",
    paddingTop: theme.spacing(7),
  },
  fab: {
    marginTop: theme.spacing(8),
    position: "fixed",
    top: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function ActorListPageTemplate ( { actors, title } ) {
  const classes = useStyles();
  const [nameFilter, setNameFilter] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);


  let displayedActors = actors
    .filter((a) => {
      return a.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })

  const handleChange = (type, value) => {
    setNameFilter(value);
  };

  return <>
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <ActorList actors={displayedActors} />
      </Grid>
    </Grid>
    <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        className={classes.fab}
      >
        Filter
      </Fab>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <FilterActorsCard
          onUserInput={handleChange}
          nameFilter={nameFilter}
        />
      </Drawer>
    </>    

}

export default ActorListPageTemplate;