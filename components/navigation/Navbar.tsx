"use client";

import { useState } from "react";
import Image from "next/image";
import { EqualsIcon, XIcon } from "@phosphor-icons/react";

const NAV_ITEMS = ["Work", "Profile", "Services", "Insights", "Contact"];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className=" fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[1600px] px-8 bg-gray-50 z-50">

            <div className="flex items-center justify-between py-8">
                {/* Logo */}
                <Image src="/ay-logo.svg" alt="Logo" width={60} height={50} />

                {/* Desktop navigation */}
                <nav className="hidden lg:block">
                    <ul className="flex items-center gap-8">
                        {NAV_ITEMS.map((item) => (
                            <li
                                key={item}
                                className="cursor-pointer text-sm font-medium transition-opacity hover:opacity-80"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile hamburger */}
                <button
                    className="lg:hidden"
                    aria-label="Abrir menú"
                    aria-expanded={isOpen}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <XIcon size={24} weight="bold" />
                    ) : (
                        <EqualsIcon size={24} weight="bold" />
                    )}
                </button>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <nav className="absolute top-full left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-[1600px] rounded-xl bg-white shadow-md lg:hidden">
                    <ul className="flex flex-col gap-[var(--space-4)] p-[var(--space-6)]">
                        {NAV_ITEMS.map((item) => (
                            <li
                                key={item}
                                className="cursor-pointer text-base font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    );
}
