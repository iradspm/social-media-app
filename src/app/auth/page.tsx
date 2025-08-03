'use client'

import Header from "@/components/footerx";
import Login from "../../components/login";
import Footer from "@/components/footer";
import LandingPage from "@/components/navigation";

export default function Home() {
    return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
            <div>
                <div><LandingPage/></div>
                <div>
                    <Login/>
                </div>
            </div>
        </main>
        <footer className="fixed bottom-0 left-0 w-full shadow bg-white z-50 flex gap-[24px] flex-wrap items-center justify-center p-4">
            <Header/>
            <Footer/>
        </footer>
    </div>
    );
}
