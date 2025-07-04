import { Link } from "react-router-dom";
import seatImg from "../assets/seat.png";
import bookedSeat from "../assets/seatRed.png";
function SeatInfo({ selectedSeat, sessionId }) {
  console.log(selectedSeat);
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="w-50">
          {selectedSeat && selectedSeat.status === "booked" ? (
            <img src={bookedSeat} className="w-full" alt="" />
          ) : (
            <img src={seatImg} className="w-full" alt="" />
          )}
        </div>
        {selectedSeat ? (
          <div className="">
            <p>Seat number:{selectedSeat.seatNumber}</p>
            <p>Seat status{selectedSeat.status}</p>
            <p>price : 17000won</p>
            <Link
              to={`/booking/${sessionId}/${selectedSeat.seatNumber}/payment`}
            >
              <button>결제히가</button>
            </Link>
          </div>
        ) : (
          <div className="">
            <p>select seat</p>
            <p>select seat</p>
            <p>price : select seat</p>
          </div>
        )}
      </div>
    </>
  );
}

export default SeatInfo;
