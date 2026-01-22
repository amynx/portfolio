import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "../layout/SectionWrapper";
import SectionInner from "../layout/SectionInner";

export default function Footer() {
    return (
        <SectionWrapper className="bg-blue-50 py-8 md:py-10">
            <SectionInner>
                <footer className="flex flex-col gap-6">

                    {/* Main row */}
                    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                        {/* Left: identity */}
                        <div className="flex items-center gap-4">
                            <Image
                                src="/ay-logo.svg"
                                alt="Andrés Yepez logo"
                                width={60}
                                height={60}
                                priority
                            />

                            <p className="max-w-md text-sm text-gray-600 leading-relaxed">
                                Turning ideas into action, one step at a time.
                            </p>
                        </div>

                        {/* Right: navigation */}
                        <nav
                            aria-label="Footer navigation"
                            className="flex flex-wrap gap-x-6 gap-y-2 text-sm"
                        >
                            {["Work", "Profile", "Services", "Insights", "Contact"].map(
                                (item) => (
                                    <Link
                                        key={item}
                                        href={`#${item.toLowerCase()}`}
                                        className="font-medium text-gray-700 transition-colors hover:text-gray-900"
                                    >
                                        {item}
                                    </Link>
                                )
                            )}
                        </nav>
                    </div>

                    {/* Bottom meta */}
                    <div className="flex flex-col gap-4 border-t border-gray-200 pt-4 text-xs text-gray-500 md:flex-row md:items-center md:justify-between">

                        {/* Social links first on mobile */}
                        <div className="flex gap-5 md:order-2">
                            <Link
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-800 transition-colors"
                            >
                                LinkedIn
                            </Link>
                            <Link
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-800 transition-colors"
                            >
                                GitHub
                            </Link>
                            <Link
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-800 transition-colors"
                            >
                                Instagram
                            </Link>
                        </div>

                        <span className="md:order-1">
                            © {new Date().getFullYear()} Andrés Yepez
                        </span>
                    </div>

                </footer>
            </SectionInner>
        </SectionWrapper>
    );
}
