'use client'
  
interface ButtonProps {
    text?: string;
    disabled?: boolean;
    handleClick?: () => void;
}

export default function Button ({text, disabled, handleClick} : ButtonProps) {
    return (
        <button disabled={disabled}
            className={"cursor-pointer w-30 bg-gray-300 p-1"}
            onClick={handleClick}
        >
            {disabled ? "loading" : text}
        </button>
    )
}