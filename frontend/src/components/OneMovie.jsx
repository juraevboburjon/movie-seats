function OneMovie({ movie, role, handleDelete }) {
  return (
    <div className="container flex justify-center">
      <div className="grid grid-cols-2 gap-5">
        <div className="flex h-[450px] ">
          <img className="rounded" src={movie.posterUrl} alt="Movie Image" />
        </div>

        <div className="">
          <h1>{movie.title}</h1>
          <p>{movie.releaseDate}</p>
          <p>{movie.duration}</p>
          <p>{movie.description}</p>
          <p>{movie.genre}</p>
          {role === "admin" && <p onClick={handleDelete}>delete</p>}
        </div>
      </div>
    </div>
  );
}

export default OneMovie;
