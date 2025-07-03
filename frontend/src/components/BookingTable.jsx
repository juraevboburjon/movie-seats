import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function BookingTable() {
  const host = import.meta.env.VITE_BACKEND_HOST;
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${host}/api/session/all`);
        setSessions(res.data);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [host]);
  return (
    <div>
      {sessions.map((session, key) => (
        <div className="grid" key={key}>
          <Link to={`${session._id}`}>
            <div className="w-50">
              <p>{session.cinemaHall}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BookingTable;
