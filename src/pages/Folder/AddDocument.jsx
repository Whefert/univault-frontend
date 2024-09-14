import { faSave } from "@fortawesome/free-regular-svg-icons";
import Button from "../../components/Button";
import Input from "../../components/Input";

export default function AddDocument() {
  return (
    <div className="flex flex-col m-4 gap-4" id="container">
      <div id="warning" className="bg-yellow-200">
        Maximum upload size: 32 MiB
      </div>
      <h2 className="text-2xl">Add Document</h2>
      <form id="addDocument">
        <hr />
        <div className="flex w-full" id="formColumns">
          <div className="flex-1" id="documentInformation">
            <p className="text-xl">Document Information</p>
            <div>
              <Input name="name" label="Name" />
            </div>
          </div>
          <div className="flex-1" id="versionInformation">
            <p>Version Information</p>
          </div>
        </div>
        <Button text="Add Document" icon={faSave} />
      </form>
    </div>
  );
}
