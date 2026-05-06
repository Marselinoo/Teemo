export default function SelectField({
  label,
  name,
  value,
  onChange,
  options = [],
  placeholder = "-- Pilih Kategori --",
  required = false,
  error,
  disabled = false,
}) {
  return (
    <div className="space-y-1">
      {/* Label */}
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      {/* Select */}
      <select
        name={name}
        value={value || ""}
        onChange={onChange}
        disabled={disabled}
        className={`
          w-full px-3 py-2 rounded-lg border text-sm outline-none transition bg-white
          ${error
            ? "border-red-500 focus:ring-2 focus:ring-red-200"
            : "border-gray-300 focus:ring-2 focus:ring-blue-200"}
          ${disabled && "bg-gray-100 cursor-not-allowed"}
        `}
      >
        {/* Placeholder */}
        <option value="" disabled>
          {placeholder}
        </option>

        {/* Options */}
        {options.map((opt, i) => {
          if (typeof opt === "string") {
            return (
              <option key={i} value={opt}>
                {opt}
              </option>
            );
          }

          return (
            <option key={i} value={opt.value}>
              {opt.label}
            </option>
          );
        })}
      </select>

      {/* Error */}
      {error && (
        <p className="text-xs text-red-500 mt-1">{error}</p>
      )}
    </div>
  );
}