interface SectionWrapperProps {
    children: React.ReactNode
    className?: string
    id?: string
}

export default function SectionWrapper({
    children,
    className = "",
    id
}: SectionWrapperProps) {
    return (
        <section
            id={id}
            className={`
                w-full
                py-12
                md:py-16
                lg:py-24
                ${className}
            `}
        >
            {children}
        </section>
    )
}
