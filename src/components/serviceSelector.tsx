'use client';

import React, { useEffect, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Service } from '@/lib/types';
import { base_url, service_url } from '@/lib/configs';

type Props = {
    selectedServiceId: string;
    onChange: (
        serviceId: string,
        minOrder: number,
        maxOrder: number,
        rate: number
    ) => void;
    selectedPlatform: string;
    selectedEngagementType: string;
    };

type ServicesByCategory = {
    [category: string]: Service[];
    };

const ServiceSelector: React.FC<Props> = ({
    selectedServiceId,
    onChange,
    selectedPlatform,
    selectedEngagementType,
    }) => {
    const [services, setServices] = useState<Service[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchServices = async () => {
        try {
            const res = await fetch(`${base_url}/${service_url}?maximize=1`);
            const data = await res.json();

            // console.log(data)

            if (Array.isArray(data.message)) {
            setServices(data.message);
            } else {
            console.error("Invalid service response:", data);
            setServices([]);
            }
        } catch (err) {
            console.error('Failed to fetch services:', err);
        } finally {
            setLoading(false);
        }
        };

        fetchServices();
    }, []);

    const filteredServices = services.filter(
        (s) =>
        s.platform === selectedPlatform &&
        s.service_category === selectedEngagementType
    );

    const deduplicatedServices = Array.from(
        new Map(
        filteredServices.map((s) => [
            `${s.reference_service_code}-${s.platform}-${s.service_category}`,
            s,
        ])
        ).values()
    );

    const groupByCategory = (services: Service[]): ServicesByCategory => {
        return services.reduce((acc: ServicesByCategory, service) => {
        const category = service.service_category || '';
        if (!acc[category]) acc[category] = [];
        acc[category].push(service);
        return acc;
        }, {});
    };

    const groupedServices = groupByCategory(deduplicatedServices);

    return (
        <div>
        <label
            htmlFor="selectedServiceId"
            className="block text-sm font-medium text-gray-900"
        >
            Preferred Service
        </label>
        <div className="mt-2 relative">
            <select
            id="selectedServiceId"
            name="selectedServiceId"
            value={selectedServiceId}
            onChange={(e) => {
                const selected = services.find((s) => s.id === e.target.value);
                if (selected) {
                console.log('Selected Service:', selected);
                onChange(
                    selected.id,
                    Number(selected.min_order) || 0,
                    Number(selected.max_order) || 0,
                    Number(selected.rate) || 0
                );
                }
            }}
            className="appearance-none w-full rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
            required
            >
            <option value="">Select a service</option>
            {Object.entries(groupedServices).map(([category, services]) => (
                <optgroup key={category} label={category}>
                {services.map((service) => (
                    <option key={service.id} value={service.id}>
                    {`${service.platform} ${service.service_category} @$${service.rate}/${service.max_order}`}
                    </option>
                ))}
                </optgroup>
            ))}
            </select>
            <ChevronDownIcon className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 size-5 text-gray-500" />
        </div>
        {loading && (
            <p className="text-sm text-gray-500 mt-1">Loading services...</p>
        )}
        </div>
    );
    };

export default ServiceSelector;
