import { supabase } from "@/lib/supabase";

export default async function Home() {

const { data, error } = await supabase
  .from('User')
  .delete()
  .eq('id', 1)
  .select()

  return (
    <main>
    </main>
  );
}
