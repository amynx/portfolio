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
        px-4
        sm:px-6
        lg:px-8
        xl:px-10
        ${className}
      `}
        >
            {children}
        </div>
    )
}

