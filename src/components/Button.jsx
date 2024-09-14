import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Button({ text, icon }) {
  return (
    <button className="bg-slate-700 text-white py-2 max-w-min text-nowrap px-3">
      <FontAwesomeIcon icon={icon} /> {text}
    </button>
  );
}
