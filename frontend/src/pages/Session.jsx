import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import OneSession from "../components/OneSession";

function Session() {
  const { id } = useParams();
  const host = import.meta.env.VITE_BACKEND_HOST;
  const [session, setSession] = useState(null);
  console.log(session);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${host}/api/session/${id}`);
        setSession(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [host, id]);
  return (
    <Layout>
      <div className="flex justify-center pt-9">
        <OneSession session={session} />
      </div>
    </Layout>
  );
}

export default Session;
