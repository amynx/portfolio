interface SectionInnerProps {
    children: React.ReactNode
    className?: string
}

export default function SectionInner({
    children,
    className = "",
}: SectionInnerProps) {
    return (
        <div
            className={`
        mx-auto
        w-full
        max-w-[1600px]
        h-full
        ${className}
      `}
        >
            {children}
        </div>
    )
}

