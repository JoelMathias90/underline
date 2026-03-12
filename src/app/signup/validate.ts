export const userValidator = {

    firstName(firstName: string): string {
        if (!firstName.length) return 'Preenchimento obrigatório'
        if (firstName.length < 3) return 'Nome muito curto'
        if (!(/^\p{L}+(?:[ -]\p{L}+)*$/u).test(firstName)) return 'Válidos somente letras!'
        return ''
    },

    email(email: string): string {
        if (!email.length) return 'Preenchimento obrigatório'
        if (!/^.{4,}@/.test(email)) return 'Usuário de email muito curto'
        if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(email)) return "O email deve parecer com example@mail.com"
        return ''
    },
    
    password(password: string): string {
        if (!password.length) return 'Preenchimento obrigatório'
        if (password.length < 8) return 'Mínimo de 8 caracteres'
        if (!/[a-z]/.test(password)) return 'Pelo menos uma letra minúscula'
        if (!/[A-Z]/.test(password)) return 'Pelo menos uma letra maiúscula'
        if (!/\d/.test(password)) return 'Pelo menos um número'
        if (!/[@$!%*?&.#_-]/.test(password)) return 'Pelo menos um caracter especial'
        return ''
    },
    
    confirmPassword(confirmPassword: string, password: string): string {
        if (!confirmPassword.length) return 'Preenchimento obrigatório'
        if (confirmPassword !== password) return 'As senhas não coincidem'
        return ''
    },

    acceptedTerms(acceptedTerms: boolean): string {
        if (!acceptedTerms) return 'Preciso Aceitar Termos de Uso'
        return ''
    }
}

export type ValidatorField = keyof typeof userValidator