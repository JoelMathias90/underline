import { supabase } from "@/lib/supabase";

export async function createUser(
    email: string,
    password: string
) {

    const { data, error } = await supabase
        .auth
        .signUp({
            email,
            password
        })

    if (error) throw new Error(error.message)

    return data.user
}

export async function createProfile(
    userId: string,
    firstName: string,
    email: string
) {

    const { error } = await supabase
        .from('profiles')
        .insert({
            id: userId,
            first_name: firstName,
            email
        })

    if (error) throw new Error(error.message)
}