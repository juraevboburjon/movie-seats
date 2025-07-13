import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

const MovieTable = () => {
  const host = import.meta.env.VITE_BACKEND_HOST;
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${host}/api/movie/allMovies`);
        setMovies(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [host]);
  return loading ? (
    <Spinner />
  ) : (
    <div className="flex justify-center pt-5">
      <div className="container">
        <div className="grid grid-cols-5 w-[1280px] gap-x-17 gap-y-5">
          {movies.map((movie) => (
            <Link to={`/movie/${movie._id}`} key={movie._id}>
              <div className="w-50 h-80">
                <img
                  className="w-full h-70 rounded"
                  src={movie.posterUrl}
                  alt={movie.title}
                />
                <p className="text-center mt-2">{movie.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieTable;
