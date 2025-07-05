import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import { useParams } from "react-router-dom";

function Ticket() {
  const host = import.meta.env.VITE_BACKEND_HOST;
  const { ticketId } = useParams();
  const [ticket, setTicket] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${host}/api/ticket/${ticketId}`);
        setTicket(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [host, ticketId]);
  console.log(ticket);
  return <Layout></Layout>;
}

export default Ticket;
