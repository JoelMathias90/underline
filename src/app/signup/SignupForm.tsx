'use client'

import { useActionState } from "react";
import SignupAction from "./actions";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Botton";

export default function SignupForm() {
    const [state, signupAction] = useActionState(SignupAction, null)

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
            />

            <Input
                label="Email"
                name="email"
                type="email"
                required
                placeholder="example@mail.com"
                className="flex box-border min-w-80 min-h-10 border-b-2 focus:outline-none"
            />

            <Input
                label="Senha"
                name="password"
                type="password"
                required
                placeholder="Digite uma senha"
                className="flex box-border min-w-80 min-h-10 border-b-2 focus:outline-none"
            />

            <Input
                label="Confimar Senha"
                name="confirmPassword"
                type="password"
                required
                placeholder="Confirme sua senha"
                className="flex box-border min-w-80 min-h-10 border-b-2 focus:outline-none"
            />

            <label className="flex gap-2 box-border mb-4">
                <Input
                    name="acceptedTerms"
                    type="checkbox"
                    required
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