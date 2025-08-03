import Image from "next/image";

export default function Footer(){
    return(
        <div>
            <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            >
            <Image
                aria-hidden
                src="/globe.svg"
                alt="Globe icon"
                width={16}
                height={16}
            />
            Chapchap solutions &copy; {new Date().getFullYear()}
            </a>
        </div>
    )
}