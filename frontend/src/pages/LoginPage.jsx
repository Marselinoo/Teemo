import LoginHeader from "../components/LoginHeader";
import LoginForm from "../components/LoginForm";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6 flex-col space-y-3">
            <div className="justify-start w-full max-w-md">
                <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-purple-600 transition font-medium">
                    <ArrowLeft className="w-4 h-4" />
                    Back
                </Link>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
                <LoginHeader />
                <LoginForm />
            </div>
        </div>
    );
}