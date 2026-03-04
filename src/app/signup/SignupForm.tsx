'use client'

import { ChangeEvent, useActionState, useEffect, useState } from "react";
import SignupAction from "./actions";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Botton";

type FormDataType = {
    firstName: string
    email: string
    password: string
    confirmPassword: string
    acceptedTerms: boolean
}

const initialFormState: FormDataType = {
    firstName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptedTerms: false,
}

export default function SignupForm() {
    const [state, signupAction] = useActionState(SignupAction, null)
    const [formData, setFormData] = useState<FormDataType>(initialFormState)
    const isDisabled = !formData.acceptedTerms

    useEffect(() => {
        setFormData(initialFormState)
        if(state?.success) console.log(state.success);
    }, [state])
    

    function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value, type, checked } = e.target
        
        const newValue = type === 'checkbox' ? checked : value

        setFormData({
            ...formData,
            [name]: newValue
        })
    }

    return (
        <form
            action={signupAction}
            className="relative flex flex-col gap-4 box-border p-8 border"
        >
            <h1 className="flex justify-center mb-4 text-3xl">
                Cadastrar-se
            </h1>

            <Input
                label="Primeiro Nome"
                name="firstName"
                type="text"
                required
                placeholder="Seu primeiro nome"
                className="flex box-border min-w-80 min-h-10 border-b-2 focus:outline-none"
                value={formData.firstName}
                onChange={e => handleInputChange(e)}
            />

            <Input
                label="Email"
                name="email"
                type="email"
                required
                placeholder="example@mail.com"
                value={formData.email}
                onChange={e => handleInputChange(e)}
                className="flex box-border min-w-80 min-h-10 border-b-2 focus:outline-none"
            />

            <Input
                label="Senha"
                name="password"
                type="password"
                required
                placeholder="Digite uma senha"
                value={formData.password}
                onChange={e => handleInputChange(e)}
                className="flex box-border min-w-80 min-h-10 border-b-2 focus:outline-none"
            />

            <Input
                label="Confimar Senha"
                name="confirmPassword"
                type="password"
                required
                placeholder="Confirme sua senha"
                value={formData.confirmPassword}
                onChange={e => handleInputChange(e)}
                className="flex box-border min-w-80 min-h-10 border-b-2 focus:outline-none"
            />

            {/* Checkbox */}

            <label className="flex gap-2 box-border mb-4">
                <Input
                    name="acceptedTerms"
                    type="checkbox"
                    required
                    checked={formData.acceptedTerms}
                    onChange={e => handleInputChange(e)}
                    className="size-4"
                />
                <span>
                    Eu aceito os{" "}
                    <a
                        href="policy"
                        className="text-blue-600 hover:text-blue-800 underline"
                    >
                        Termos de Uso
                    </a>.
                </span>
            </label>

            <Button
                type="submit"
                disabled={isDisabled}
                className="flex flex-col justify-center box-border min-w-80 min-h-10 bg-black text-lg text-white hover:bg-gray-700 cursor-pointer"
            >
                Cadastrar
            </Button>

            <div>
                <p className="text-sm text-center">
                    Já tem uma conta?
                    <a
                        href="/signin"
                        className="pl-1 text-sm text-blue-600 hover:text-blue-800 underline"
                    >
                        Entre aqui
                    </a>
                </p>
            </div>
        </form>
    )
}