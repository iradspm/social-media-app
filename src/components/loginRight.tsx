"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function ServiceImageRight() {
    return (
        <section className="w-full bg-gradient-to-r from-white-100 via-white-100 to-white-100 py-12 px-6">
            <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm/2 flex flex-col items-center gap-6">
                <motion.h2
                    animate={{
                        opacity: [0.5, 1, 1, 0.5],
                        y: [20, 0, 0, 20],
                        color: ["#1f2937", "#0f766e", "#7c3aed", "#1f2937"],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="text-2xl font-bold text-center"
                >
                    Our Competitive Pricing Models for Social Media Engagement
                </motion.h2>

                <p className="text-gray-600 text-center max-w-xl h-[60px]">
                    <TypeAnimation
                        sequence={[
                            "Explore our pricing models for each service we offer for followers,views, and likes on TikTok, InstaGram and YouTube.",
                            10000, // delay after typing
                            "", // clear
                            500, // pause before retyping
                        ]}
                        speed={40}
                        repeat={Infinity}
                    />
                </p>
            </div>
        </section>
    );
}
