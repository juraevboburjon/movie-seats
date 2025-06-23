import { Link } from "react-router-dom";

function LoginForm({ formData, handleChange, handleSubmit }) {
  return (
    <>
      <form className="" onSubmit={handleSubmit}>
        <div className="flex flex-row justify-between pt-8">
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
          <div className="flex bg-red-800 text-white py-8 px-12 rounded cursor-pointer">
            <button type="submit">Login</button>
          </div>
        </div>
        <div className="mt-30 text-sm text-center" onClick={handleSubmit}>
          <p>Don't have a cabinate?</p>
          <Link to={"/register"}>
            <p>Register</p>
          </Link>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
