import axios from "axios";
import { useState } from "react";
import { useAuth } from "../service/AuthService";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import PaymentForm from "../components/PaymentForm";

function Payment() {
  const { sessionId, seatNumber } = useParams();
  const host = import.meta.env.VITE_BACKEND_HOST;
  const { userName, userId } = useAuth();

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(`${host}/api/ticket/buy`, {
        userId,
        userName,
        sessionId,
        seatNumber,
        status: "booked",
      });

      await axios.patch(`${host}/api/seats/${sessionId}/${seatNumber}`, {
        status: "booked",
      });
      navigate(`/ticket/${res.data._id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <PaymentForm
        handleSubmit={handleSubmit}
        loading={loading}
        userName={userName}
      />
    </Layout>
  );
}

export default Payment;
