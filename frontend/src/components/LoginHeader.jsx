import { Trophy } from "lucide-react";

function LoginHeader() {
  return (
    <div className="text-center mb-6">
      <div className="flex items-center justify-center gap-2 mb-4">
        <div className="bg-linear-to-r from-purple-500 to-pink-500 p-2 rounded-lg">
          <Trophy className="text-white w-5 h-5" />
        </div>
        <span className="text-lg font-semibold text-purple-600">
          CompeteHub
        </span>
      </div>

      <h2 className="text-2xl font-bold">Welcome Back</h2>
      <p className="text-gray-500 text-sm mt-1">
        Login to continue competing
      </p>
    </div>
  );
}

export default LoginHeader;