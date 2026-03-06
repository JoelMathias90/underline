export type UserFormData = {
    firstName: string
    email: string
    password: string
    confirmPassword: string
}

type FieldValidator<T, F> = (value: T, form: F) => string

type FormValidators<F> = {
    [K in keyof F]?: FieldValidator<F[K], F>
}

export const validators: FormValidators<UserFormData> = {

    firstName: (value) => {
        if (!value.length) return 'Preenchimento obrigatório'
        if (value.length < 3) return 'Nome muito curto'
        if (!(/^\p{L}+(?:[ -]\p{L}+)*$/u).test(value)) return 'Válidos somente letras!'
        return ''
    },

    email: (value) => {
        if (!value.length) return 'Preenchimento obrigatório'
        if (!/^.{4,}@/.test(value)) return 'Usuário de email muito curto'
        if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(value)) return "O email deve parecer com example@mail.com"
        return ''
    },

    password: (value) => {
        if (!value.length) return 'Preenchimento obrigatório'
        if (value.length < 8) return 'Mínimo de 8 caracteres'
        if (!/[a-z]/.test(value)) return 'Pelo menos uma letra minúscula'
        if (!/[A-Z]/.test(value)) return 'Pelo menos uma letra maiúscula'
        if (!/\d/.test(value)) return 'Pelo menos um número'
        if (!/[@$!%*?&.#_-]/.test(value)) return 'Pelo menos um caracter especial'
        return ''
    },

    confirmPassword: (value, form) => {
        if (!value.length) return 'Preenchimento obrigatório'
        if (value !== form.password) return 'As senhas não coincidem'
        return ''
    }

}