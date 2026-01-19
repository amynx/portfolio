import { ReactNode } from "react";

type BadgeProps = {
    text: string;
    icon?: ReactNode;
    bgColor?: string;
    borderColor?: string;
    radius?: string;
    padding?: string;
    className?: string;
};

export default function Badge({
    text,
    icon,
    bgColor = "bg-bg-surface",
    borderColor = "border-border-default",
    radius = "rounded-md",
    padding = "px-2 py-0.5",
    className = "",
}: BadgeProps) {
    return (
        <span
            className={`
        inline-flex items-center gap-1.5
        ${padding}
        text-xs font-normal
        border
        ${bgColor}
        ${borderColor}
        ${radius}
        ${className}
      `}
        >
            {icon && <span className="flex items-center">{icon}</span>}
            {text}
        </span>
    );
}
