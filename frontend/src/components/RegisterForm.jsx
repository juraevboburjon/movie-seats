import { Link } from "react-router-dom";

function RegisterForm({ formData, handleChange, handleRegister }) {
  return (
    <>
      <form className="" onSubmit={handleRegister}>
        <div className="flex flex-row justify-between pt-5 gap-x-5">
          <div className="flex flex-col w-[70%] gap-y-4">
            <input
              type="userName"
              id="userName"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              placeholder="이름을 입력해 주세요."
              className="border rounded p-2"
            />
            <input
              type="phoneNumber"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="전화번호 입력해 주세요."
              className="border rounded p-2"
            />
          </div>
          <div className="flex flex-col w-[70%] gap-y-4">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="이매일을 입력해 주세요."
              className="border rounded p-2"
            />
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="비밀번호를 입력해 주세요."
              className="border rounded p-2"
            />
          </div>
        </div>
        <div className="flex justify-center bg-red-800 text-white mt-4 py-3 rounded cursor-pointer">
          <button type="submit">Register</button>
        </div>
        <div className="mt-18 text-sm text-center ">
          <p>Already have a cabinate?</p>
          <Link to={"/login"}>
            <p>Login</p>
          </Link>
        </div>
      </form>
    </>
  );
}

export default RegisterForm;
