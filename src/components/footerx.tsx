'use client';
import Image from "next/image";

export default function Header() {
    return (
        <div className="font-sans flex items-center justify-center gap-3 px-4 py-3 mt-4 text-sm sm:text-base w-full">
        
        {/* Instagram */}
        <a
            className="flex items-center gap-1 hover:underline hover:underline-offset-2"
            href="#"
            target="_self"
            rel="noopener noreferrer"
        >
            <Image
            aria-hidden
            src="/ig.svg"
            alt="Instagram"
            width={14}
            height={14}
            />
            <span>
            In
            <span className="text-red-300 text-sm">S</span>
            <span className="text-red-300 text-xs">ta</span>
            <span className="text-red-500 text-sm">G</span>gram
            </span>
        </a>

        {/* Social Icons */}
        <div className="flex items-center gap-2">
            {[
            { href: "#", src: "/fb.svg", alt: "Facebook" },
            { href: "#", src: "/twitter.svg", alt: "Twitter" },
            { href: "#", src: "/tiktok.svg", alt: "TikTok" },
            ].map(({ href, src, alt }, index) => (
            <a
                key={index}
                href={href}
                target="_self"
                rel="noopener noreferrer"
                className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
            >
                <Image
                aria-hidden
                src={src}
                alt={alt}
                width={14}
                height={14}
                />
            </a>
            ))}

            {/* YouTube */}
            <a
            className="flex items-center gap-1 hover:underline hover:underline-offset-2"
            href="#"
            target="_self"
            rel="noopener noreferrer"
            >
            <Image
                aria-hidden
                src="/yt.svg"
                alt="YouTube"
                width={14}
                height={14}
            />
            <span>
                Yo
                <span className="text-red-300 text-xs">u</span>
                <span className="text-red-500 text-sm">T</span>ube
            </span>
            </a>
        </div>
        </div>
    );
    }
