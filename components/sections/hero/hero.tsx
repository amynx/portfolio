'use client'
import SectionWrapper from "@/components/layout/SectionWrapper";
import SectionInner from "@/components/layout/SectionInner";
import Image from "next/image";
import Badge from "@/components/ui/badge";
import {
    CodeIcon,
    ChecksIcon,
    PenNibIcon,
    RocketLaunchIcon,
    MouseScrollIcon,
    MapPinSimpleIcon,
    ArrowRightIcon,

} from "@phosphor-icons/react";
import Button from "@/components/ui/Button";

export default function Hero() {
    return (
        <SectionWrapper className="hero-shadow relative min-h-screen w-full flex items-stretch bg-magic-grid">

            {/* Imagen de fondo */}
            <Image
                src="/ay-logo.svg"
                alt="Hero background"
                fill
                className="object-cover opacity-3 -z-10"
            />

            {/* Overlay de sombra interna */}
            <div
                className=" pointer-events-none absolute inset-0 z-0"
            />


            <SectionInner className="relative z-10 w-full h-full">
                <div className="grid w-full min-h-full grid-cols-3 grid-rows-[1fr_auto] gap-8">

                    {/* Core Hero */}
                    <div className="self-center col-span-3 row-span-1 flex flex-col items-center gap-6">

                        <div className="w-[345px] h-[150px] rounded-full bg-[var(--color-blue-50)] overflow-hidden">
                            <Image
                                src="/assets/images/andres-yepez-photo.svg"
                                alt="Andrés Yepez"
                                width={200}
                                height={150}
                                className="relative left-8 top-4 object-cover"
                            />
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <h1
                                className=" text-4xl font-semibold bg-gradient-to-r from-gray-800 to-blue-700 bg-clip-text text-transparent
  "
                            >
                                Hey, I'm Andrés Yepez.
                            </h1>


                            <h2 className="text-4xl font-semibold">
                                Systems engineer
                            </h2>
                        </div>

                        <p className="text-lg text-center">
                            I help teams and companies create well-designed digital <br />
                            products, from conception to execution.
                        </p>

                        <div className="flex gap-2 p-1.5 bg-[var(--color-white)] rounded-lg">
                            <Badge
                                text="Frontend Developer"
                                icon={<CodeIcon size={20} />}
                                bgColor="bg-[var(--color-gray-50)]"
                                borderColor="border-0"
                                radius="rounded-sm"
                            />
                            <Badge
                                text="QA"
                                icon={<ChecksIcon size={20} />}
                                bgColor="bg-[var(--color-gray-50)]"
                                borderColor="border-0"
                                radius="rounded-sm"
                            />
                            <Badge
                                text="UI/UX Designer"
                                icon={<PenNibIcon size={20} />}
                                bgColor="bg-[var(--color-gray-50)]"
                                borderColor="border-0"
                                radius="rounded-sm"
                            />
                        </div>

                        <div className="flex gap-2">
                            <Button
                                text="Contact me"
                                bgColor="bg-[var(--color-black)]"
                                textColor="text-[var(--color-white)]"
                                borderColor="border-[var(--color-blue-500)]"
                                borderRadius="rounded-lg"
                                icon={<ArrowRightIcon size={20} />}
                                iconPosition="right"
                                onClick={() => { }}
                                disabled={false}
                            />

                            <Badge
                                text="Avalaible for new project"
                                icon={<RocketLaunchIcon size={20} />}
                                bgColor="bg-green-100"
                                borderColor="border-0"
                                radius="rounded-full"
                                padding="py-2 px-5"
                                className="text-green-900 font-semibold"
                            />
                        </div>
                    </div>

                    {/* Location Badge */}
                    <div className="items-end justify-start col-start-1 row-start-2 flex items-center">
                        <Badge
                            text="Colombia"
                            icon={<MapPinSimpleIcon size={20} />}
                            bgColor="bg-none"
                            borderColor="border-0"
                            padding="py-0 px-0"
                        />
                    </div>

                    {/* Scroll Indicator */}
                    <div className="items-end col-start-2 row-start-2 flex items-center justify-center">
                        <Badge
                            text="Scroll to see more"
                            icon={<MouseScrollIcon size={20} />}
                            bgColor="bg-none"
                            borderColor="border-0"
                            padding="py-0 px-0"
                        />
                    </div>

                </div>
            </SectionInner>
        </SectionWrapper>
    );
}
