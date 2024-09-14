export default function Login() {
  return (
    <>
      <div className="flex flex-col justify-center w-full gap-4 items-center">
        <h1 className="text-4xl"> Sign in</h1>
        <form className="flex flex-col gap-5">
          <div className="flex flex-col gap-2 items-start">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter username"
              className="border-2 border-slate-800 px-2 py-1"
            />
          </div>
          <div className="flex flex-col gap-2 items-start">
            <label htmlFor="username">Password</label>
            <input
              type="text"
              id="passwrd"
              name="passwrd"
              placeholder="Enter password"
              className="border-2 border-slate-800 px-2 py-1"
            />
          </div>
          <button className="bg-slate-700 text-white py-2 max-w-min mx-auto text-nowrap px-3">
            Login
          </button>
        </form>
      </div>
    </>
  );
}
