import { Outlet } from "react-router-dom";
import FolderNav from "../../components/FolderNav";
import Breadcrumb from "../../components/Breadcrumb";
export default function FolderLayout() {
  return (
    <>
      <FolderNav />
      <Breadcrumb />
      <Outlet />
    </>
  );
}
