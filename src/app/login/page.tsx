"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase/config";
import { doc, setDoc } from "firebase/firestore";
import Link from "next/link";
import Cookies from "js-cookie"; // Import js-cookie

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("user");
    const [error, setError] = useState("");
    const [isRegister, setIsRegister] = useState(false);
    const router = useRouter();

    const handleAuth = async (event) => {
        event.preventDefault();
        try {
            if (isRegister) {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;
                await setDoc(doc(db, "users", user.uid), {
                    email,
                    role
                });
               
                Cookies.set('token', await user.getIdToken(), { expires: 7 }); 
                router.push("/");
            } else {
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;
                Cookies.set('token', await user.getIdToken(), { expires: 7 }); 
                router.push("/");
            }
        } catch (err) {
            setError(err.message);
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
                            <div>
                                <label htmlFor="role" className="block text-sm font-medium">Role</label>
                                <select
                                    id="role"
                                    className="border p-3 rounded-md text-sm"
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                >
                                    <option value="user">User</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </div>
                        )}
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        <button className="bg-black font-bold text-white py-3 rounded-md w-[324px]" type="submit">
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
                                onClick={() => setIsRegister(!isRegister)}
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
        </div>
    );
}
