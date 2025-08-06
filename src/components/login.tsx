import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { base_url, login_url } from "@/lib/configs";

type loginData = {
    email: string;
    password: string;
    };

export default function Login() {
    const router = useRouter();
    const [formData, setLoginData] = useState<loginData>({
        email: "",
        password: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setLoginData((prev) => ({ ...prev, [name]: value }));
    };

    const processLoginRequest = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
        const res = await fetch(`${base_url}/${login_url!}`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(formData),
        });
        if (!res.ok) throw new Error("Request failed");

        const result = await res.json();
        document.cookie = `sid=${result.sid}; path=/`;

        setLoginData({ email: "", password: "" });

        setTimeout(() => {
            router.push("/");
            router.refresh();
        }, 10);
        } catch (error) {
        console.log("Login error", error);
        }
    };

    return (
        <section className="w-full bg-gradient-to-r from-white-100 via-white-100 to-white-100 py-12 px-6">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm/2 overflow-hidden p-8 flex flex-col items-center gap-6">
            <form className="space-y-6" onSubmit={processLoginRequest}>
            <div>
                <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900"
                >
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
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                />
                </div>
            </div>

            <div>
                <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-900"
                >
                Password
                </label>
                <div className="mt-2">
                <input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                />
                </div>
            </div>

            <div>
                <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-md hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                Sign in
                </button>
            </div>
            </form>
        </div>
        </section>
    );
}
