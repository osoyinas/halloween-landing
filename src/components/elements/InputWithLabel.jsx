export function InputWithLabel({ label, name, type = "text", required = false, readonly=false, value, minlength = 0, placeHolder = "", onChange, className }) {
  
  return (
    <label className="text-white flex justify-between items-center w-full md:w-1/2 gap-4">
      <p className={`md:text-lg text-heading-3 text`}>{label} </p>

      <input 
        className={`p-2 rounded-3xl border px-4 text-heading-3 border-box-border bg-box-bg  shadow-box-shadow relative overflow-x-scroll ${className}`}
        type={type}
        name={name}
        value={value}
        placeholder={placeHolder}
        required={required}
        onChange={onChange}
        readOnly= {readonly}
      />
    </label>
  )
}