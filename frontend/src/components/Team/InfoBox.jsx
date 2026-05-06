import { Info, CheckCircle, AlertTriangle, XCircle } from "lucide-react";

const variants = {
  info: {
    bg: "bg-blue-50",
    border: "border-blue-400",
    text: "text-blue-800",
    icon: Info,
  },
  success: {
    bg: "bg-green-50",
    border: "border-green-400",
    text: "text-green-800",
    icon: CheckCircle,
  },
  warning: {
    bg: "bg-yellow-50",
    border: "border-yellow-400",
    text: "text-yellow-800",
    icon: AlertTriangle,
  },
  error: {
    bg: "bg-red-50",
    border: "border-red-400",
    text: "text-red-800",
    icon: XCircle,
  },
};

export default function InfoBox({
  title = "Informasi",
  items = [],
  variant = "info",
  children,
}) {
  const config = variants[variant];
  const Icon = config.icon;

  return (
    <div
      className={`
        ${config.bg} ${config.border} ${config.text}
        border-l-4 p-4 rounded-lg text-sm
      `}
    >
      {/* Header */}
      <div className="flex items-center gap-2 font-semibold mb-2">
        <Icon size={18} />
        <span>{title}</span>
      </div>

      {/* Content */}
      {items.length > 0 && (
        <ul className="space-y-1 pl-1">
          {items.map((item, i) => (
            <li key={i}>✔ {item}</li>
          ))}
        </ul>
      )}

      {/* Custom children (optional override) */}
      {children && <div className="mt-2">{children}</div>}
    </div>
  );
}