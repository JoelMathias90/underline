import { SignupActionState, UserData, UserError } from "@/types/UserType"
import { userValidator } from "./validate"

export async function signupAction(
    previous: SignupActionState,
    formData: FormData
) {

    const raw = Object.fromEntries(formData)

    const data: UserData = {
        firstName: String(raw.firstName || '').trim(),
        email: String(raw.email || '').trim().toLowerCase(),
        password: String(raw.password || '').trim(),
        confirmPassword: String(raw.confirmPassword || '').trim(),
        acceptedTerms: raw.acceptedTerms === 'on'
    }

    const fields = Object.keys(data) as (keyof UserData)[]
    const errors: UserError = {}

    fields.forEach((field) => {

        let error = ''

        switch (field) {
            case 'confirmPassword':
                error = userValidator[field](data[field], data.password)
                break
            case 'acceptedTerms':
                error = userValidator[field](data[field])
                break
            default:
                error = userValidator[field](data[field])
        }

        if (error) {
            errors[field] = error
        }
    })
    
    if (Object.keys(errors).length > 0) {
        return { errors }
    }
    
    return { success: true }
}