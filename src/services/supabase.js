import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://lmyowbwtsagchxwdadsk.supabase.co";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxteW93Ynd0c2FnY2h4d2RhZHNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEyNzAwNjksImV4cCI6MjAxNjg0NjA2OX0.iNhNiyHaw7VebuWdnt9kOF_I5r62YN_vjDXiFfY3rd4`;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
