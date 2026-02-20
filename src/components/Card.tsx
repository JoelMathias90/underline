import React, { ReactNode } from "react"

interface CardProps {
    children: ReactNode;
    width?: number | string;
    height?: number | string;
    backgroundColor?: string;
}

export default function Card({
    children,
    width = 400,
    height = 500,
    backgroundColor = "white"
}: CardProps) {

    return (
        <div style={{
            width,
            height,
            backgroundColor,
            padding: 16,
            display: "flex",
            flexDirection: "column"
        }}>
            {children}
        </div>
    )
}