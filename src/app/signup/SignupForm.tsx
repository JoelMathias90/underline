'use client'

import { ChangeEvent, FormEvent, useActionState, useEffect, useState } from "react";
import { SignupActionState, UserData, UserError } from "@/types/UserType";
import { signupAction } from "./actions";
import { redirect } from "next/navigation";
import { userValidator } from "./validate";

const initialFormData: Readonly<UserData> = {
    firstName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptedTerms: false
}

export default function SignupForm() {
    const [actionState, dispatchAction, isPending] = useActionState<SignupActionState, FormData>(signupAction, {})
    const [state, setState] = useState<UserData>(initialFormData)
    const [errors, setErrors] = useState<UserError>({})

    useEffect(() => {        
        if (actionState?.success) {
            console.log('Sucesso');
            setState(initialFormData)
            redirect('/')
        }

        if (actionState?.errors) {
            console.log('Error');
            setErrors(actionState.errors)
        }

    }, [actionState])

function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, type, value, checked } = event.target

    setState(prev => ({
        ...prev,
        [name as keyof UserData]: type === 'checkbox' ? checked : value
    }))
}

const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    if (!state.acceptedTerms) {
        setErrors(prev => ({
            ...prev,
            ['acceptedTerms']: userValidator['acceptedTerms'](state.acceptedTerms)
        }))
        event.preventDefault()
        return
    }

}

return (
    <div className="flex flex-col justify-center gap-8 p-8 border">

        <h1 className="text-3xl">
            Cadastrar-se
        </h1>

        <form
            noValidate
            onSubmit={handleSubmit}
            action={dispatchAction}
            className="flex flex-col gap-4 box-border"
        >

            <div className="flex flex-col">
                <label htmlFor="firstName">
                    Primeiro Nome
                </label>
                <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="Seu primeiro nome"
                    value={state.firstName}
                    onChange={handleInputChange}
                    className="border-b-2"
                />
                <p className="">{errors.firstName}</p>
            </div>

            <div className="flex flex-col">
                <label htmlFor="email">
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@email.com"
                    value={state.email}
                    onChange={handleInputChange}
                    className="border-b-2"

                />
                <p className="">{errors.email}</p>

            </div>

            <div className="flex flex-col">
                <label htmlFor="password">
                    Senha
                </label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Sua senha"
                    value={state.password}
                    onChange={handleInputChange}
                    className="border-b-2"

                />
                <p className="">{errors.password}</p>

            </div>

            <div className="flex flex-col">
                <label htmlFor="confirmPassword">
                    Confirmar Senha
                </label>
                <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Confirme sua senha"
                    value={state.confirmPassword}
                    onChange={handleInputChange}
                    className="border-b-2"
                />
                <p className="">{errors.confirmPassword}</p>

            </div>

            <div>
                <input
                    type="checkbox"
                    name="acceptedTerms"
                    id="acceptedTerms"
                    checked={state.acceptedTerms}
                    onChange={handleInputChange}
                    className="border-b-2"

                />
                <label htmlFor="acceptedTerms">
                    Eu aceito os
                    <a href="acceptedTerms">
                        Termos de Uso
                    </a>
                </label>
                <p className="">{errors.acceptedTerms}</p>

            </div>

            <button
                type="submit"
                disabled={isPending}
                className="border bg-black text-white disabled:border-gray-200"
            >
                Cadastrar
            </button>

        </form>
        <p>
            Já possui uma conta?
            <a href="signin">
                Entre aqui
            </a>
        </p>
    </div>

)
}