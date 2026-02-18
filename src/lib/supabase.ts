import { createClient } from "@supabase/supabase-js";
import "dotenv";

const url = `${process.env.SUPABASE_URL}`;
const key = `${process.env.SUPABASE_KEY}`;

export const supabase = createClient(url, key)