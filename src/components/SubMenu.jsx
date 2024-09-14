import { Link } from "react-router-dom";
import Main from "../pages/Main";
export default function SubMenu() {
  return (
    <nav className="flex gap-3 bg-slate-200 p-2">
      <Link to={"main"}>Folder</Link>
      <Link>Add subfolder</Link>
      <Link>Add document</Link>
      <Link>Edit folder</Link>
      <Link>Access rights</Link>
      <Link>Folder Notification List</Link>
    </nav>
  );
}
