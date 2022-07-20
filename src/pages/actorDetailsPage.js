
import { useParams } from "react-router-dom";
import ActorDetails from "../components/actorDetails";
import PageTemplate from "../components/templateActorPage";
import { getActor, getCredits } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const ActorDetailsPage = (props) => {
  const { id } = useParams();

  const { data: credits, error: errorCredits, isLoading: isLoadingCredits, isError: isErrorCredits } = useQuery(
    ["credits", { id: id }],
    getCredits
  );

  const { data: actor, error, isLoading, isError } = useQuery(
    ["actor", { id: id }],
    getActor
  );

  if (isLoading || isLoadingCredits) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  if (isErrorCredits) {
    return <h1>{errorCredits.message}</h1>;
  }

  credits.cast.sort((a, b) => {
    return b.popularity - a.popularity;
  });

  return (
    <>
      {actor ? (
        <>
          <PageTemplate actor={actor} title={"Actor Bio"}>
            <ActorDetails actor={actor} credits={credits} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for actor details</p>
      )}
    </>
  );
};

export default ActorDetailsPage;