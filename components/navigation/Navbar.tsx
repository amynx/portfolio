"use client";

import { useState } from "react";
import Image from "next/image";
import { EqualsIcon, XIcon } from "@phosphor-icons/react";

const NAV_ITEMS = ["Work", "Profile", "Services", "Insights", "Contact"];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="relative">
            <div className="flex items-center justify-between py-[var(--space-6)] bg-[var(--color-gray-50)]">
                {/* Logo */}
                <Image src="/ay-logo.svg" alt="Logo" width={60} height={50} />

                {/* Desktop navigation */}
                <nav className="hidden lg:block">
                    <ul className="flex items-center gap-[var(--space-6)]">
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
                <nav className="absolute left-0 top-full w-full bg-white shadow-md lg:hidden">
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
