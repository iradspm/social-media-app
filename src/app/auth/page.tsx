'use client'

import Header from "@/components/footerx";
import Login from "../../components/login";
import Footer from "@/components/footer";
import LandingPage from "@/components/navigation";
import ServiceImage from "@/components/loginLeft";
import ServiceImageRight from "@/components/loginRight";

export default function Home() {
    return (
        <div className="min-h-screen w-full font-sans bg-gradient-to-br from-white-50 via-white-50 to-white-100 text-gray-800">
            <LandingPage />
            <main className="max-w-7xl mx-auto px-4 sm:px-10 py-20 flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-3 items-stretch">
                    <div className="h-full"><ServiceImage /></div>
                    <div className="h-full"><Login /></div>
                    <div className="h-full"><ServiceImageRight /></div>
                </div>
            </main>
            <footer className="w-full shadow bg-white z-50 flex gap-2 flex-wrap items-center justify-center p-6 border-t border-gray-200">
                <Header />
                <Footer />
            </footer>
        </div>
    );
}
