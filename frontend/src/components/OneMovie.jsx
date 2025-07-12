import { FaClock, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function OneMovie({ movie, role, handleDelete }) {
  return (
    <div className="container flex justify-center px-35">
      <div className="flex ">
        <img
          className="flex h-[450px] w-[320px] rounded"
          src={movie.posterUrl}
          alt="Movie Image"
        />

        <div className="ml-15">
          <h1 className="text-4xl font-black mb-6">{movie.title}</h1>
          <div className="grid grid-cols-2 mb-6 text-xl">
            <div className="flex items-center gap-3">
              <FaCalendarAlt className="flex" />
              <p className="flex">{movie.releaseDate}</p>
            </div>
            <div className="flex items-center gap-3">
              <FaClock className="flex" />
              <p className="flex">
                <span className="font-bold">{movie.duration}</span> 분
              </p>
            </div>
          </div>
          <p className="mb-6">{movie.description}</p>
          <div className="flex">
            <p className="text-gray-400 mr-2">장르:</p>
            <p>
              {(() => {
                try {
                  const genres = JSON.parse(movie.genre);
                  if (Array.isArray(genres)) {
                    return genres.map((g) => g.label).join(", ");
                  }
                  return movie.genre;
                } catch {
                  return movie.genre;
                }
              })()}
            </p>
          </div>

          <div className="flex mt-8 gap-x-6">
            <Link to={"/booking"}>
              <p className="bg-red-800 text-white px-6 py-2 rounded-3xl text-2xl cursor-pointer">
                예매하기
              </p>
            </Link>
            {role === "admin" && (
              <p
                onClick={handleDelete}
                className="border-black border text-black px-6 py-2 rounded-3xl text-2xl cursor-pointer"
              >
                delete
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OneMovie;
