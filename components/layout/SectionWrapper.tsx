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
      py-20
      ${className}
    `}>
            {children}
        </section>
    )
}
