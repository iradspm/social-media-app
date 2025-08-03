import React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation";


const login_url = process.env.NEXT_PUBLIC_LOGIN_URL;

type loginData = {
    email: string;
    password: string;
    };

export default function Login() {
    const router = useRouter();
    const [formData, setLoginData] = useState <loginData>(
            {
                email:"",
                password:""
            });
    const handleChange = (
            e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
            ) => {
                const { name, value } = e.target;
                setLoginData((prev) => ({ ...prev, [name]: value }));
            };
    
    const processLoginRequest = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try{
            console.log("Sending login data", formData)
            console.log("Login URL:", login_url)
            const res = await fetch(`${login_url!}`,{
            method: "POST",
            headers: {
                    "Content-Type": "application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify(formData),
                });
            if (!res.ok) throw new Error("Request failed");
            const result = await res.json();
            document.cookie = `sid=${result.sid}; path=/`
            console.log("Login response:", result);
            // console.log(result.);
            setLoginData({
                    email: "",
                    password: ""
                });
            setTimeout(() => {
                router.push('/');
                router.refresh();
            }, 10);
            }
            catch(error){
                console.log("Login error", error)
            }

    }
    return (
        <div className="flex flex-col justify-center px-1 py-1 lg:px-8">
            <div className="mt-1 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={processLoginRequest}>
                <div>
                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                    Email address
                </label>
                <div className="mt-2">
                    <input
                    id="email"
                    name="email"
                    type="text"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                </div>
                </div>

                <div>
                <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                    Password
                    </label>
                    {/* <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                        Forgot password?
                    </a>
                    </div> */}
                </div>
                <div className="mt-2">
                    <input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                </div>
                </div>

                <div>
                <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Sign in
                </button>
                </div>
            </form>

            {/* <p className="mt-6 text-center text-sm/6 text-gray-500">
                Not a member?{' '}
                <a href="#" className="font-semibold text-red-600 hover:text-indigo-500">
                Sign Up
                </a>
            </p> */}
            </div>
        </div>
    )
}
