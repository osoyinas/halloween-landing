export function InputWithLabel({ label, name, type = "text", required = false, value, minlength = 0, placeHolder = "", onChange }) {
  return (
    <label className="text-white flex justify-between items-center w-full md:w-1/2 gap-4">
      <p className={`md:text-lg text-heading-3`}>{label} </p>

      <input
        className="p-2 rounded-3xl border px-4 border-box-border bg-box-bg shadow-lg shadow-box-shadow relative overflow-hidden"
        type={type}
        name={name}
        value={value}
        placeholder={placeHolder}
        required={required}
        onChange={onChange}
      />
    </label>
  )
}