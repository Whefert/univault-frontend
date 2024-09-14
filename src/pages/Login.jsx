export default function Login() {
  return (
    <>
      <div className="flex flex-col justify-center w-full gap-4 items-center">
        <h1 className="text-4xl"> Sign in</h1>
        <form className="flex flex-col gap-5">
          <div className="flex gap-2 justify-around items-center">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="username"
              className="border-2 border-slate-800 px-2 py-1"
            />
          </div>
          <div className="flex gap-2 justify-around items-center">
            <label htmlFor="username">Password</label>
            <input
              type="text"
              id="passwrd"
              name="passwrd"
              placeholder="passwrd"
              className="border-2 border-slate-800 px-2 py-1"
            />
          </div>
        </form>
      </div>
    </>
  );
}
