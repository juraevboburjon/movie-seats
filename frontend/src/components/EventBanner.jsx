import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./components.styles.css";

function EventBanner() {
  const events = [
    {
      id: 1,
      title: "interstellar",
      img: "https://cf.lottecinema.co.kr//Media/Event/c4260cb5c7474862a13fb961c4647f1e.jpg",
    },
    {
      id: 2,
      title: "interstellar",
      img: "https://cf.lottecinema.co.kr//Media/Event/c4260cb5c7474862a13fb961c4647f1e.jpg",
    },
    {
      id: 3,
      title: "interstellar",
      img: "https://cf.lottecinema.co.kr//Media/Event/c4260cb5c7474862a13fb961c4647f1e.jpg",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="flex justify-center h-80 pt-3">
        <div className="container rounded-xl overflow-hidden ">
          <Slider {...settings}>
            {events.map((event) => (
              <div key={event.id}>
                <div className="w-full h-80 relative">
                  <div className="absolute top-0 left-0 w-full flex justify-start items-center z-10 bg-black/80 py-3 px-5 rounded-t-xl">
                    <p className="text-white">{event.title}</p>
                  </div>
                  <img
                    className="h-full w-full"
                    src={event.img}
                    alt={event.title}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default EventBanner;
