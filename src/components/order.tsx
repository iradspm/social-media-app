import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const orders_url = process.env.NEXT_PUBLIC_ORDER_URL;

type OrderData = {
    link: string;
    platform: string;
    engagementType: string;
    engagementNumber: number;
    };
export default function Order() {

    const [linkFocused, setLinkFocused] = useState<boolean>(false);
    const [responseMessage, setResponseMessage] = useState<string | null>(null);
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [responseStatus, setResponseStatus] = useState<"success" | "error" | null>(null);

    const [formData, setOrderData] = useState <OrderData>(
        {
            link: "",
            platform: "Instagram",
            engagementType: "Followers",
            engagementNumber: 20
        });
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
        ) => {
            const { name, value } = e.target;
            setOrderData((prev) => ({ ...prev, [name]: value }));
        };

    const processOrderRequest = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
        console.log("Sending to:", orders_url);
        const res = await fetch(`${orders_url!}`,{
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (!res.ok) throw new Error("Request failed");
        const result = await res.json();
        console.log("Order response:", result);
        console.log("Order submitted successfully!");
        setOrderData({
                link: "",
                platform: "Instagram",
                engagementType: "Followers",
                engagementNumber: 20,
            });
        setIsSuccess(true);
        setResponseMessage("Order placed successfully!");
        setResponseStatus("success");
        } catch (error) {
        console.error("Submit error:", error);
        console.log("Failed to submit order.");
        setIsSuccess(false);
        setResponseMessage("Failed to place order. Please try again.");
        setResponseStatus("error");
        }
     // Clear message after 5 seconds
    setTimeout(() => {
        setResponseMessage(null);
    }, 5000);
    };
    return (
        <form onSubmit={processOrderRequest}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {/* Link */}
            <div className="sm:col-span-3">
            <label htmlFor="link" className="block text-sm font-medium text-gray-900">
                Social Media Handle
            </label>
            <div className="mt-2">
                <input
                type="text"
                id="link"
                name="link"
                value={formData.link}
                onChange={handleChange}
                onFocus={() => setLinkFocused(true)}
                onBlur={() => setLinkFocused(false)}
                //https://www.instagram.com/groovy_kicks.ke/
                placeholder={linkFocused ? "" : "groovy_kicks.ke"}
                className="w-full rounded-md border border-gray-300 py-1.5 px-3 text-base text-gray-900 outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 sm:text-sm"
                required
                />
            </div>
            </div>

            {/* Platform */}
            <div>
            <label htmlFor="platform" className="block text-sm font-medium text-gray-900">
                Platform
            </label>
            <div className="mt-2 grid grid-cols-1 relative">
                <select
                id="platform"
                name="platform"
                value={formData.platform}
                onChange={handleChange}
                className="appearance-none w-full rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                required
                >
                <option value="">Select platform</option>
                <option value="Instagram">Instagram</option>
                <option value="TikTok">TikTok</option>
                </select>
                <ChevronDownIcon
                aria-hidden="true"
                className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 size-5 text-gray-500 sm:size-4"
                />
            </div>
            </div>

            {/* Engagement Type */}
            <div>
                <label htmlFor="engagement_type" className="block text-sm font-medium text-gray-900">
                    Engagement Type
                </label>
                <div className="mt-2 grid grid-cols-1 relative">
                    <select
                    id="engagement_type"
                    name="engagementType"
                    value={formData.engagementType}
                    onChange={handleChange}
                    className="appearance-none w-full rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                    required
                    >
                    <option value="">Select type</option>
                    <option value="Followers">Followers</option>
                    {/* <option value="Views">Views</option>
                    <option value="Likes">Likes</option> */}
                    </select>
                    <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 size-5 text-gray-500 sm:size-4"
                    />
                </div>
            </div>

            {/* Quantity */}
            <div>
                <label htmlFor="engagement_type" className="block text-sm font-medium text-gray-900">
                    Engagement Number
                </label>
                <div className="mt-2 grid grid-cols-1 relative">
                    <input
                    id="engagement_number"
                    type="number"
                    name="engagementNumber"
                    value={formData.engagementNumber}
                    onChange={handleChange}
                    className="appearance-none w-full rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                    required
                    />
                </div>
            </div>

            {/* Submit Button */}
            <div className="sm:col-span-3">
            <button
                type="submit"
                className="mt-4 w-full sm:w-fit rounded-md bg-indigo-600 px-6 py-2.5 text-white text-sm font-medium hover:bg-indigo-700 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
            >
                Place Order
            </button>
            </div>
        </div>
            {responseMessage && (
                <div
                    className={`mt-4 rounded-md px-4 py-2 text-sm font-medium ${
                        responseStatus === "success"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                    }`}
                >
                    {responseMessage}
                </div>
            )}
        </form>
    );
    }
