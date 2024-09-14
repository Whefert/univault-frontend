export default function Input({ name, id = name, label, type = "text" }) {
  return (
    <div className="flex justify-around">
      <label htmlFor={name} className="basis-1/4 capitalize">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        className="border border-slate-600 basis-3/4 py-2 px-1"
      />
    </div>
  );
}
