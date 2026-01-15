interface SectionInnerProps {
    children: React.ReactNode
}

export default function SectionInner({ children }: SectionInnerProps) {
    return (
        <div className="
      mx-auto
      w-full
      max-w-[1100px]
    ">
            {children}
        </div>
    )
}
