"use client";

import { useEffect } from "react";
import Image from "next/image";
import {
    XIcon,
    GithubLogoIcon,
    GlobeIcon,
    CaretLeftIcon,
    ArrowUpRightIcon,
    CalendarBlankIcon,
    BriefcaseIcon,
    UserIcon,
} from "@phosphor-icons/react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import SectionInner from "@/components/layout/SectionInner";

/* -------------------------------------------------------------------------- */
/*                                   TYPES                                    */
/* -------------------------------------------------------------------------- */

export interface CaseStudyProject {
    /* Header info */
    logo: string;
    projectName: string;
    title: string;
    description: string; // Short description used in header
    sector: string;
    role: { text: string; icon?: React.ReactNode };

    /* Meta info */
    client: string;
    date: string;

    /* Actions */
    productionUrl?: string;
    githubUrl?: string;

    /* Styling */
    accentColor: string;

    /* Detailed Content */
    images: string[];
    narrative: {
        context: string;
        problem: string;
        solution: string;
        result: string;
    };
    stack: { name: string; icon?: React.ReactNode }[];
}

interface CaseStudyProps {
    project: CaseStudyProject;
    onClose: () => void;
}

/* -------------------------------------------------------------------------- */
/*                                 COMPONENT                                  */
/* -------------------------------------------------------------------------- */

export default function CaseStudy({ project, onClose }: CaseStudyProps) {

    // Lock body scroll when open
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, []);

    return (
        <div className="fixed inset-0 z-50 flex flex-col bg-white overflow-y-auto animate-in fade-in slide-in-from-bottom-4 duration-300">

            {/* ───── Top Navigation ───── */}
            <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-gray-100 bg-white/80 px-4 py-3 backdrop-blur-md md:px-8">
                <button
                    onClick={onClose}
                    className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-black transition-colors"
                >
                    <CaretLeftIcon size={18} />
                    Back to projects
                </button>

                <button
                    onClick={onClose}
                    className="rounded-full bg-gray-100 p-2 text-gray-500 hover:bg-gray-200 hover:text-black transition-colors"
                    aria-label="Close case study"
                >
                    <XIcon size={20} />
                </button>
            </nav>

            {/* ───── Content ───── */}
            <main className="flex-1 pb-20">
                <SectionInner className="relative pt-10 md:pt-16">

                    {/* 1. Header */}
                    <header className="mx-auto max-w-4xl text-center">
                        <div className="mb-6 flex justify-center">
                            <div className="relative h-16 w-16 overflow-hidden rounded-xl bg-gray-50 p-2 sm:h-20 sm:w-20">
                                <Image
                                    src={project.logo}
                                    alt={project.projectName}
                                    fill
                                    className="object-contain p-2"
                                />
                            </div>
                        </div>

                        <h1 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
                            {project.title}
                        </h1>

                        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
                            {project.description}
                        </p>

                        {/* Meta Info Grid */}
                        <div className="mx-auto mb-10 flex max-w-3xl flex-wrap justify-center gap-4 sm:gap-8 rounded-2xl bg-gray-50 p-6 sm:p-8">
                            <div className="flex flex-col items-center gap-2 text-center">
                                <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gray-400">
                                    <UserIcon size={14} /> Client
                                </span>
                                <span className="font-medium text-gray-900">{project.client}</span>
                            </div>
                            <div className="bg-gray-200 w-px h-10 hidden sm:block"></div>
                            <div className="flex flex-col items-center gap-2 text-center">
                                <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gray-400">
                                    <BriefcaseIcon size={14} /> Role
                                </span>
                                <span className="font-medium text-gray-900">{project.role.text}</span>
                            </div>
                            <div className="bg-gray-200 w-px h-10 hidden sm:block"></div>
                            <div className="flex flex-col items-center gap-2 text-center">
                                <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gray-400">
                                    <CalendarBlankIcon size={14} /> Date
                                </span>
                                <span className="font-medium text-gray-900">{project.date}</span>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-wrap justify-center gap-4">
                            {project.productionUrl && (
                                <Button
                                    href={project.productionUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    text="Visit Website"
                                    icon={<ArrowUpRightIcon size={18} weight="bold" />}
                                    iconPosition="right"
                                    bgColor="bg-black"
                                    textColor="text-white"
                                    borderRadius="rounded-full"
                                />
                            )}
                            {project.githubUrl && (
                                <Button
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    text="View Code"
                                    icon={<GithubLogoIcon size={18} />}
                                    iconPosition="left"
                                    bgColor="bg-white"
                                    textColor="text-gray-700"
                                    borderColor="border-gray-200"
                                    borderRadius="rounded-full"
                                />
                            )}
                        </div>
                    </header>


                    {/* 2. Visual Content (Images) */}
                    <section className="my-16 space-y-6 md:my-24">
                        {project.images.map((imageSrc, index) => (
                            <div
                                key={index}
                                className={`relative w-full overflow-hidden rounded-xl border border-gray-100 bg-gray-50 shadow-sm ${index === 0 ? 'aspect-video' : 'aspect-[16/10]'}`}
                            >
                                <Image
                                    src={imageSrc}
                                    alt={`Project screenshot ${index + 1}`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 80vw"
                                />
                            </div>
                        ))}
                    </section>


                    {/* 3. Narrative & Context */}
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">

                        <div className="lg:col-span-8 space-y-12">
                            <section>
                                <h3 className="mb-4 text-xl font-bold text-gray-900">The Context</h3>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {project.narrative.context}
                                </p>
                            </section>

                            <section>
                                <h3 className="mb-4 text-xl font-bold text-gray-900">The Problem</h3>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {project.narrative.problem}
                                </p>
                            </section>

                            <section>
                                <h3 className="mb-4 text-xl font-bold text-gray-900">The Solution</h3>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {project.narrative.solution}
                                </p>
                            </section>

                            <section>
                                <h3 className="mb-4 text-xl font-bold text-gray-900">The Result</h3>
                                <div className="border-l-4 border-black pl-6 py-2 bg-gray-50 rounded-r-lg">
                                    <p className="text-gray-800 font-medium leading-relaxed text-lg italic">
                                        "{project.narrative.result}"
                                    </p>
                                </div>
                            </section>
                        </div>

                        {/* 4. Sidebar: Stack */}
                        <aside className="lg:col-span-4 space-y-8">
                            <div className="sticky top-24 rounded-2xl bg-gray-50 p-6 md:p-8">
                                <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-gray-900">
                                    Tech Stack
                                </h3>

                                <div className="flex flex-wrap gap-2">
                                    {project.stack.map((tech, idx) => (
                                        <Badge
                                            key={idx}
                                            text={tech.name}
                                            icon={tech.icon}
                                            bgColor="bg-white"
                                            borderColor="border-gray-200"
                                            className="text-sm py-1 px-3 shadow-sm text-gray-600"
                                        />
                                    ))}
                                </div>
                            </div>
                        </aside>

                    </div>

                </SectionInner>
            </main>
        </div>
    );
}
