import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";


const useStyles = makeStyles({
  card: { maxWidth: 345 },
  media: { height: 400 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
});

export default function ActorCard({ actor }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        className={classes.header}
        title={
          <Typography variant="h6" component="p">
            {actor.name}{" "}
          </Typography>
        }
      />
      <CardMedia
        className={classes.media}
        image={
          actor.profile_path
            ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
            : `${process.env.PUBLIC_URL}/assets/film-poster-placeholder.png`
        }
      />
      <CardActions disableSpacing>
        <Link to={`/actors/${actor.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}