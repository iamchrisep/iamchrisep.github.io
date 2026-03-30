import type { ReactNode } from "react";

type Props = {
    href: string;
    children: ReactNode;
    variant?: "primary" | "secondary" | "ghost";
    external?: boolean;
    ariaLabel?: string;
    className?: string;
};

export function ButtonLink({
    href,
    children,
    variant = "secondary",
    external = false,
    ariaLabel,
    className = "",
}: Props) {
    const variantClass =
        variant === "primary"
            ? "button-primary"
            : variant === "ghost"
              ? "button-ghost"
              : "button-secondary";

    return (
        <a
            href={href}
            className={`button-base ${variantClass} ${className}`.trim()}
            aria-label={ariaLabel}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer" : undefined}
        >
            {children}
            {external ? <span aria-hidden="true">↗</span> : null}
        </a>
    );
}
