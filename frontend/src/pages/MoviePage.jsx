import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import OneMovie from "../components/OneMovie";
import { useAuth } from "../service/AuthService";
import MovieTable from "../components/MovieTable";
import Spinner from "../components/Spinner";

function MoviePage() {
  const host = import.meta.env.VITE_BACKEND_HOST;
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const { role, token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${host}/api/movie/${id}`);
        setMovie(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [host, id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`${host}/api/movie/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  if (!movie) {
    return <Spinner />;
  }
  return (
    <Layout>
      <div className="flex pt-9 justify-center">
        <OneMovie movie={movie} role={role} handleDelete={handleDelete} />
      </div>
      <div className="mt-20">
        <MovieTable />
      </div>
    </Layout>
  );
}

export default MoviePage;
