import React from "react";

function TicketComponent({ ticket }) {
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
    <>
      <div className="flex justify-center items-center h-full">
        <div className="flex flex-col shadow-xl border border-gray-200 p-9">
          <div className="flex justify-center text-4xl font-bold mb-14">
            MovieSeats
          </div>
          <p>
            Seat number:
            <span className="font-bold"> {ticket.seat.seatNumber}</span>
          </p>
          <p>
            Status:
            <span className="font-bold"> {ticket.seat.status}</span>
          </p>
          <p>
            Cinema hall:
            <span className="font-bold"> {ticket.sessionId.cinemaHall}</span>
          </p>
          <p>
            Start time:{" "}
            <span className="font-bold">
              {formatDate(ticket.sessionId.startTime)}
            </span>
          </p>
          <p>
            Username: <span className="font-bold"> {ticket.userName}</span>
          </p>
          <p className="mt-8">
            All: <span className="text-xl font-bold">30000</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default TicketComponent;
