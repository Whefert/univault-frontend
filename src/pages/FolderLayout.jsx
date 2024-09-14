import { Outlet } from "react-router-dom";
import SubMenu from "../components/SubMenu";
export default function FolderLayout() {
  return (
    <>
      <SubMenu />;
      <Outlet />
    </>
  );
}
