'use client';

import { JSX, useState } from 'react';
import Image from 'next/image';
import {
    PersonIcon,
    DatabaseIcon,
    GlobeIcon,
    HammerIcon,
    AtomIcon,
    DeviceMobileIcon,
} from '@phosphor-icons/react';
import {
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiFramer,
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiSwiper,
} from 'react-icons/si';
import { MdDevices } from 'react-icons/md';
import { FaCubes, FaLayerGroup, FaBolt, FaSitemap } from 'react-icons/fa6';

import SectionWrapper from '@/components/layout/SectionWrapper';
import SectionInner from '@/components/layout/SectionInner';
import Card from '@/components/sections/work/Card';
import CaseStudy, { CaseStudyProject } from '@/components/sections/work/CaseStudy';

/* -------------------------------------------------------------------------- */
/*                                   TYPES                                    */
/* -------------------------------------------------------------------------- */

type WorkItem = {
    card: {
        logo: string;
        projectName: string;
        sector: string;
        role: {
            text: string;
            icon?: JSX.Element;
        };
        tags: {
            text: string;
            icon?: JSX.Element;
        }[];
        title: string;
        description: string;
        accentColor: string;
    };
    caseStudy: CaseStudyProject;
};

/* -------------------------------------------------------------------------- */
/*                                   DATA                                     */
/* -------------------------------------------------------------------------- */

const WORK_ITEMS: WorkItem[] = [
    {
        card: {
            logo: '/assets/images/work/ateras-logo.svg',
            projectName: 'Ateras',
            sector: 'Software Team',
            role: {
                text: 'Frontend,UI/UX',
                icon: <PersonIcon size={18} />,
            },
            tags: [
                { text: 'Website', icon: <GlobeIcon size={14} /> },
                { text: 'Ongoing', icon: <HammerIcon size={14} /> },
            ],
            title: 'An Elegant and Scalable Digital Presence',
            description:
                'A modern and timeless website that communicates Ateras services, products, and vision as a growing software team.',
            accentColor: '#D32F2F',
        },


        caseStudy: {
            logo: '/assets/images/work/ateras-logo.svg',
            projectName: 'Ateras',
            title: 'Crafting an Elegant and Scalable Digital Presence',
            description:
                'A modern and timeless corporate website designed to communicate Ateras’ services, products, and vision as a software development team.',
            sector: 'Software Agency',
            role: {
                text: 'Frontend, UI/UX',
                icon: <PersonIcon size={18} />,
            },
            accentColor: '#D32F2F',

            client: 'Ateras',
            date: '2025 - Present',
            productionUrl: 'https://ateras.co',

            images: ['/assets/images/work/ateras-case-study.png'],

            narrative: {
                context:
                    'Ateras is a software development team focused on creating custom digital solutions and scalable products. As part of the team, this project represents an ongoing effort to shape and evolve the company’s digital presence.',
                problem:
                    'Ateras needed a website that authentically reflected its identity and clearly communicated what the team offers, while avoiding generic agency patterns. The platform also had to be flexible enough to grow alongside the company and its products.',
                solution:
                    'An elegant and modern website was designed and developed with a strong focus on UI/UX, visual consistency, and narrative clarity. The site showcases services, products, and team values, and includes an intuitive contact form designed to facilitate meaningful connections with potential clients.',
                result:
                    'Ateras now has a cohesive and scalable digital platform that captures its visual and narrative essence, supports ongoing evolution, and serves as a solid foundation for future growth.',
            },

            stack: [
                { name: 'Next.js', icon: <SiNextdotjs size={18} /> },
                { name: 'TypeScript', icon: <SiTypescript size={18} /> },
                { name: 'Tailwind CSS', icon: <SiTailwindcss size={18} /> },
                { name: 'Framer Motion', icon: <SiFramer size={18} /> },
            ],
        },


    },

    {
        card: {
            logo: '/assets/images/work/coomulcavisur-logo.svg',
            projectName: 'Coomulcavisur',
            sector: 'Cooperative',
            role: {
                text: 'Frontend,UI/UX',
                icon: <PersonIcon size={18} />,
            },
            tags: [
                { text: 'Landing Page', icon: <GlobeIcon size={14} /> },
                { text: 'Digital Presence', icon: <DatabaseIcon size={14} /> },
            ],
            title: 'A Digital Home for a Community-Driven Cooperative',
            description:
                'A modern and responsive landing page designed to give visibility, credibility, and online presence to a community-based cooperative.',
            accentColor: '#40A629',
        },


        caseStudy: {
            logo: '/assets/images/work/coomulcavisur-logo.svg',
            projectName: 'Coomulcavisur',
            title: 'Building a Digital Presence for a Community-Driven Cooperative',
            description:
                'A modern, responsive landing page designed to give visibility, credibility, and digital presence to a community-based cooperative.',
            sector: 'Cooperative',
            role: {
                text: 'Frontend, UI/UX, Web Design',
                icon: <PersonIcon size={18} />,
            },
            accentColor: '#D32F2F',

            client: 'Coomulcavisur',
            date: '2023',
            productionUrl: 'https://coomulcavisur.com',

            images: ['/assets/images/work/coomulcavisur-case-study.png'],

            narrative: {
                context:
                    'Coomulcavisur is a multi-service cooperative founded in 2019 with the goal of generating employment, economic development, and social impact for its community. Prior to this project, the organization lacked a formal digital presence to communicate its mission, services, and values.',
                problem:
                    'The cooperative needed guidance, digital strategy, and an online platform that would allow them to present their organization professionally, share their history, promote their services, and provide clear contact information. They also required support in understanding domains, hosting, and corporate email solutions.',
                solution:
                    'A fully responsive landing page was designed and developed, covering the complete user journey: organizational presentation, services, history, administration, testimonials, and contact information. The project included UI/UX design, content structuring, image selection based on provided materials, and advisory on domain acquisition, hosting, and institutional email setup.',
                result:
                    'Coomulcavisur now has a modern, accessible, and easy-to-navigate digital platform that strengthens its credibility, improves communication with stakeholders, and enables the cooperative to promote its services, showcase evidence of its work, and share its impact with the community.',
            },

            stack: [
                { name: 'HTML', icon: <SiHtml5 size={18} /> },
                { name: 'CSS', icon: <SiCss3 size={18} /> },
                { name: 'JavaScript', icon: <SiJavascript size={18} /> },
                { name: 'Swiper.js', icon: <SiSwiper size={18} /> },
                { name: 'Responsive Design', icon: <MdDevices size={18} /> },
            ],
        },

    },

    {
        card: {
            logo: '/assets/images/work/tastery-logo.svg',
            projectName: 'Tastery',
            sector: 'Web Application',
            role: {
                text: 'Fullstack Dev',
                icon: <PersonIcon size={18} />,
            },
            tags: [
                { text: 'SPA', icon: <AtomIcon size={14} /> },
                { text: 'Product', icon: <DeviceMobileIcon size={14} /> },
            ],
            title: 'Discover, Explore and Cook with Confidence',
            description:
                'A functional web application to explore recipes, adjust ingredients by portions, and save favorites through a clean and intuitive experience.',
            accentColor: '#FFC107',
        },

        caseStudy: {
            logo: '/assets/images/work/tastery-logo.svg',
            projectName: 'Tastery',
            title: 'Exploring Recipes Through a Functional Web Experience',
            description:
                'A fully functional web application that allows users to explore, search, and manage recipes while dynamically adjusting ingredients based on desired portions.',
            sector: 'Web Application',
            role: {
                text: 'Fullstack Developer',
                icon: <DatabaseIcon size={18} />,
            },
            accentColor: '#FFC107',

            client: 'Personal Project',
            date: '2023',
            githubUrl: 'https://github.com/andres/tastery',

            images: ['/assets/images/work/tastery-case-study.png'],

            narrative: {
                context:
                    'Tastery was conceived as a hands-on product to explore modern web development practices while addressing a real-world need for cooking enthusiasts who want an intuitive way to discover and manage recipes.',
                problem:
                    'Many recipe platforms overwhelm users with ads and static content, offering limited interaction, poor navigation of results, and no flexibility to adapt ingredient quantities to different portion sizes.',
                solution:
                    'A web application was designed and developed with a focus on usability and performance. It includes recipe exploration, advanced search, paginated results, a detailed recipe view, dynamic ingredient recalculation based on portions, favorites management, and redirection to official recipe sources to learn more about the author and original content.',
                result:
                    'Tastery resulted in a complete and production-ready application that validates key frontend and architectural concepts, while providing a practical and enjoyable experience for users interested in discovering and organizing recipes.',
            },

            stack: [
                { name: 'JavaScript (ES6+)', icon: <SiJavascript size={18} /> },
                { name: 'Object-Oriented Programming', icon: <FaCubes size={18} /> },
                { name: 'Design Patterns', icon: <FaLayerGroup size={18} /> },
                { name: 'Asynchronous Programming', icon: <FaBolt size={18} /> },
                { name: 'DOM Manipulation', icon: <FaSitemap size={18} /> },
                { name: 'Responsive Layout', icon: <MdDevices size={18} /> },
            ],
        },

    },
];

/* -------------------------------------------------------------------------- */
/*                                COMPONENT                                   */
/* -------------------------------------------------------------------------- */

export default function Work({ id }: { id?: string }) {
    const [selectedProject, setSelectedProject] =
        useState<CaseStudyProject | null>(null);

    return (
        <SectionWrapper id={id} className="relative overflow-hidden">
            <Image
                src="/assets/images/ay-logo-stroke.svg"
                alt=""
                aria-hidden
                width={1600}
                height={1600}
                className="absolute inset-0 -z-10 h-full w-full object-cover opacity-50"
            />

            <SectionInner className="relative z-10">
                <header className="mb-16 text-center">
                    <h2 className="text-4xl font-semibold">Work</h2>
                    <p className="mt-4 text-gray-600">
                        Selected projects and case studies
                    </p>
                </header>

                <div className="mx-auto grid w-fit grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {WORK_ITEMS.map((item) => (
                        <Card
                            key={item.card.projectName}
                            {...item.card}
                            onButtonClick={() =>
                                setSelectedProject(item.caseStudy)
                            }
                        />
                    ))}
                </div>
            </SectionInner>

            {selectedProject && (
                <CaseStudy
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </SectionWrapper>
    );
}
