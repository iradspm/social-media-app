import Image from "next/image";

export default function ServiceImage() {
    return (
        <section className="w-full bg-gradient-to-r from-white-100 via-white-100 to-white-100 py-12 px-6">
            <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm/2 flex flex-col items-center gap-6">
                <h2 className="text-2xl font-bold text-gray-800 text-center">
                    Our Services
                </h2>
                <p className="text-gray-600 text-center max-w-xl">
                    Explore our wide range of solutions designed to help market through social media platforms.
                </p>
                <Image
                    src="/services.png"
                    width={500}
                    height={500}
                    alt="Place order"
                    className="rounded-lg"
                />
            </div>
        </section>
    );
}
