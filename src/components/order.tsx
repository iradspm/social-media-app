'use client';

import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import ServiceSelector from './serviceSelector';

import { base_url, orders_url } from '@/lib/configs';

type OrderData = {
    link: string;
    platform: string;
    engagementType: string;
    engagementNumber: number;
    selectedServiceId: string;
    minOrder?: number;
    maxOrder?: number;
    rate?: number;
    };


export default function Order() {
    const [linkFocused, setLinkFocused] = useState(false);
    const [responseMessage, setResponseMessage] = useState<string | null>(null);
    const [responseStatus, setResponseStatus] = useState<'success' | 'error' | null>(null);

    const [formData, setFormData] = useState<OrderData>({
        link: '',
        platform: 'Instagram',
        engagementType: 'Followers',
        engagementNumber: 0,
        selectedServiceId: '',
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
        ) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: name === 'engagementNumber' ? Number(value) : value,
        }));
        };



    const processOrderRequest = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
        console.log("Submitted data", formData)
        const response = await fetch(`${base_url}/${orders_url!}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        const res = await response.json();

        if (!res.ok) throw new Error('Request failed');

        setFormData({
            link: '',
            platform: 'Instagram',
            engagementType: 'Followers',
            engagementNumber: 0,
            selectedServiceId: '',
        });

        setResponseMessage('Order placed successfully!');
        setResponseStatus('success');
        } catch (error) {
        console.error('Submit error:', error);
        setResponseMessage('Failed to place order. Please try again.');
        setResponseStatus('error');
        }

        setTimeout(() => {
        setResponseMessage(null);
        }, 5000);
    };

    return (
        <form onSubmit={processOrderRequest}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {/* Handle */}
            <div className="sm:col-span-3">
            <label htmlFor="link" className="block text-sm font-medium text-gray-900">
                Social Media Handle
            </label>
            <input
                id="link"
                name="link"
                type="text"
                value={formData.link}
                onChange={handleChange}
                onFocus={() => setLinkFocused(true)}
                onBlur={() => setLinkFocused(false)}
                placeholder={linkFocused ? '' : 'groovy_kicks.ke'}
                className="mt-2 w-full rounded-md border border-gray-300 py-1.5 px-3 text-base text-gray-900 outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 sm:text-sm"
                required
            />
            </div>

            {/* Platform */}
            <div>
            <label htmlFor="platform" className="block text-sm font-medium text-gray-900">
                Platform
            </label>
            <div className="relative mt-2">
                <select
                id="platform"
                name="platform"
                value={formData.platform}
                onChange={handleChange}
                className="appearance-none w-full rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                required
                >
                <option value="Instagram">Instagram</option>
                <option value="TikTok">TikTok</option>
                </select>
                <ChevronDownIcon className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 size-5 text-gray-500" />
            </div>
            </div>

            {/* Engagement Type */}
            <div>
            <label htmlFor="engagementType" className="block text-sm font-medium text-gray-900">
                Engagement Type
            </label>
            <div className="relative mt-2">
                <select
                id="engagementType"
                name="engagementType"
                value={formData.engagementType}
                onChange={handleChange}
                className="appearance-none w-full rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                required
                >
                <option value="Followers">Followers</option>
                <option value="Likes">Likes</option>
                <option value="Comments">Comments</option>
                </select>
                <ChevronDownIcon className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 size-5 text-gray-500" />
            </div>
            </div>

            {/* Services */}
            <ServiceSelector
                selectedServiceId={formData.selectedServiceId}
                selectedPlatform={formData.platform}
                selectedEngagementType={formData.engagementType}
                onChange={(id, minOrder, maxOrder, rate) => {
                setFormData((prev) => ({
                    ...prev,
                    selectedServiceId: id,
                    engagementNumber: minOrder,
                    minOrder,
                    maxOrder,
                    rate,
                }));
                }}
                />


            {/* Engagement Number */}
            <div>
            <label htmlFor="engagementNumber" className="block text-sm font-medium text-gray-900">
                Engagement Minimum Number
            </label>
            <input
                id="engagementNumber"
                name="engagementNumber" 
                type="number"
                min={1}
                value={formData.engagementNumber}
                onChange={handleChange}
                className="mt-2 appearance-none w-full rounded-md bg-white py-1.5 px-3 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                required
            />
            </div>

            {/* Submit */}
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
                responseStatus === 'success'
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
            }`}
            >
            {responseMessage}
            </div>
        )}
        </form>
    );
    }
