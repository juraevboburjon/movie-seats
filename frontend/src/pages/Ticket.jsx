import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import { useParams } from "react-router-dom";
import TicketComponent from "../components/TicketComponent";

function Ticket() {
  const host = import.meta.env.VITE_BACKEND_HOST;
  const { ticketId } = useParams();
  const [ticket, setTicket] = useState(null);

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
  if (!ticket) {
    return <div>Загрузка...</div>;
  }
  console.log(ticket);
  return (
    <Layout>
      <div className="h-screen">
        <TicketComponent ticket={ticket} />
      </div>
    </Layout>
  );
}

export default Ticket;
