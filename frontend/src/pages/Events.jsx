import React from "react";
import Layout from "../components/Layout";
import EventBanner from "../components/EventBanner";

function Events() {
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
    {
      id: 4,
      title: "interstellar",
      img: "https://cf.lottecinema.co.kr//Media/Event/c4260cb5c7474862a13fb961c4647f1e.jpg",
    },
    {
      id: 5,
      title: "interstellar",
      img: "https://cf.lottecinema.co.kr//Media/Event/c4260cb5c7474862a13fb961c4647f1e.jpg",
    },
    {
      id: 6,
      title: "interstellar",
      img: "https://cf.lottecinema.co.kr//Media/Event/c4260cb5c7474862a13fb961c4647f1e.jpg",
    },
    {
      id: 7,
      title: "interstellar",
      img: "https://cf.lottecinema.co.kr//Media/Event/c4260cb5c7474862a13fb961c4647f1e.jpg",
    },
    {
      id: 8,
      title: "interstellar",
      img: "https://cf.lottecinema.co.kr//Media/Event/c4260cb5c7474862a13fb961c4647f1e.jpg",
    },
    {
      id: 9,
      title: "interstellar",
      img: "https://cf.lottecinema.co.kr//Media/Event/c4260cb5c7474862a13fb961c4647f1e.jpg",
    },
  ];
  return (
    <Layout>
      <EventBanner />
      <div className="flex justify-center pt-5">
        <div className="container">
          <div className="grid grid-cols-4 gap-y-5">
            {events.map((event) => (
              <div key={event.id} className="w-80">
                <img className="rounded" src={event.img} alt={event.title} />
                <p>{event.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Events;
