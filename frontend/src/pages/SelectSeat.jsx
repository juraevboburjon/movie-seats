import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import SeatsTable from "../components/SeatsTable";
import SeatInfo from "../components/SeatInfo";

function SelectSeat() {
  const host = import.meta.env.VITE_BACKEND_HOST;
  const { sessionId } = useParams();
  const [seats, setSeats] = useState([]);
  const [selectedSeat, setSelectedSeat] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${host}/api/seats/${sessionId}/all`);
        setSeats(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [host, sessionId]);
  return (
    <Layout>
      <div className=" mt-30 px-30">
        <div className="container grid grid-cols-2">
          <SeatsTable seats={seats} setSelectedSeat={setSelectedSeat} />
          <SeatInfo
            seats={seats}
            selectedSeat={selectedSeat}
            sessionId={sessionId}
          />
        </div>
      </div>
    </Layout>
  );
}

export default SelectSeat;
