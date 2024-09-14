import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown19,
  faArrowDownAZ,
  faArrowDownWideShort,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";

export default function FolderContents() {
  return (
    <div id="folderContents" className="w-full m">
      <h3 className="text-2xl">Folder Contents</h3>
      <table className="bg-red-400 w-full">
        <thead>
          <tr>
            <th className="w-[10%] bg-slate-600 px-3">
              <button>
                <FontAwesomeIcon icon={faArrowUp} />
              </button>
            </th>
            <th className="flex gap-1 justify-center items-center bg-blue-400 py-2">
              <p>Name</p>
              <FontAwesomeIcon icon={faArrowDownAZ} />
              <FontAwesomeIcon icon={faArrowDown19} />
              <FontAwesomeIcon icon={faArrowDownWideShort} />
            </th>
            <th className="w-[20%] text-center bg-orange-400">Status</th>
            <th className="w-[20%] text-center">Action</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}
