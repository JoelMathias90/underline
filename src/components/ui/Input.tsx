'use client'

import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    message?: string;
    error?: boolean;
}

export default function Input({
    name,
    label,
    message,
    error = false,
    required = true,
    className = '',
    ...props
}: InputProps) {
    return (
        <div>
            {label &&
                <label htmlFor={name}>
                    {label}
                </label>
            }
            <input
                id={name}
                name={name}
                className={className}
                {...props}
            />
            {message && (
                <span>
                    {message}
                </span>
            )}
        </div>
    )
}