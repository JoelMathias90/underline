export type UserData = {
    firstName: string
    email: string
    password: string
    confirmPassword: string
    acceptedTerms: boolean
}

export type SignupActionState = {
    success?: boolean
    errors?: UserError
}

export type UserRequest = Record<keyof UserData, string>

export type UserError = Partial<Record<keyof UserData, string>>