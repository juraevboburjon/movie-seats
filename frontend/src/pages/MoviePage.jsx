import { useParams } from "react-router-dom";

function MoviePage() {
  const { id } = useParams();
  return <div>{id} film id</div>;
}

export default MoviePage;
