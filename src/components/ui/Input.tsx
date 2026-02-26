import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    message?: string;
}

export default function Input({ label, name, className, message, ...props }: InputProps) {
    return (
        <label className="" htmlFor={name} >
            <div>
                {label}
            </div>
            <input {...props}
                id={name}
                minLength={8}
                className={`border border-gray-400 w-full p-1 text-lg ${className}`}
            />
            {message &&
                <p>
                    {message}
                </p>
            }
        </label>
    )
}