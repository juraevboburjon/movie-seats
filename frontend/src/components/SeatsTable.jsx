import seatImg from "../assets/seat.png";
import bookedSeat from "../assets/seatRed.png";
import cinemaImg from "../assets/Vector 1.png";

function SeatsTable({ seats, setSelectedSeat }) {
  return (
    <div className="w-[600px] h-full flex flex-col items-center gap-6">
      <div className="w-[600px] h-full">
        <img src={cinemaImg} className="w-full h-full" alt="cinema" />
      </div>
      <div className="grid grid-cols-8 gap-4">
        {seats.map((seat) => (
          <button key={seat.seatNumber} onClick={() => setSelectedSeat(seat)}>
            {seat.status === "booked" ? (
              <img src={bookedSeat} style={{ width: 50, height: 50 }} alt="" />
            ) : (
              <img src={seatImg} style={{ width: 50, height: 50 }} alt="" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SeatsTable;
