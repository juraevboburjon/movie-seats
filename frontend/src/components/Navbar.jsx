import { Link } from "react-router-dom";
import { useAuth } from "../service/AuthService";

function Navbar() {
  const { isLoggedIn, email, logout, role } = useAuth();

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
            {role === "admin" && (
              <>
                <Link to={"/createmovie"}>
                  <p>add new film</p>
                </Link>
                <Link to={"/createsession"}>
                  <p>add new session</p>
                </Link>
              </>
            )}
            <Link to={"/movie"}>
              <p>영화</p>
            </Link>
            {!isLoggedIn ? (
              <Link to={"/login"}>
                <p>로그인</p>
              </Link>
            ) : (
              <>
                <p>{email}</p>
                <p className="cursor-pointer " onClick={logout}>
                  logout
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
