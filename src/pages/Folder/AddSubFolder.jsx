import { faSave } from "@fortawesome/free-regular-svg-icons";
import Button from "../../components/Button";
export default function AddSubFolder() {
  return (
    <div className="m-4">
      <h1 className="text-2xl pb-5">Add Subfolder</h1>
      <hr />
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 p-2 bg-slate-200">
          <div className="flex justify-around">
            <label htmlFor="name" className="basis-1/4">
              Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="border border-slate-600 basis-3/4 py-2 px-1"
            />
          </div>
          <div className="flex justify-around">
            <label htmlFor="comment" className="basis-1/4">
              Comment:{" "}
            </label>
            <textarea
              name="comment"
              id="comment"
              className="border border-slate-600 basis-3/4 py-2 px-1"
            />
          </div>
          <div className="flex justify-around">
            <label htmlFor="" className="basis-1/4 ">
              Sequence:{" "}
            </label>
            <input
              type="text "
              className="border border-slate-600 basis-3/4 py-2 px-1"
            />
          </div>
        </div>
        <Button text="Add Subfolder" icon={faSave} />
      </form>
    </div>
  );
}
