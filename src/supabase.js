import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xtlotfjpzlkaqqjpwydr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0bG90ZmpwemxrYXFxanB3eWRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk2MDIxNTAsImV4cCI6MTk5NTE3ODE1MH0.8xZR-EVQYhM7vtfaPbpS_BUFaSVGR2Gu10ABP5NeiiI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
