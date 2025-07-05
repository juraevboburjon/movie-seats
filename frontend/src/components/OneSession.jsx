import { Link } from "react-router-dom";
import { FaClock, FaCalendarAlt, FaHourglassStart } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { MdEventSeat } from "react-icons/md";

function OneSession({ session, role, handleDelete }) {
  if (!session || !session.movieId) {
    return <div>Загрузка...</div>;
  }
  const formatDate = (isoString) => {
    const date = new Date(isoString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${day}.${month}.${year}, ${hours}:${minutes}`;
  };

  return (
    <div className="container grid grid-cols-2 px-35">
      <div className="h-[450px] w-[320px]">
        <img
          src={session.movieId.posterUrl}
          className="h-full w-full rounded"
          alt="Movie Image"
        />
      </div>
      <div className="text-lg">
        <h1 className="text-4xl font-black mb-6">{session.movieId.title}</h1>
        <div className="flex items-center gap-3 mb-4">
          <FaCalendarAlt className="flex" />
          <p className="flex">{session.movieId.releaseDate}</p>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <FaHourglassStart className="flex" />
          <p className="flex">
            <span className="font-bold">{session.movieId.duration}</span> 분
          </p>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <FaClock className="flex" />
          <p className="font-bold">{formatDate(session.startTime)}</p>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <MdEventSeat className="flex" />
          <p className="font-bold">{session.seatLength}</p>
        </div>
        <div className="flex items-center gap-3">
          <IoLocation className="flex" />
          <p className="font-bold">
            {session.city}, {session.cinemaHall}
          </p>
        </div>
        <Link to={`/booking/${session._id}/seats`}>
          <button className="mt-6 bg-red-800 px-6 py-2 rounded-3xl cursor-pointer text-2xl text-white">
            select seat
          </button>
        </Link>
        {role === "admin" && (
          <button onClick={() => handleDelete(session._id)}>delete</button>
        )}
      </div>
    </div>
  );
}

export default OneSession;
