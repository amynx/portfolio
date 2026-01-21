'use client';

import { ReactNode } from "react";
import Badge from "@/components/ui/Badge";

/* ────────────────────────────────
   Types
──────────────────────────────── */

type CardHeaderBadge = {
    icon: ReactNode;
    number: string; // "01", "02", etc.
};

type CardProps = {
    badge: CardHeaderBadge;
    title: string;
    description: string;
    accentColor: string;
};

/* ────────────────────────────────
   Component
──────────────────────────────── */

export default function Card({
    badge,
    title,
    description,
    accentColor,
}: CardProps) {
    return (
        <article
            style={{ "--card-accent": accentColor } as React.CSSProperties}
            className="
        relative
        flex flex-col
        w-full max-w-[400px]
        rounded-xl
        border border-gray-200
        bg-white
        p-10
        overflow-hidden
      "
        >
            {/* ───── Gradient overlay ───── */}
            <div
                aria-hidden
                className="
          pointer-events-none
          absolute inset-x-0 top-0
          h-full
          bg-gradient-to-b
          from-[var(--card-accent)]/15
          to-white
        "
            />

            <div className="relative z-10 flex flex-col gap-40">
                {/* ───── Header ───── */}
                <header className="flex items-start justify-between">
                    {/* Icon badge */}
                    <Badge
                        text=""
                        icon={badge.icon}
                        bgColor="bg-white"
                        borderColor="border-none"
                        className="items-center justify-center w-10 h-10 text-gray-500"
                    />


                    {/* Number */}
                    <span
                        className="
              text-8xl
              font-semibold
              leading-15
              text-white
              select-none
              text-shadow-xs/5
            "
                    >
                        {badge.number}
                    </span>
                </header>

                {/* ───── Content ───── */}
                <div className="flex flex-col gap-3 select-none">
                    <h3 className="text-xl font-semibold text-text-primary">
                        {title}
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>
        </article>
    );
}
