import { useAuth } from "../service/AuthService";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function CreateSessionForm() {
  const { token } = useAuth();
  const host = import.meta.env.VITE_BACKEND_HOST;
  const navigate = useNavigate();
  const cities = ["Seoul", "Busan", "Deagu", "Deajon", "Kwangju"];

  const sessions = {
    movieId: "",
    cinemaHall: "",
    seats: "",
    startTime: "",
    city: "",
  };

  const [session, setSession] = useState(sessions);
  const inputHandle = (e) => {
    const { name, value } = e.target;
    setSession({ ...session, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${host}/api/session/create`, session, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={onSubmit} className="w-full mt-6">
      <div className="px-20 w-full">
        <div className="grid w-full gap-y-6">
          <input
            type="text"
            id="movieId"
            name="movieId"
            onChange={inputHandle}
            placeholder="Movie title"
            className="border p-2 rounded w-full"
          />
          <select
            id="city"
            name="city"
            onChange={inputHandle}
            value={session.city}
            className="border p-2 rounded w-full"
          >
            <option value="">select city</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
          <input
            type="text"
            id="cinemaHall"
            name="cinemaHall"
            onChange={inputHandle}
            min="1"
            placeholder="Cinema Hall"
            className="border p-2 rounded w-full"
          />
          <input
            type="number"
            id="seats"
            name="seats"
            onChange={inputHandle}
            placeholder="Hall seats"
            className="border p-2 rounded w-full"
          />
          <input
            type="datetime-local"
            id="startTime"
            name="startTime"
            onChange={inputHandle}
            placeholder="Session Time"
            className="border p-2 rounded w-full"
          />
          <button
            type="submit"
            className="bg-red-800 text-white p-2 rounded cursor-pointer transition-all hover:bg-red-900 w-full"
          >
            Publish
          </button>
        </div>
      </div>
    </form>
  );
}

export default CreateSessionForm;
