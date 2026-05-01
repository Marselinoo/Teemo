import InputField from "./InputField";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Mail, Lock } from "lucide-react";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const data ={
            email,
            password,
        }
        
        // handle kirim ke backend (nanti)
        
        console.log(data);
    };
    return (
        <div>
            <form onSubmit={handleSubmit} className="space-y-5">
                <InputField
                    label="Email Address"
                    type="email"
                    placeholder="you@example.com"
                    icon={Mail}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <InputField
                    label="Password"
                    type="password"
                    placeholder="********"
                    icon={Lock}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit"
                    className="w-full bg-linear-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold shadow-md hover:opacity-90 transition">
                    Login
                </button>

            </form>
            <p className="text-center text-sm text-gray-600">
                Don't have an account?{" "}
                <Link to="/signUp"
                    className="text-purple-600 cursor-pointer">
                    Sign up
                </Link>
            </p>
        </div>
    );
}

export default LoginForm;