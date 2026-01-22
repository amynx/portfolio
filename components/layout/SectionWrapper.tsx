interface SectionWrapperProps {
    children: React.ReactNode
    className?: string
}

export default function SectionWrapper({
    children,
    className = ""
}: SectionWrapperProps) {
    return (
        <section className={`
      w-full
      py-12
      md:py-16
      lg:py-24
      ${className}
    `}>
            {children}
        </section>
    )
}
