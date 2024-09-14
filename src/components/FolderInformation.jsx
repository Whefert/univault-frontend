export default function FolderInformation({}) {
  return (
    <>
      <div id="folderInformation" className=" px-5 flex flex-col gap-2">
        <p className="p-2 bg-slate-900 text-white max-w-min text-nowrap">
          Folder Information
        </p>
        <table>
          <tbody>
            <tr className="border-y">
              <td className="w-1/3">ID:</td>
              <td>5</td>
            </tr>
            <tr className="border-y">
              <td className="w-1/3">Owner:</td>
              <td>Administrator:</td>
            </tr>
            <tr className="border-y">
              <td className="w-1/3">Created:</td>
              <td>2024-07-20 09:08:02</td>
            </tr>
            <tr className="border-y">
              <td className="w-1/3">Comment:</td>
              <td>Containing folder for all faculty/staff</td>
            </tr>
            <tr className="border-y">
              <td className="w-1/3">Default Access Mode:</td>
              <td>No access</td>
            </tr>
            <tr className="border-y">
              <td className="w-1/3">Access mode: </td>
              <td>Read permissions: Faculty/Staff</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
