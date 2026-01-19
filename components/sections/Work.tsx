'use client'

import SectionWrapper from "@/components/layout/SectionWrapper";
import SectionInner from "@/components/layout/SectionInner";
import Card from "@/components/ui/Card";
import { PersonIcon } from "@phosphor-icons/react";
import Image from "next/image";

export default function Work() {
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
                    <h2 className="text-4xl font-semibold">
                        Work
                    </h2>
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
            lg:grid-cols-[auto_auto_auto]
          "
                >
                    <Card
                        logo="/ay-logo.svg"
                        projectName="Rising Labs"
                        sector="Software Development"
                        role={{ text: "Frontend", icon: <PersonIcon size={18} /> }}
                        tags={[{ text: "Web Desing" }, { text: "Landign Page" }, { text: "UI/UX" }]}
                        title="Landing page for software development teams"
                        description="Diseño y desarrollo de una landing page para una cooperativa."
                        accentColor="#074eff"
                        onButtonClick={() => { }}
                    />

                    <Card
                        logo="/ay-logo.svg"
                        projectName="Coomulcavisur"
                        sector="Cooperative"
                        role={{ text: "Frontend", icon: <PersonIcon size={18} /> }}
                        tags={[{ text: "Web Desing" }, { text: "Landign Page" }, { text: "UI/UX" }]}
                        title="Landing page for software development teams"
                        description="Diseño y desarrollo de una landing page para una cooperativa."
                        accentColor="#4dff07"
                        onButtonClick={() => { }}
                    />

                    <Card
                        logo="/ay-logo.svg"
                        projectName="Tastery"
                        sector="Food App"
                        role={{ text: "Frontend", icon: <PersonIcon size={18} /> }}
                        tags={[{ text: "Web Desing" }, { text: "SPA" }, { text: "UI/UX" }]}
                        title="Landing page for software development teams"
                        description="Diseño y desarrollo de una landing page para una cooperativa."
                        accentColor="#ff0707"
                        onButtonClick={() => { }}
                    />
                </div>

            </SectionInner>
        </SectionWrapper>
    );
}
