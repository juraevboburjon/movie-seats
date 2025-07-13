import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import OneSession from "../components/OneSession";
import BookingTable from "../components/BookingTable";
import { useAuth } from "../service/AuthService";

function Session() {
  const { id } = useParams();
  const host = import.meta.env.VITE_BACKEND_HOST;
  const [session, setSession] = useState(null);
  const { role, token } = useAuth();
  const navigate = useNavigate();
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

  const handleDelete = async () => {
    try {
      axios.delete(`${host}/api/session/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate("/booking");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="flex justify-center pt-9">
        <OneSession session={session} role={role} handleDelete={handleDelete} />
      </div>
      <div className="flex justify-center pt-9">
        <BookingTable />
      </div>
    </Layout>
  );
}

export default Session;
