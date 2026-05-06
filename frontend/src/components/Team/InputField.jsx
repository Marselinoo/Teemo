export default function InputField({
  label,
  name,
  value,
  onChange,
  placeholder = "",
  maxLength,
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

      {/* Input */}
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        disabled={disabled}
        className={`
          w-full px-3 py-2 rounded-lg border text-sm outline-none transition
          ${error
            ? "border-red-500 focus:ring-2 focus:ring-red-200"
            : "border-gray-300 focus:ring-2 focus:ring-blue-200"}
          ${disabled && "bg-gray-100 cursor-not-allowed"}
        `}
      />

      {/* Footer: error / counter */}
      <div className="flex justify-between text-xs mt-1">
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <span />
        )}

        {maxLength && (
          <p className="text-gray-400">
            {value?.length || 0}/{maxLength}
          </p>
        )}
      </div>
    </div>
  );
}