import { Link } from "react-router-dom";
export default function SubMenu() {
  return (
    <nav className="flex gap-3 bg-slate-200 p-2">
      <Link>Folder</Link>
      <Link>Add subfolder</Link>
      <Link>Add document</Link>
      <Link>Edit folder</Link>
      <Link>Access rights</Link>
      <Link>Folder Notification List</Link>
    </nav>
  );
}
