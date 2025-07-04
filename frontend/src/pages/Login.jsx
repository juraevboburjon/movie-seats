import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import { useState } from "react";
import { useAuth } from "../service/AuthService";

function Login() {
  const { login } = useAuth();
  const host = import.meta.env.VITE_BACKEND_HOST;
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${host}/api/auth/login`, formData);
      if (res && res.data) {
        login(
          formData.email,
          res.data.role,
          res.data.token,
          res.data.userName,
          res.data.userId
        );
        navigate("/");
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-red-800">
        <div className="flex justify-center items-center w-[650px] h-[450px] bg-white rounded-lg">
          <div className="grid grid-rows-4 h-full w-full px-12 pt-8">
            <div className="flex justify-between">
              <Link to={"/"}>
                <p className="text-2xl font-bold text-red-800">MovieSeats</p>
              </Link>
              <p>로그인 페이즈</p>
            </div>
            <LoginForm
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
