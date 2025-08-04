'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
    Dialog,
    DialogPanel,
    PopoverGroup
    } from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
    } from '@heroicons/react/24/outline'

export default function LandingPage() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-white fixed top-0 left-0 w-full z-50 shadow">
        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
            <div className="flex lg:flex-1">
                <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
                    <Image
                        aria-hidden
                        src="/globe.svg"
                        alt="Globe icon"
                        width={16}
                        height={16}
                    />
                    <span className="text-base font-semibold text-gray-900">Chap Chap Solutions</span>
                </a>

            </div>
            <div className="flex lg:hidden">
                <button
                    type="button"
                    onClick={() => setMobileMenuOpen(true)}
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                >
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon aria-hidden="true" className="size-6" />
                </button>
            </div>
            <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                <a href="#" className="text-sm/6 font-semibold text-gray-900">
                    Features
                </a>
                <a href="#" className="text-sm/6 font-semibold text-gray-900">
                    Marketplace
                </a>
                <a href="#" className="text-sm/6 font-semibold text-gray-900">
                    Services
                </a>
            </PopoverGroup>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <a href="#" className="text-sm/6 font-semibold text-gray-900">
                    Calculator <span aria-hidden="true">&rarr;</span>
                </a>
            </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Chap Chap Solutions</span>
                <img
                    alt=""
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    className="h-8 w-auto"
                />
                </a>
                <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
            </div>
            <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                    <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                    Features
                    </a>
                    <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                    Marketplace
                    </a>
                    <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                    Services
                    </a>
                </div>
                <div className="py-6">
                    <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                    Calculator
                    </a>
                </div>
                </div>
            </div>
            </DialogPanel>
        </Dialog>
        </header>
    )
    }
