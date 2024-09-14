import Breadcrumb from "../components/Breadcrumb";
import SubMenu from "../components/SubMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import Folder from "../components/Folder";
import FolderInformation from "../components/FolderInformation";
import FolderContents from "../components/FolderContents";

export default function Main() {
  return (
    <>
      <div className="m-4">
        <SubMenu />
        <Breadcrumb />
        <div className="flex w-full">
          <aside
            id="foldersContainer"
            className="flex flex-col  w-1/3 items-start "
          >
            <FontAwesomeIcon icon={faMinusCircle} />
            <hr className="border-1 border-slate-300 w-full my-2" />
            <div className="flex flex-col bg-slate-300 w-full p-2 gap-2">
              <Folder folderName="DMS" />
              <Folder folderName="DMS" />
            </div>
          </aside>
          <div className="flex flex-col w-2/3">
            <FolderInformation />
            <FolderContents />
          </div>
        </div>
      </div>
    </>
  );
}
