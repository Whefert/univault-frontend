import { Link } from "react-router-dom";
import Main from "../pages/Folder/Main";
export default function FolderNav() {
  return (
    <nav className="flex gap-3 bg-slate-200 px-4 py-2">
      <Link to={"./"}>Folder</Link>
      <Link to={"add_subfolder"}>Add subfolder</Link>
      <Link to={"add_document"}>Add document</Link>
      <Link>Edit folder</Link>
      <Link>Access rights</Link>
      <Link>Folder Notification List</Link>
    </nav>
  );
}
