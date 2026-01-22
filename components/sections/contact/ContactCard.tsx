'use client'

import Image from "next/image";
import Badge from "@/components/ui/Badge";
import { AtIcon, PhoneCallIcon } from "@phosphor-icons/react";

export default function ContactCard() {
    return (
        <div
            className="
                flex flex-col h-auto justify-between
                gap-6
                bg-blue-50
                border border-gray-200
                rounded-xl
                p-6 lg:p-8 h-full
                overflow-hidden
            "
        >

            {/* Header */}
            <div className="flex items-center justify-between gap-4 min-w-0">

                <Image
                    src="/ay-logo.svg"
                    alt="Andres Yepez"
                    width={52}
                    height={52}
                    className="shrink-0"
                />

                <ul
                    className="
                        flex flex-wrap items-center gap-x-4 gap-y-2
                        text-sm text-gray-600
                        max-w-full
                    "
                >
                    <li>
                        <a href="#" className="hover:text-black transition whitespace-nowrap">
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-black transition whitespace-nowrap">
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-black transition whitespace-nowrap">
                            Instagram
                        </a>
                    </li>
                </ul>
            </div>


            {/* Content */}
            <div className="flex flex-col gap-3 min-w-0">
                <h3 className="text-xl sm:text-2xl font-semibold leading-snug max-w-full lg:max-w-[70%]">
                    Do you have a project or opportunity in mind?
                </h3>

                <p
                    className="
        text-gray-600
        text-sm sm:text-base
        leading-relaxed
        break-words
        max-w-full
        lg:max-w-[70%]
    "
                >
                    If you want to chat, you can write to me using the form, send me an email,
                    or call me on the phone. You can also follow me on social media and stay in touch.
                </p>

            </div>

            {/* Contact info */}
            <div className="flex flex-col gap-5 md:flex-row md:gap-8 min-w-0">

                {/* Call */}
                <a
                    href="tel:+573126036838"
                    className="
                        flex items-center gap-4
                        cursor-pointer
                        group
                        min-w-0
                    "
                >
                    <Badge
                        text=""
                        bgColor="bg-white"
                        borderColor="border-none"
                        icon={<PhoneCallIcon size={18} />}
                        className="
                            w-10 h-10
                            flex items-center justify-center
                            shrink-0
                            transition-transform
                            group-hover:scale-105
                        "
                    />
                    <div className="flex flex-col text-sm min-w-0">
                        <span className="text-gray-500">Call me</span>
                        <span
                            className="
                                font-medium text-gray-800
                                group-hover:underline
                                break-all
                            "
                        >
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
                        min-w-0
                    "
                >
                    <Badge
                        text=""
                        bgColor="bg-white"
                        borderColor="border-none"
                        icon={<AtIcon size={18} />}
                        className="
                            w-10 h-10
                            flex items-center justify-center
                            shrink-0
                            transition-transform
                            group-hover:scale-105
                        "
                    />
                    <div className="flex flex-col text-sm min-w-0">
                        <span className="text-gray-500">Send me an email</span>
                        <span
                            className="
                                font-medium text-gray-800
                                group-hover:underline
                                break-all
                            "
                        >
                            andresyepez@gmail.com
                        </span>
                    </div>
                </a>

            </div>
        </div>
    );
}
