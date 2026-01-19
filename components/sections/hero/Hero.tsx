'use client'
import SectionWrapper from "@/components/layout/SectionWrapper";
import SectionInner from "@/components/layout/SectionInner";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import {
    CodeIcon,
    ChecksIcon,
    PenNibIcon,
    RocketLaunchIcon,
    MouseScrollIcon,
    MapPinSimpleIcon,
    ArrowRightIcon,

} from "@phosphor-icons/react";

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
                <div className="grid w-full min-h-full grid-cols-1 sm:grid-cols-3 grid-rows-[1fr_auto] gap-8">

                    {/* Core Hero */}
                    <div className="self-center col-span-1 sm:col-span-3 row-span-1 flex flex-col items-center gap-6">


                        <div
                            className="
    relative
    w-64 h-28
    sm:w-72 sm:h-32
    lg:w-96 lg:h-40
    xl:w-[28rem] xl:h-48
    rounded-full
    bg-[var(--color-blue-50)]
    overflow-hidden
    mx-auto
  "
                        >
                            <Image
                                src="/assets/images/andres-yepez-photo.svg"
                                alt="Andrés Yepez"
                                fill
                                priority

                                className="scale-150 sm: translate-y-8 lg:translate-y-12 "
                            />
                        </div>


                        <div className="flex flex-col items-center gap-2 text-center">
                            <h1
                                className="
      text-2xl sm:text-3xl lg:text-4xl xl:text-5xl
      font-semibold
      leading-tight
      bg-gradient-to-r from-gray-800 to-blue-700
      bg-clip-text text-transparent
    "
                            >
                                Hey, I'm Andrés Yepez.
                            </h1>

                            <h2
                                className="
      text-xl sm:text-2xl lg:text-3xl
      font-medium
      text-gray-900
    "
                            >
                                Systems Engineer
                            </h2>
                        </div>


                        <p className="
  text-base sm:text-lg
  text-center
  max-w-xs sm:max-w-md lg:max-w-2xl
  mx-auto
  text-balance
">
                            I help teams and companies create well-designed digital products, from conception to execution.
                        </p>


                        <div
                            className="
    flex flex-wrap justify-center gap-2
    p-0 sm:p-1.5
    bg-transparent sm:bg-[var(--color-white)]
    rounded-lg
  "
                        >
                            <Badge
                                text="Frontend Developer"
                                icon={<CodeIcon size={16} />}
                                bgColor="bg-[var(--color-white)] sm:bg-[var(--color-gray-50)]"
                                borderColor="border-0"
                                radius="rounded-sm"
                            />
                            <Badge
                                text="QA"
                                icon={<ChecksIcon size={16} />}
                                bgColor="bg-[var(--color-white)] sm:bg-[var(--color-gray-50)]"
                                borderColor="border-0"
                                radius="rounded-sm"
                            />
                            <Badge
                                text="UI/UX Designer"
                                icon={<PenNibIcon size={16} />}
                                bgColor="bg-[var(--color-white)] sm:bg-[var(--color-gray-50)]"
                                borderColor="border-0"
                                radius="rounded-sm"
                            />
                        </div>


                        <div className="flex flex-col sm:flex-row items-center gap-3">
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
                    <div className="hidden sm:flex items-end justify-start col-start-1 row-start-2">

                        <Badge
                            text="Colombia"
                            icon={<MapPinSimpleIcon size={20} />}
                            bgColor="bg-none"
                            borderColor="border-0"
                            padding="py-0 px-0"
                        />
                    </div>


                    {/* Scroll Indicator */}
                    <div className="flex items-center justify-center sm:items-end sm:col-start-2 row-start-2">
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
