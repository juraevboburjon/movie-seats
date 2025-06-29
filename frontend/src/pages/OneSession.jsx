import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function OneSession() {
  const { id } = useParams();
  const host = import.meta.env.VITE_BACKEND_HOST;
  const [session, setSession] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${host}/api/session/${id}`);
        setSession(res.data);
        console.log(session);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [host, id]);
  return <div>OneSession</div>;
}

export default OneSession;
