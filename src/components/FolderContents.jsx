import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown19,
  faArrowDownAZ,
  faArrowDownWideShort,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";

export default function FolderContents() {
  return (
    <div>
      <h3 className="text-2xl">Folder Contents</h3>
      <table>
        <thead>
          <tr>
            <th className="w-[20px] bg-slate-600 px-3 py-1">
              <button>
                <FontAwesomeIcon icon={faArrowUp} />
              </button>
            </th>
            <th className="flex w-[200px] gap-1 ms-3">
              <p>Name</p>
              <FontAwesomeIcon icon={faArrowDownAZ} />
              <FontAwesomeIcon icon={faArrowDown19} />
              <FontAwesomeIcon icon={faArrowDownWideShort} />
            </th>
            <th className="w-[100px]">Status</th>
            <th className="w-[100px]">Action</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}
