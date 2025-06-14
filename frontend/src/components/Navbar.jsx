import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="flex justify-center bg-red-800">
        <div className="flex container items-center justify-between py-5 text-white">
          <div className="flex text-2xl font-bold">
            <Link to={"/"}>MovieSeats</Link>
          </div>
          <div className="flex gap-x-15">
            <Link to={"/event"}>
              <p>이벤트</p>
            </Link>
            <Link to={"/booking"}>
              <p>예매</p>
            </Link>
            <Link to={"/movie"}>
              <p>영화</p>
            </Link>
            <Link to={"/login"}>
              <p>로그인</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
