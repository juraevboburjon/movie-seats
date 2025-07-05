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
            <p>
              Seat number:{" "}
              <span className="font-bold">{selectedSeat.seatNumber}</span>
            </p>
            <p>
              Seat status:{" "}
              <span className="font-bold">{selectedSeat.status}</span>
            </p>
            <p>
              price : <span className="font-bold">30000won</span>
            </p>
            <Link
              to={`/booking/${sessionId}/${selectedSeat.seatNumber}/payment`}
            >
              <button className="mt-6 bg-red-800 px-6 py-2 rounded-3xl cursor-pointer text-2xl text-white">
                결제히가
              </button>
            </Link>
          </div>
        ) : (
          <div className="">
            <p>Select seat</p>
            <p>Select seat</p>
            <p>Price : select seat</p>
          </div>
        )}
      </div>
    </>
  );
}

export default SeatInfo;
