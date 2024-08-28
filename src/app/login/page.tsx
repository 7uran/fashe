import Link from "next/link";

export default function LoginPage() {

    return (<div className="bg-[#D0D0CE] flex min-h-screen items-center justify-center">
        {/* https://demo.bootstrapdash.com/login-template-free-2/#! */}
        <div className=" flex rounded-3xl overflow-hidden shadow-xl">
            <div className=" h-[598px]  ">
                <img className="w-[462px] h-[598px] object-cover md:flex hidden" src="https://demo.bootstrapdash.com/login-template-free-2/assets/images/login.jpg" />
            </div>
            <div className="bg-white flex flex-col gap-6 p-16 justify-center">
                <div  >
                    <img src="https://preview.colorlib.com/theme/fashe/images/icons/logo.png.webp" />
                </div>
                <div className="">
                    <h2 className="text-2xl">Sign into your account</h2>
                </div>
                <div className="flex flex-col gap-4 ">
                    <input type="text" className="outline-none  border p-3 rounded-md text-sm" placeholder="Username" />
                    <input type="password" className="outline-none border p-3  rounded-md text-sm" placeholder="*******" />
                    <button className="bg-black font-bold text-white py-3 rounded-md w-[324px] ">Login</button>
                </div>
                <div>
                    <Link href="#" className="text-xs text-gray-400 hover:underline">
                        Forgot password?
                    </Link>
                    <p className="text-sm">
                        Don't have an account? <Link href="#" className="text-sm hover:underline">
                            Register here
                        </Link>
                    </p>
                </div>
                <div >
                    <p className="text-sm">Terms of use. Privacy policy</p>
                </div>
            </div>

        </div>

    </div>)
}