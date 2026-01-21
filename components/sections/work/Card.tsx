'use client'
import Image from "next/image";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { ReactNode } from "react";
import { ArrowRightIcon } from "@phosphor-icons/react";

/* ────────────────────────────────
   Types
──────────────────────────────── */

type Tag = {
    text: string;
    icon?: ReactNode;
};

type ProjectCardProps = {
    /* Header */
    logo: string;
    projectName: string;
    sector: string;
    role: {
        text: string;
        icon?: ReactNode;
    };

    /* Content */
    tags: Tag[];
    title: string;
    description: string;

    /* Visual */
    accentColor: string; // 👈 nuevo prop para el degradado

    /* CTA */
    onButtonClick?: () => void;
};

/* ────────────────────────────────
   Component
──────────────────────────────── */

export default function Card({
    logo,
    projectName,
    sector,
    role,
    tags,
    title,
    description,
    accentColor,
    onButtonClick,
}: ProjectCardProps) {
    return (
        <article
            style={{ "--card-accent": accentColor } as React.CSSProperties}
            className="
    relative
    flex h-full flex-col justify-between

    w-full
    max-w-[400px]

    rounded-lg
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
    h-[100%]
    bg-gradient-to-b
    from-[var(--card-accent)]/5
    to-white
  "
            />

            {/* ───── Content wrapper (keeps content above gradient) ───── */}
            <div className="relative z-10 flex h-full flex-col justify-between gap-40">

                {/* ───── Header ───── */}
                <header className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">

                        <Image
                            src={logo}
                            alt={projectName}
                            width={50}
                            height={50}
                        />


                        <div className="leading-tight">
                            <p className="text-md font-semibold text-text-primary">
                                {projectName}
                            </p>
                            <p className="text-xs font-medium text-gray-500">
                                {sector}
                            </p>
                        </div>
                    </div>

                    <Badge
                        text={role.text}
                        icon={role.icon}
                        className="text-xs font-semibold tracking-wider text-gray-500"
                        bgColor="bg-white"
                        borderColor="border-none"
                    />
                </header>

                <div className="flex flex-col gap-4">

                    {/* ───── Content ───── */}
                    <div className="flex flex-col">

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag, index) => (
                                <Badge
                                    key={index}
                                    text={tag.text}
                                    icon={tag.icon}
                                    className="text-xs font-semibold text-gray-500 tracking-wider"
                                    bgColor="bg-white"
                                    borderColor="border-none"
                                />
                            ))}
                        </div>
                        {/* Title */}
                        <h3 className="text-2xl font-semibold mt-2">
                            {title}
                        </h3>

                        {/* Description */}
                        <p className="text-md mt-2">
                            {description}
                        </p>
                    </div>

                    {/* ───── CTA ───── */}
                    <div className="flex justify-end">
                        <Button
                            text="View case"
                            bgColor="bg-neutral-800"
                            textColor="text-white"
                            borderColor="border-neutral-800"
                            borderRadius="rounded-lg"
                            icon={<ArrowRightIcon size={16} />}
                            iconPosition="right"
                            onClick={onButtonClick}
                        />
                    </div>
                </div>

            </div>
        </article>
    );
}
