'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
    PersonIcon,
    CodeIcon,
    PaintBrushIcon,
    DatabaseIcon,
    AtomIcon,
    DeviceMobileIcon,
    GlobeIcon,
    FigmaLogoIcon
} from '@phosphor-icons/react';

import SectionWrapper from '@/components/layout/SectionWrapper';
import SectionInner from '@/components/layout/SectionInner';
import Card from '@/components/sections/work/Card';
import CaseStudy, { CaseStudyProject } from '@/components/sections/work/CaseStudy';

/* -------------------------------------------------------------------------- */
/*                                   DATA                                     */
/* -------------------------------------------------------------------------- */

const WORK_ITEMS: CaseStudyProject[] = [
    {
        /* Header Info */
        logo: '/assets/images/work/ateras-logo.svg',
        projectName: 'Ateras',
        title: 'Building the Digital Future for Enterprise',
        description: 'A high-performance corporate website designed to position Ateras as a leader in custom software solutions.',
        sector: 'Software Agency',
        role: {
            text: 'Frontend Developer',
            icon: <CodeIcon size={18} />,
        },
        accentColor: '#D32F2F',

        /* Meta Info */
        client: 'Ateras Tech',
        date: '2023 - Present',
        productionUrl: 'https://ateras.dev', // Example URL
        githubUrl: undefined, // Private repo

        /* Content */
        images: ['/assets/images/work/ateras-case-study.png'],
        narrative: {
            context: 'Ateras is a software development agency that helps enterprises build scalable digital solutions. They needed a web presence that matched the quality and sophistication of their engineering work.',
            problem: 'Their previous website was generic and built on a legacy template involved performance issues. It failed to effectively communicate their expertise in complex cloud architectures and AI solutions, leading to missed opportunities with high-tier clients.',
            solution: 'We engineered a bespoke Next.js website focused on performance and motion design. The interface uses a clean, grid-based layout with subtle micro-interactions to convey precision. We implemented a headless CMS structure to allow the marketing team to manage content without engineering dependencies.',
            result: 'The new platform launched with a 98/100 Lighthouse performance score. Lead conversion rates increased by 40% in the first quarter, and the brand successfully repositioned itself to attract enterprise-level contracts.'
        },
        stack: [
            { name: 'Next.js', icon: <GlobeIcon /> },
            { name: 'TypeScript', icon: <CodeIcon /> },
            { name: 'Tailwind CSS', icon: <PaintBrushIcon /> },
            { name: 'Framer Motion', icon: <AtomIcon /> },
        ],
    },
    {
        logo: '/assets/images/work/coomulcavisur-logo.svg',
        projectName: 'Coomulcavisur',
        title: 'Cultivating Community Connections',
        description: 'A digital transformation platform for a coffee growers cooperative, connecting rural producers with global markets.',
        sector: 'Cooperative',
        role: {
            text: 'Frontend & UI',
            icon: <PaintBrushIcon size={18} />,
        },
        accentColor: '#4CAF50',

        client: 'Coomulcavisur',
        date: '2024',
        productionUrl: 'https://coomulcavisur.com',

        images: ['/assets/images/work/coomulcavisur-case-study.png'],
        narrative: {
            context: 'Coomulcavisur represents over 1,200 coffee families in the southern region. They aim to promote sustainable agriculture and fair trade practices but lacked a digital channel to narrate their story to international buyers.',
            problem: 'Information about the cooperative’s social impact and product quality was scattered across offline documents. International buyers had no easy way to verify certifications or understand the origin of the beans.',
            solution: 'We designed and developed an accessible, mobile-first landing page. The design draws inspiration from the coffee landscapes, using organic shapes and earthy tones. We focused on storytelling, highlighting the faces and stories behind every bag of coffee.',
            result: 'The platform has become a vital tool for the commercial team. It has facilitated partnerships with European roasters and serves as a transparent information hub for members regarding fair trade certifications.'
        },
        stack: [
            { name: 'React', icon: <AtomIcon /> },
            { name: 'Tailwind', icon: <PaintBrushIcon /> },
            { name: 'Figma', icon: <FigmaLogoIcon /> },
        ],
    },
    {
        logo: '/assets/images/work/tastery-logo.svg',
        projectName: 'Tastery',
        title: 'The Social Network for Foodies',
        description: 'A mobile application for culinary enthusiasts to discover, organize, and share their favorite recipes.',
        sector: 'Mobile App',
        role: {
            text: 'Fullstack Dev',
            icon: <DatabaseIcon size={18} />,
        },
        accentColor: '#FFC107',

        client: 'Personal Project',
        date: '2023',
        githubUrl: 'https://github.com/andres/tastery', // Example

        images: ['/assets/images/work/tastery-case-study.png'],
        narrative: {
            context: 'Cooking is inherently social, yet most recipe apps are solitary tools cluttered with ads and SEO-driven blog posts that hide the actual instructions.',
            problem: 'Home cooks struggle to digitize their family recipes and share them easily with friends. Existing platforms prioritize monetization over user experience, making the simple act of cooking frustrating.',
            solution: 'Tastery is a distraction-free recipe manager built with React Native. It focuses on a clean UI, intuitive ingredient checklists, and a "cook mode" that keeps the screen awake. We implemented a social layer allowing users to follow friends and fork recipes to add their own twist.',
            result: 'Garnered 500+ active beta testers. Users praised the "Cook Mode" feature and the ease of importing recipes from URLS. The project served as a playground to master complex state management and offline-first architecture.'
        },
        stack: [
            { name: 'React Native', icon: <DeviceMobileIcon /> },
            { name: 'Firebase', icon: <DatabaseIcon /> },
            { name: 'Redux', icon: <CodeIcon /> },
        ],
    },
];

/* -------------------------------------------------------------------------- */
/*                                COMPONENT                                   */
/* -------------------------------------------------------------------------- */

export default function Work({ id }: { id?: string }) {
    const [selectedProject, setSelectedProject] = useState<CaseStudyProject | null>(null);

    return (
        <SectionWrapper id={id} className="relative overflow-hidden">
            {/* Decorative background */}
            <Image
                src="/assets/images/ay-logo-stroke.svg"
                alt=""
                aria-hidden
                width={1600}
                height={1600}
                className="absolute inset-0 -z-10 h-full w-full object-cover opacity-50"
            />

            <SectionInner className="relative z-10">
                {/* Section title */}
                <header className="mb-16 text-center">
                    <h2 className="text-4xl font-semibold">Work</h2>
                    <p className="mt-4 text-gray-600">Selected projects and case studies</p>
                </header>

                {/* Cards grid */}
                <div className="mx-auto grid w-fit grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {WORK_ITEMS.map((item) => (
                        <Card
                            /* Map specific Card props from the richer CaseStudyProject object */
                            key={item.projectName}
                            logo={item.logo}
                            projectName={item.projectName}
                            sector={item.sector}
                            role={item.role}
                            /* For the card, we just show the stack names as tags */
                            tags={item.stack.slice(0, 3).map(s => ({ text: s.name, icon: undefined }))}
                            title={item.title}
                            description={item.description}
                            accentColor={item.accentColor}
                            onButtonClick={() => setSelectedProject(item)}
                        />
                    ))}
                </div>
            </SectionInner>

            {/* Case Study Modal */}
            {selectedProject && (
                <CaseStudy
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </SectionWrapper>
    );
}
