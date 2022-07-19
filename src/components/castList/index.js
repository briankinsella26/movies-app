import React from "react";
import Actor from "../actorCard";
import Grid from "@material-ui/core/Grid";

const CastList = ( { cast }) => {
  let castCards = cast.cast.map((a) => (
    <Grid key={a.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Actor key={a.id} actor={a}/>
    </Grid>
  ));
  return castCards;
};

export default CastList;