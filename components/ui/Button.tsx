import { ReactNode } from "react";

type ButtonProps = {
    text: string;
    bgColor?: string;       // clases Tailwind ej: "bg-primary"
    textColor?: string;     // ej: "text-white"
    borderColor?: string;   // ej: "border-primary"
    borderRadius?: string;  // ej: "rounded-lg"
    icon?: ReactNode;
    iconPosition?: "left" | "right";
    onClick?: () => void;
    disabled?: boolean;
};

export default function Button({
    text,
    bgColor = "bg-transparent",
    textColor = "text-current",
    borderColor = "border-transparent",
    borderRadius = "rounded-md",
    icon,
    iconPosition = "left",
    onClick,
    disabled = false,
}: ButtonProps) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
        inline-flex items-center justify-center gap-2
        px-4 py-1
        border
        ${bgColor}
        ${textColor}
        ${borderColor}
        ${borderRadius}
        transition-all duration-200
        hover:opacity-90
        disabled:opacity-50 disabled:cursor-not-allowed
      `}
        >
            {icon && iconPosition === "left" && <span>{icon}</span>}
            <span>{text}</span>
            {icon && iconPosition === "right" && <span>{icon}</span>}
        </button>
    );
}
