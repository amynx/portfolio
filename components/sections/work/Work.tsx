'use client';

import Image from 'next/image';
import { PersonIcon } from '@phosphor-icons/react';

import SectionWrapper from '@/components/layout/SectionWrapper';
import SectionInner from '@/components/layout/SectionInner';
import Card from '@/components/sections/work/Card';

/* -------------------------------------------------------------------------- */
/*                                   DATA                                     */
/* -------------------------------------------------------------------------- */

const WORK_ITEMS = [
    {
        logo: '/assets/images/work/ateras-logo.svg',
        projectName: 'Ateras',
        sector: 'Software Development',
        role: {
            text: 'Frontend',
            icon: <PersonIcon size={18} />,
        },
        tags: [
            { text: 'Web Design' },
            { text: 'Web Site' },
            { text: 'UI/UX' },
        ],
        title: 'Web site for software development teams',
        description:
            'Design and development of a web site for software development teams.',
        accentColor: '#ff0707',
    },
    {
        logo: '/assets/images/work/coomulcavisur-logo.svg',
        projectName: 'Coomulcavisur',
        sector: 'Cooperative',
        role: {
            text: 'Frontend',
            icon: <PersonIcon size={18} />,
        },
        tags: [
            { text: 'Web Design' },
            { text: 'Landing Page' },
            { text: 'UI/UX' },
        ],
        title: 'Landing page for cooperative management',
        description:
            'Design and development of an institutional landing page.',
        accentColor: '#4dff07',
    },
    {
        logo: '/assets/images/work/tastery-logo.svg',
        projectName: 'Tastery',
        sector: 'Food App',
        role: {
            text: 'Frontend',
            icon: <PersonIcon size={18} />,
        },
        tags: [
            { text: 'Web Design' },
            { text: 'SPA' },
            { text: 'UI/UX' },
        ],
        title: 'Web application for food recipes',
        description:
            'Design and development of a web application for exploring recipes.',
        accentColor: '#ffdf00',
    },
];

/* -------------------------------------------------------------------------- */
/*                                COMPONENT                                   */
/* -------------------------------------------------------------------------- */

export default function Work({ id }: { id?: string }) {
    return (
        <SectionWrapper id={id} className="relative overflow-hidden">
            {/* Decorative background */}
            <Image
                src="/assets/images/ay-logo-stroke.svg"
                alt=""
                aria-hidden
                width={1600}
                height={1600}
                className="absolute inset-0 -z-10 h-full w-full object-cover"
            />

            <SectionInner className="relative z-10">
                {/* Section title */}
                <header className="mb-16 text-center">
                    <h2 className="text-4xl font-semibold">Work</h2>
                </header>

                {/* Cards grid */}
                <div className="mx-auto grid w-fit grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {WORK_ITEMS.map((item) => (
                        <Card
                            key={item.projectName}
                            {...item}
                            onButtonClick={() => { }}
                        />
                    ))}
                </div>
            </SectionInner>
        </SectionWrapper>
    );
}
