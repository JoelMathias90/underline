import React, { ReactNode } from "react"

interface CardProps {
    children: ReactNode;
    className?: string;
}

export default function Card({ children, className }: CardProps) {
    return (
        <div
            className={className}
            style={{
                backgroundColor: !className ? "white":"",
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
            }}
        >
            {children}
        </div>
    )
}