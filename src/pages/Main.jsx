import Folder from "../components/Folder";
import FolderInformation from "../components/FolderInformation";
import Breadcrumb from "../components/Breadcrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { useLoaderData } from "react-router-dom";
export default function Main() {
  const folders = useLoaderData();
  return (
    <>
      <div className="m-4">
        <Breadcrumb />
        <div className="flex w-full">
          <aside
            id="foldersContainer"
            className="flex flex-col  w-1/3 items-start "
          >
            <FontAwesomeIcon icon={faMinusCircle} />
            <hr className="border-1 border-slate-300 w-full my-2" />
            <div className="flex flex-col bg-slate-300 w-full p-2 gap-2">
              {folders.length > 0 &&
                folders.map((folder) => <Folder name={folder.name} />)}
            </div>
          </aside>
          <div className="flex flex-col w-2/3">
            <FolderInformation />
          </div>
        </div>
      </div>
    </>
  );
}
export async function getAllFolders() {
  try {
    const res = await axios.get("http://localhost:3000/folder");
    return res.data;
  } catch (error) {
    return [];
  }
}
