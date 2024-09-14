import { NavLink } from "react-router-dom";
export default function MainNav() {
  return (
    <>
      <nav className="text-2xl bg-black text-white flex justify-center mb-10 py-3">
        <div className="w-[1100px] flex justify-between">
          <ul>
            <NavLink to={"/login"}>Login</NavLink>
          </ul>
        </div>
      </nav>
    </>
  );
}
