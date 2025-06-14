import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";

function Login() {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-red-800 ">
        <div className="flex justify-center items-center w-[650px] h-[450px] bg-white rounded-lg">
          <div className="grid grid-rows-4 h-full w-full px-8">
            <div className="flex justify-between ">
              <Link to={"/"}>
                <p className="text-2xl font-bold text-red-800">MovieSeats</p>
              </Link>
              <p>로그인</p>
            </div>
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
