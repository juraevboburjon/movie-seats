import React from "react";

const MovieTable = () => {
  const movies = [
    {
      id: 1,
      title: "interstellar",
      img: "https://cf.lottecinema.co.kr//Media/MovieFile/MovieImg/202505/22541_201_1.jpg",
    },
    {
      id: 2,
      title: "interstellar",
      img: "https://cf.lottecinema.co.kr//Media/MovieFile/MovieImg/202505/22541_201_1.jpg",
    },
    {
      id: 3,
      title: "interstellar",
      img: "https://cf.lottecinema.co.kr//Media/MovieFile/MovieImg/202505/22541_201_1.jpg",
    },
    {
      id: 4,
      title: "interstellar",
      img: "https://cf.lottecinema.co.kr//Media/MovieFile/MovieImg/202505/22541_201_1.jpg",
    },
    {
      id: 5,
      title: "interstellar",
      img: "https://cf.lottecinema.co.kr//Media/MovieFile/MovieImg/202505/22541_201_1.jpg",
    },
    {
      id: 6,
      title: "interstellar",
      img: "https://cf.lottecinema.co.kr//Media/MovieFile/MovieImg/202505/22541_201_1.jpg",
    },
    {
      id: 7,
      title: "interstellar",
      img: "https://cf.lottecinema.co.kr//Media/MovieFile/MovieImg/202505/22541_201_1.jpg",
    },
    {
      id: 8,
      title: "interstellar",
      img: "https://cf.lottecinema.co.kr//Media/MovieFile/MovieImg/202505/22541_201_1.jpg",
    },
  ];
  return (
    <div className="flex justify-center pt-5">
      <div className="container">
        <div className="grid grid-cols-5 w-[1280px] gap-x-17 gap-y-5">
          {movies.map((movie) => (
            <div key={movie.id} className="w-50 h-80">
              <img
                className="w-full h-70 rounded"
                src={movie.img}
                alt={movie.title}
              />
              <p>{movie.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieTable;
