function LoginForm() {
  return (
    <>
      <form>
        <div className="flex flex-col">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <div className="">
          <button>Login</button>
        </div>
        <div className="">
          <p>Don't have a cabinate?</p>
          <p>Register</p>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
