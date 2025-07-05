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
  //   console.log(userName);
  console.log(seatNumber);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      //   const seatStatus = await
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

      //   await axios.get(`${host}/api/session/${sessionId}`);
      navigate(`/ticket/${res.data._id}`);
      console.log("movie created succ", res);
    } catch (error) {
      console.log(error);
    }
    // setTimeout(() => {
    //   setLoading(false);
    //   alert("Оплата прошла успешно (фейк)!");
    //   if (onSuccess) onSuccess();
    // }, 1200);
  };

  return (
    <Layout>
      <PaymentForm handleSubmit={handleSubmit} loading={loading} />
    </Layout>
  );
}

export default Payment;
