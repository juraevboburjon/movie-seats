import React from "react";
import Layout from "../components/Layout";
import EventBanner from "../components/EventBanner";

function Events() {
  const events = [
    {
      id: 1,
      title: "Escape event day",
      img: "https://avatars.mds.yandex.net/i?id=9b5db5029236da1f26d22905dde13281a5d59e78-10792024-images-thumbs&n=13",
    },
    {
      id: 2,
      title: "Sale 20%",
      img: "https://cdn.concreteplayground.com/content/uploads/2020/03/event-cinemas-newmarket1.jpg",
    },
    {
      id: 3,
      title: "Event day",
      img: "https://cdn.concreteplayground.com/content/uploads/2023/08/ScreenX_Robina_04_Event-Cinemas_supplied.jpg",
    },
    {
      id: 4,
      title: "Sale membership",
      img: "https://electrolight.com/wp-content/uploads/2016/06/EventCinemaMiranda-0104-LowRes-1600x1000.jpg",
    },
    {
      id: 5,
      title: "배드 가이즈",
      img: "https://cf.lottecinema.co.kr//Media/Event/81981cbf92b34e27b785b4c1892ebf8a.jpg",
    },
    {
      id: 6,
      title: "명탐정",
      img: "https://cf.lottecinema.co.kr//Media/Event/90eb060739cb476eb7c6e335be8275b7.jpg",
    },
    {
      id: 7,
      title: "VIP 멤버십",
      img: "https://cf.lottecinema.co.kr//Media/Event/973bf825eb554b909ae04233e93ff04b.jpg",
    },
    {
      id: 8,
      title: "Amadeus",
      img: "https://cf.lottecinema.co.kr//Media/Event/c4260cb5c7474862a13fb961c4647f1e.jpg",
    },
  ];
  return (
    <div className="h-screen">
      <Layout>
        <EventBanner />
        <div className="flex justify-center pt-6">
          <div className="container pb-20">
            <div className="grid grid-cols-4 gap-y-15 gap-x-4">
              {events.map((event) => (
                <div key={event.id} className="w-80 h-50">
                  <img
                    className="rounded h-full"
                    src={event.img}
                    alt={event.title}
                  />
                  <p>{event.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Events;
