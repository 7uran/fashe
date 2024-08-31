"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase/config";
import { doc, setDoc } from "firebase/firestore";
import Link from "next/link";
import Cookies from "js-cookie";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [isRegister, setIsRegister] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleAuth = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        try {
            if (isRegister) {
                if (password !== confirmPassword) {
                    setError("Passwords do not match");
                    return;
                }

                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;
                await setDoc(doc(db, "users", user.uid), { email });

                Cookies.set('userEmail', email, { expires: 7 });
                Cookies.set('token', await user.getIdToken(), { expires: 7 });
                toast.success("Registration successful!");
                router.push("/");
            } else {
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;

                Cookies.set('userEmail', email, { expires: 7 });
                Cookies.set('token', await user.getIdToken(), { expires: 7 });
                toast.success("Login successful!");
                router.push("/");
            }
        } catch (err) {
            toast.error("An error occurred: " + err.message);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-[#D0D0CE] flex min-h-screen items-center justify-center">
            <div className="flex rounded-3xl overflow-hidden shadow-xl">
                <div className="h-[598px]">
                    <img
                        className="w-[462px] h-[598px] object-cover md:flex hidden"
                        src="https://demo.bootstrapdash.com/login-template-free-2/assets/images/login.jpg"
                        alt="Login"
                    />
                </div>
                <div className="bg-white flex flex-col gap-6 p-16 justify-center">
                    <div>
                        <img src="https://preview.colorlib.com/theme/fashe/images/icons/logo.png.webp" alt="Logo" />
                    </div>
                    <div>
                        <h2 className="text-2xl">{isRegister ? "Register your account" : "Sign into your account"}</h2>
                    </div>
                    <form className="flex flex-col gap-4" onSubmit={handleAuth}>
                        <input
                            type="email"
                            className="outline-none border p-3 rounded-md text-sm"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            className="outline-none border p-3 rounded-md text-sm"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        {isRegister && (
                            <input
                                type="password"
                                className="outline-none border p-3 rounded-md text-sm"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        )}
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        <button
                            className={`bg-black font-bold text-white py-3 rounded-md w-[324px] ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                            type="submit"
                            disabled={loading}
                        >
                            {isRegister ? "Register" : "Login"}
                        </button>
                    </form>
                    <div>
                        <Link href="#" className="text-xs text-gray-400 hover:underline">
                            Forgot password?
                        </Link>
                        <p className="text-sm">
                            {isRegister ? "Already have an account?" : "Don't have an account?"}
                            <button
                                onClick={() => {
                                    setIsRegister(!isRegister);
                                    setError("");
                                }}
                                className="text-sm hover:underline"
                            >
                                {isRegister ? "Login here" : "Register here"}
                            </button>
                        </p>
                    </div>
                    <div>
                        <p className="text-sm">Terms of use. Privacy policy</p>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}
1