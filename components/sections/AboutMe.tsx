"use client";

import { useEffect } from "react";
import Image from "next/image";
import {
    X,
    Briefcase,
    Target,
    Lightbulb,
    UsersThree,
    CheckCircle,
    Code,
    PaintBrush,
    Database,
    FadersHorizontal,
    GitMerge,
} from "@phosphor-icons/react";
import {
    SiNextdotjs,
    SiTypescript,
    SiReact,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiFigma,
    SiNodedotjs,
    SiGit,
    SiGithub,
    SiJest,
} from "react-icons/si";

import SectionInner from "@/components/layout/SectionInner";
import Badge from "@/components/ui/Badge";

/* -------------------------------------------------------------------------- */
/*                                   DATA                                     */
/* -------------------------------------------------------------------------- */

const EXPERIENCE = [
    {
        year: "2025",
        company: "Ateras",
        role: "CEO / Co-founder",
        description: "Leading the vision and strategy for custom software solutions."
    },
    {
        year: "2025",
        company: "Palmira y CIA S.A.S.",
        role: "Consultant",
        description: "Advising on digital transformation and process optimization."
    },
    {
        year: "2024",
        company: "Crear Colombia",
        role: "Quality Analyst (QA)",
        description: "Ensuring software quality and implementing QA methodologies."
    },
    {
        year: "2023",
        company: "Coomulcavisur",
        role: "Frontend Developer – Project",
        description: "Developed vital digital platforms for the cooperative sector."
    },
];

const WHY_ME = [
    {
        title: "Integral Product Vision",
        description: "Merging business goals, user experience, and technical feasibility into scalable solutions.",
        icon: <Target size={32} weight="duotone" className="text-blue-600" />,
    },
    {
        title: "Technical Leadership",
        description: "Leading teams with decisions grounded in analysis, impact, and technical viability.",
        icon: <UsersThree size={32} weight="duotone" className="text-purple-600" />,
    },
    {
        title: "Quality & Detail Focus",
        description: "High standards in design, code, and final experience, with rigorous attention to detail.",
        icon: <CheckCircle size={32} weight="duotone" className="text-green-600" />,
    },
    {
        title: "Effective Communication",
        description: "Translating between technical and non-technical stakeholders to align teams.",
        icon: <Lightbulb size={32} weight="duotone" className="text-yellow-600" />,
    },
];

const SKILLS = [
    {
        category: "Frontend",
        icon: <Code size={20} />,
        technologies: [
            { name: "React", icon: <SiReact size={14} /> },
            { name: "Next.js", icon: <SiNextdotjs size={14} /> },
            { name: "TypeScript", icon: <SiTypescript size={14} /> },
            { name: "JavaScript", icon: <SiJavascript size={14} /> },
            { name: "HTML5", icon: <SiHtml5 size={14} /> },
            { name: "CSS3", icon: <SiCss3 size={14} /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss size={14} /> },
        ],
    },
    {
        category: "UI / UX & Design",
        icon: <PaintBrush size={20} />,
        technologies: [
            { name: "Figma", icon: <SiFigma size={14} /> },
            { name: "Design Systems", icon: <PaintBrush size={14} /> },
        ],
    },
    {
        category: "Backend & APIs",
        icon: <Database size={20} />,
        technologies: [
            { name: "Node.js", icon: <SiNodedotjs size={14} /> },
            { name: "REST APIs", icon: <Database size={14} /> },
            { name: "SQL", icon: <Database size={14} /> },
            { name: "MySQL", icon: <Database size={14} /> },
        ],
    },
    {
        category: "Quality",
        icon: <CheckCircle size={20} />,
        technologies: [
            { name: "QA", icon: <CheckCircle size={14} /> },
            { name: "Functional Testing", icon: <SiJest size={14} /> },
        ],
    },
    {
        category: "Workflow",
        icon: <GitMerge size={20} />,
        technologies: [
            { name: "Git", icon: <SiGit size={14} /> },
            { name: "GitHub", icon: <SiGithub size={14} /> },
            { name: "CI/CD", icon: <FadersHorizontal size={14} /> },
            { name: "Agile", icon: <UsersThree size={14} /> },
        ],
    },
];

/* -------------------------------------------------------------------------- */
/*                                COMPONENT                                   */
/* -------------------------------------------------------------------------- */

interface AboutMeProps {
    onClose: () => void;
}

export default function AboutMe({ onClose }: AboutMeProps) {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, []);

    return (
        <div className="fixed inset-0 z-50 flex flex-col bg-white overflow-y-auto animate-in fade-in slide-in-from-bottom-4 duration-300">

            {/* ───── Navigation ───── */}
            <nav className="sticky top-0 z-50 flex items-center justify-end border-b border-gray-100 bg-white/80 px-4 py-3 backdrop-blur-md md:px-8">
                <button
                    onClick={onClose}
                    className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-200 hover:text-black transition-colors"
                >
                    Close <X size={18} />
                </button>
            </nav>

            <main className="flex-1 pb-20">
                <SectionInner className="pt-10 md:pt-16 space-y-24">

                    {/* 1. Header & Bio */}
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1 space-y-8">
                            <div>
                                <h1 className="text-4xl font-bold text-gray-900 mb-6">About Me</h1>
                                <p className="text-xl text-gray-600 leading-relaxed">
                                    I am a professional driven by technology, product excellence, and effective leadership. My focus is on creating meaningful digital products that solve real problems through clean code, strategic design, and human-centric processes.
                                </p>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                            <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-gray-100 shadow-xl bg-blue-50">
                                <Image
                                    src="/assets/images/andres-yepez-photo.svg"
                                    alt="Andres Yepez"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>


                    {/* 2. Experience */}
                    <section>
                        <div className="flex items-center gap-3 mb-10">
                            <Briefcase size={32} className="text-gray-900" />
                            <h2 className="text-3xl font-bold text-gray-900">Experience</h2>
                        </div>

                        <div className="relative border-l-2 border-gray-200 ml-3 space-y-12">
                            {EXPERIENCE.map((job, idx) => (
                                <div key={idx} className="relative pl-8 md:pl-12">
                                    {/* Dot */}
                                    <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-white bg-black shadow-sm"></div>

                                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{job.year} – {job.company}</h3>
                                    <div className="text-lg font-medium text-blue-600 mb-2">{job.role}</div>
                                    <p className="text-gray-600">{job.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>


                    {/* 3. Why Me? */}
                    <section>
                        <div className="flex items-center gap-3 mb-10">
                            <Target size={32} className="text-gray-900" />
                            <h2 className="text-3xl font-bold text-gray-900">Why Me?</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {WHY_ME.map((reason, idx) => (
                                <div key={idx} className="group rounded-2xl border border-gray-100 bg-gray-50 p-6 md:p-8 hover:border-gray-200 hover:shadow-md transition-all">
                                    <div className="mb-4 rounded-xl bg-white p-3 w-fit shadow-sm group-hover:scale-110 transition-transform">
                                        {reason.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{reason.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {reason.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>


                    {/* 4. Tools & Technologies */}
                    <section>
                        <div className="flex items-center gap-3 mb-10">
                            <Code size={32} className="text-gray-900" />
                            <h2 className="text-3xl font-bold text-gray-900">Tools & Technologies</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {SKILLS.map((skillGroup, idx) => (
                                <div key={idx} className="p-6 rounded-2xl border border-dashed border-gray-200">
                                    <div className="flex items-center gap-2 mb-6 text-gray-900 font-bold uppercase tracking-wider text-sm">
                                        {skillGroup.icon}
                                        {skillGroup.category}
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {skillGroup.technologies.map((tech, tIdx) => (
                                            <Badge
                                                key={tIdx}
                                                text={tech.name}
                                                icon={tech.icon}
                                                bgColor="bg-gray-50"
                                                borderColor="border-gray-200"
                                                className="text-sm py-1.5 px-3 text-gray-700 font-medium"
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                </SectionInner>
            </main>
        </div>
    );
}
