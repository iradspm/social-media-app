'use client'

import Order from "@/components/order";
import Footer from "@/components/footer";
import Header from "@/components/footerx";
import LandingPage from "@/components/navigation";


export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {/* {user && (
            <div className="text-sm text-gray-600 self-start">
              Logged in as <span className="font-semibold">{user.full_name}</span>
            </div>
        )} */}
        <div><LandingPage/></div>
        <Order/>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <Header/>
        <Footer/>
      </footer>
    </div>
  );
}
