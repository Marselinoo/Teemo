import { useEffect, useRef } from "react";

export default function TextAreaField({
  label,
  name,
  value,
  onChange,
  placeholder = "",
  maxLength,
  required = false,
  error,
  disabled = false,
  rows = 4,
  autoResize = true,
}) {
  const textareaRef = useRef(null);

  // Auto resize height
  useEffect(() => {
    if (autoResize && textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [value, autoResize]);

  return (
    <div className="space-y-1">
      {/* Label */}
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      {/* Textarea */}
      <textarea
        ref={textareaRef}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        disabled={disabled}
        rows={rows}
        className={`
          w-full px-3 py-2 rounded-lg border text-sm outline-none resize-none transition
          ${error
            ? "border-red-500 focus:ring-2 focus:ring-red-200"
            : "border-gray-300 focus:ring-2 focus:ring-blue-200"}
          ${disabled && "bg-gray-100 cursor-not-allowed"}
        `}
      />

      {/* Footer */}
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