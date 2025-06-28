import { useAuth } from "../service/AuthService";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function CreateSessionForm() {
  const { token } = useAuth();
  const host = import.meta.env.VITE_BACKEND_HOST;
  const navigate = useNavigate();

  const sessions = {
    movieId: "",
    cinemaHall: "",
    seats: "",
    startTime: "",
  };

  const [session, setSession] = useState(sessions);
  const inputHandle = (e) => {
    const { name, value } = e.target;
    setSession({ ...session, [name]: value });
    // console.log(user);
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

      console.log("movie created succ", res);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <div className="grid-rows-1 px-20 gap-5 md:grid grid-cols-2 w-full">
        <div className="grid grid-rows-1 gap-4">
          <input
            type="text"
            id="movieId"
            name="movieId"
            onChange={inputHandle}
            placeholder="Movie title"
            className="border p-2 rounded"
          />
          <input
            type="text"
            id="cinemaHall"
            name="cinemaHall"
            onChange={inputHandle}
            min="1"
            placeholder="Cinema Hall"
            className="border p-2 rounded"
          />

          <input
            type="number"
            id="seats"
            name="seats"
            onChange={inputHandle}
            placeholder="Hall seats"
            className="border p-2 rounded"
          />
          <input
            type="datetime-local"
            id="startTime"
            name="startTime"
            onChange={inputHandle}
            placeholder="Session Time"
            className="border p-2 rounded"
          />

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
          >
            Publish
          </button>
        </div>
      </div>
    </form>
  );
}

export default CreateSessionForm;
