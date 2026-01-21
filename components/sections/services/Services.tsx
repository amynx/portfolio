'use client';

import SectionWrapper from "@/components/layout/SectionWrapper";
import SectionInner from "@/components/layout/SectionInner";
import Card from "@/components/sections/services/Card";
import Image from "next/image";

import {
    CodeIcon,
    ChecksIcon,
    PenNibIcon,
    RocketLaunchIcon,
} from "@phosphor-icons/react";

const services = [
    {
        title: "Frontend Development",
        description:
            "Interfaces modernas, accesibles y optimizadas para rendimiento, construidas con tecnologías actuales.",
        accentColor: "#3B82F6",
        icon: <CodeIcon size={24} />,
    },
    {
        title: "Quality Assurance (QA)",
        description:
            "Validación funcional y visual para asegurar experiencias estables, confiables y sin fricción.",
        accentColor: "#10B981",
        icon: <ChecksIcon size={24} />,
    },
    {
        title: "UX / UI Design",
        description:
            "Diseño centrado en el usuario, combinando estética, usabilidad y coherencia visual.",
        accentColor: "#8B5CF6",
        icon: <PenNibIcon size={24} />,
    },
    {
        title: "Product Thinking",
        description:
            "Definición estratégica del producto, priorización de valor y alineación con objetivos de negocio.",
        accentColor: "#F59E0B",
        icon: <RocketLaunchIcon size={24} />,
    },
];

export default function Services() {
    return (
        <SectionWrapper className="relative overflow-hidden">
            <Image
                src="/assets/images/ay-logo-stroke.svg"
                alt="AY Logo background"
                width={1600}
                height={1600}
                aria-hidden
                className="
          absolute
          inset-0
          -z-10
          w-full
          h-full
          object-cover
        "
            />

            <SectionInner className="relative z-10">
                {/* Section title */}
                <div className="mb-16 text-center">
                    <h2 className="text-4xl font-semibold">Services</h2>
                </div>

                {/* Cards grid */}
                <div
                    className="
            mx-auto
            w-fit
            grid
            grid-cols-[auto]
            gap-10
            md:grid-cols-[auto_auto]
            lg:grid-cols-[auto_auto_auto_auto]
          "
                >
                    {services.map((service, index) => (
                        <Card
                            key={service.title}

                            badge={{
                                icon: service.icon,
                                number: (index + 1).toString().padStart(2, "0"),
                            }}
                            title={service.title}
                            description={service.description}
                            accentColor={service.accentColor}
                        />
                    ))}
                </div>
            </SectionInner>
        </SectionWrapper>
    );
}
