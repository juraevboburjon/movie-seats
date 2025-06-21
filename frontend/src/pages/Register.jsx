import { Link, useNavigate } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";
import { useState } from "react";
import axios from "axios";

function Register() {
  const [formData, setFormData] = useState({
    userName: "",
    phoneNumber: "",
    email: "",
    password: "",
  });
  const host = import.meta.env.VITE_BACKEND_HOST;
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${host}/api/auth/register`, formData);
      if (res) {
        navigate("/login");
      }
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
              <p>회원가입</p>
            </div>
            <RegisterForm
              formData={formData}
              handleChange={handleChange}
              handleRegister={handleRegister}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
