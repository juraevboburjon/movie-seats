import axios from "axios";
import { useState } from "react";
import { useAuth } from "../service/AuthService";
import { useNavigate, useParams } from "react-router-dom";

function Payment() {
  const { sessionId, seatNumber } = useParams();
  const host = import.meta.env.VITE_BACKEND_HOST;
  const { userName, userId } = useAuth();
  const [cardNumber, setCardNumber] = useState("");
  const [name, setName] = useState("");
  const [exp, setExp] = useState("");
  const [cvc, setCvc] = useState("");
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
      navigate(`/booking/${sessionId}/seats`);
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
    <div className="max-w-sm mx-auto mt-8 border rounded p-6 shadow">
      <h2 className="text-xl font-bold mb-4">Оплата картой</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <label>
          Номер карты
          <input
            type="text"
            maxLength={16}
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
            className="border p-2 rounded w-full"
            placeholder="1234 5678 9012 3456"
          />
        </label>
        <label>
          Имя держателя
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border p-2 rounded w-full"
            placeholder="IVAN IVANOV"
          />
        </label>
        <div className="flex gap-2">
          <label className="flex-1">
            Срок действия
            <input
              type="text"
              maxLength={5}
              value={exp}
              onChange={(e) => setExp(e.target.value)}
              required
              className="border p-2 rounded w-full"
              placeholder="MM/YY"
            />
          </label>
          <label className="flex-1">
            CVC
            <input
              type="text"
              maxLength={3}
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
              required
              className="border p-2 rounded w-full"
              placeholder="123"
            />
          </label>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded p-2 mt-3 hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? "Обработка..." : "Оплатить"}
        </button>
      </form>
    </div>
  );
}

export default Payment;
