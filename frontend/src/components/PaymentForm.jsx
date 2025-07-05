import { useState } from "react";

function PaymentForm({ handleSubmit, loading }) {
  const [cardNumber, setCardNumber] = useState("");
  const [name, setName] = useState("");
  const [exp, setExp] = useState("");
  const [cvc, setCvc] = useState("");
  return (
    <>
      <div className="max-w-sm mx-auto mt-8 border rounded p-6 shadow">
        <h2 className="text-xl font-bold mb-4">Payment</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <label>
            card number
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
            Name
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
              date
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
            className="bg-red-800 text-white rounded p-2 mt-3 hover:bg-blue-600"
            disabled={loading}
          >
            {loading ? "Loading..." : "Payyed"}
          </button>
        </form>
      </div>
    </>
  );
}

export default PaymentForm;
