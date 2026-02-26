'use client'

import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    loading?: boolean;
}

export default function Button({
    children,
    loading = false,
    disabled = false,
    className = '',
    type = 'button',
    onClick,
    ...props
}: ButtonProps) {
    const isDisabled = disabled || loading

    return (
        <button
            type={type}
            disabled={isDisabled}
            className={className}
            onClick={isDisabled ? undefined : onClick}
            {...props}
        >
            {loading ? (
                children + "..."
            ) : (
                children
            )}
        </button>
    )
}