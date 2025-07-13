import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

function BookingTable() {
  const host = import.meta.env.VITE_BACKEND_HOST;
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${host}/api/session/all`);
        setSessions(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [host]);

  // if (!sessions) {
  //   <Spinner />;
  // }
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="container grid grid-cols-5 justify-center mt-6 gap-3">
          {sessions.map((session, key) => (
            <div className="px-4 py-2 border rounded" key={key}>
              <Link to={`/booking/${session._id}`}>
                <div className="w-50">
                  <p className="font-bold text-xl">{session.movieId.title}</p>
                  <p className="font-bold">{session.cinemaHall}</p>
                  <p>{session.city}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default BookingTable;
