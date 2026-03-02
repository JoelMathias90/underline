'use client'

import { HTMLAttributes, ReactNode } from "react"

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}

export default function Card({
    children,
    className = '',
    ...props
}: CardProps) {

    return (
        <div
            className={`relative flex flex-col gap-4 box-border p-8 bg-white text-black border ${className}`}
            {...props}
        >
            {children}
        </div>
    )
}