import React from "react";

function TicketComponent({ ticket }) {
  return (
    <div>
      <p>{ticket.seat.seatNumber}</p>
      <p>{ticket.seat.status}</p>
      <p>{ticket.sessionId.cinemaHall}</p>
      <p>{ticket.sessionId.startTime}</p>
      <p>{ticket.userName}</p>
    </div>
  );
}

export default TicketComponent;
