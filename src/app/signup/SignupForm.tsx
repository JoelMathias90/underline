'use client'

import { useActionState } from "react";
import Button from "../../components/ui/Botton";
import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import SignupAction from "./actions";

export default function SignupForm() {
    const [state, action] = useActionState(SignupAction, null)
    
    return (
        <Card>
            <form
                action={action}
                className="relative flex flex-col gap-4 box-border p-8">

                <h1 className="flex justify-center mb-4 text-3xl">
                    Cadastrar-se
                </h1>
                <Input
                    label="Primeiro Nome"
                    name="first_name"
                    message={state?.message}
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
                    name="senha"
                    type="password"
                    required
                    placeholder="Digite uma senha"
                    className="flex box-border min-w-80 min-h-10 border-b-2 focus:outline-none"
                />
                <Input
                    label="Confimar Senha"
                    name="confirm_senha"
                    type="password"
                    required
                    placeholder="Confirme sua senha"
                    className="flex box-border min-w-80 min-h-10 border-b-2 focus:outline-none"
                />
                <label className="flex gap-2 box-border mb-4">
                    <Input
                        name="policy"
                        type="checkbox"
                        required
                        className=" size-4"
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
                {state?.message && (
                    <p>{state.message}</p>
                )}
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
        </Card>
    )
}