'use client';

import SectionInner from "../layout/SectionInner";
import SectionWrapper from "../layout/SectionWrapper";
import Image from "next/image";
import Button from "../ui/Button";
import { ArrowRightIcon } from "@phosphor-icons/react";

export default function Profile({ id }: { id?: string }) {
    return (
        <SectionWrapper id={id}>
            <SectionInner>
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">

                    {/* Imagen / Visual */}
                    <div
                        className="
        relative
        order-1
        flex items-end justify-center
        bg-blue-50
        overflow-hidden
        min-h-[420px]
        lg:min-h-[600px]
        select-none
    "
                    >
                        {/* Logo de fondo – siempre centrado */}
                        <Image
                            src="/ay-logo.svg"
                            alt="AY Logo"
                            width={520}
                            height={520}
                            className="
            absolute
            inset-1/2
            -translate-x-1/2 -translate-y-1/2
            opacity-[0.03]
            pointer-events-none
            select-none
        "
                        />

                        {/* Foto principal – siempre pegada abajo */}
                        <Image
                            src="/assets/images/andres-yepez-photo.svg"
                            alt="Profile"
                            width={420}
                            height={420}
                            className="
            relative
            z-10
            w-[260px]
            sm:w-[320px]
            lg:w-[420px]
            self-end
            select-none
        "
                        />
                    </div>


                    {/* Contenido */}
                    <div className="
                        order-2
                        flex flex-col justify-center items-start
                        p-12
                        gap-10
                        
                        
                    ">
                        <h1 className="text-3xl lg:text-4xl font-semibold">
                            Profile
                        </h1>

                        <p className="text-base leading-relaxed text-gray-700 max-w-xl">
                            I am a creative professional focused on transforming ideas into clear, functional, and purposeful digital solutions. I specialize in understanding real problems, sorting through complexity, and turning it into products that generate impact, both technically and humanely.
                            <br /> <br />
                            I work by connecting vision, business, and technology, accompanying teams and organizations in decision-making, building customized solutions, and continuous improvement. I believe in the value of well-thought-out design, honest processes, and long-term relationships built through real results.
                        </p>

                        <Button
                            text="learn more"
                            bgColor="bg-[var(--color-black)]"
                            textColor="text-[var(--color-white)]"
                            borderColor="border-[var(--color-blue-500)]"
                            borderRadius="rounded-lg"
                            icon={<ArrowRightIcon size={20} />}
                            iconPosition="right"
                            onClick={() => { }}
                            disabled={false}
                        />
                    </div>

                </div>
            </SectionInner>
        </SectionWrapper>
    );
}
