'use client'

import Image from "next/image";
import Badge from "@/components/ui/Badge";
import { AtIcon, PhoneCallIcon } from "@phosphor-icons/react";

export default function ContactCard() {
    return (
        <div className="flex flex-col h-full gap-6 justify-between bg-blue-50 p-8 rounded-xl">

            {/* Header */}
            <div className="flex items-center justify-between">
                <Image
                    src="/ay-logo.svg"
                    alt="Andres Yepez"
                    width={60}
                    height={60}
                />

                <ul className="flex items-center gap-4 text-sm text-gray-600">
                    <li>
                        <a href="#" className="hover:text-black transition">
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-black transition">
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-black transition">
                            Instagram
                        </a>
                    </li>
                </ul>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-semibold">
                    Do you have a project or opportunity in mind?
                </h3>
                <p
                    className="
        text-gray-600
        text-base
        leading-relaxed
        max-w-full
        sm:max-w-md
        lg:max-w-lg
    "
                >
                    If you want to chat, you can write to me using the form, send me an email,
                    or call me on the phone. You can also follow me on social media and stay in touch.
                </p>

            </div>

            {/* Contact info */}
            <div className="flex gap-6">

                {/* Call */}
                <a
                    href="tel:+573126036838"
                    className="
            flex items-center gap-4
            cursor-pointer
            group
        "
                >
                    <Badge
                        text=""
                        bgColor="bg-white"
                        borderColor="border-none"
                        icon={<PhoneCallIcon size={18} />}
                        className="
                w-10 h-10 flex items-center justify-center
                transition-transform
                group-hover:scale-105
            "
                    />
                    <div className="flex flex-col text-sm">
                        <span className="text-gray-500">Call me</span>
                        <span className="font-medium text-gray-800 group-hover:underline">
                            +57 312 603 6838
                        </span>
                    </div>
                </a>

                {/* Email */}
                <a
                    href="mailto:andresyepez@gmail.com"
                    className="
            flex items-center gap-4
            cursor-pointer
            group
        "
                >
                    <Badge
                        text=""
                        bgColor="bg-white"
                        borderColor="border-none"
                        icon={<AtIcon size={18} />}
                        className="
                w-10 h-10 flex items-center justify-center
                transition-transform
                group-hover:scale-105
            "
                    />
                    <div className="flex flex-col text-sm">
                        <span className="text-gray-500">Send me an email</span>
                        <span className="font-medium text-gray-800 group-hover:underline">
                            andresyepez@gmail.com
                        </span>
                    </div>
                </a>

            </div>

        </div>
    );
}
