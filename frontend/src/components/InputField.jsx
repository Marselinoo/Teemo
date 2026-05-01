function InputField({ label, type, placeholder, icon: Icon, value, onChange }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">
        {label}
      </label>

      <div className="flex items-center border rounded-lg px-3 py-2">
        {Icon && <Icon className="w-4 h-4 text-gray-400 mr-2" />}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full outline-none text-sm"
        />
      </div>
    </div>
  );
}

export default InputField;