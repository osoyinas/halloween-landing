export function InputWithLabel({
  label,
  name,
  type = "text",
  required = false,
  readonly = false,
  value,
  minlength = 0,
  placeHolder = "",
  onChange,
  className,
  error = "",
}) {
  return (
    <>
      <label className="text-white grid grid-cols-2  w-full md:w-1/2  items-center gap-4  ">
        <p className={`md:text-lg text-heading-3 text`}>{label} </p>
        <input
          className={`p-2 rounded-xl border px-4 text-heading-3 border-box-border bg-box-bg  shadow-box-shadow relative overflow-x-scroll ${className}`}
          type={type}
          name={name}
          value={value}
          placeholder={placeHolder}
          required={required}
          onChange={onChange}
          readOnly={readonly}
        />
      </label>
      {error !== "" && (
        <p className="text-red-500 text-sm- mt-1 text-right w-full md:w-1/2">{error}</p>
      )}
    </>
  );
}
