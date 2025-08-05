'use client';

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
            <main className="max-w-7xl mx-auto px-2 sm:px-10 py-20 flex flex-col gap-12">
                
                {/* 🔵 Section 1: Login */}
                <section className="grid grid-cols-1 md:grid-cols-3 items-stretch">
                    <div className="h-full"><ServiceImage /></div>
                    <div className="h-full"><Login /></div>
                    <div className="h-full"><ServiceImageRight /></div>
                </section>

                {/* Section 2: Features */}
                <section className="py-10 px-4 bg-white rounded-lg shadow">
                    <h2 className="text-2xl font-semibold text-center mb-6">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">Legit Services</h3>
                            <p className="text-gray-600">Secure and lightning-fast access to your account.</p>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">Pocket Friendly</h3>
                            <p className="text-gray-600">Cheap and affordable services.</p>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                            <p className="text-gray-600">Always here to help you whenever you need it.</p>
                        </div>
                    </div>
                </section>

                
                {/* Section 3: Testimonials */}
                <section className="text-center py-10 px-4 bg-gray-50 rounded-lg shadow">
                    <h2 className="text-2xl font-semibold mb-6">Our Testimonials</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="p-6 border rounded shadow-sm bg-white">
                            <p className="text-gray-600 italic">"Amazing service, it changed how we work."</p>
                            <span className="block mt-4 font-semibold">— Alex, Developer</span>
                        </div>
                        <div className="p-6 border rounded shadow-sm bg-white">
                            <p className="text-gray-600 italic">"Highly recommend to any business."</p>
                            <span className="block mt-4 font-semibold">— Maria, Designer</span>
                        </div>
                        <div className="p-6 border rounded shadow-sm bg-white">
                            <p className="text-gray-600 italic">"Support team is top-notch!"</p>
                            <span className="block mt-4 font-semibold">— James, CEO</span>
                        </div>
                    </div>
                </section>

            </main>

            <footer className="w-full shadow bg-white z-50 flex gap-2 flex-wrap items-center justify-center p-6 border-t border-gray-200">
                <Header />
                <Footer />
            </footer>
        </div>
    );
}
